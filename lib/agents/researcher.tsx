import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, ToolCallPart, ToolResultPart, streamText } from 'ai'
import { getTools } from './tools'
import { getModel, transformToolMessages } from '../utils'
import { AnswerSection } from '@/components/answer-section'

export async function researcher(
  uiStream: ReturnType<typeof createStreamableUI>,
  streamableText: ReturnType<typeof createStreamableValue<string>>,
  messages: CoreMessage[],
  apiKey?: string
) {
  let fullResponse = ''
  let hasError = false
  let finishReason = ''

  // Transform the messages if using Ollama provider
  let processedMessages = messages
  const useOllamaProvider = !!(
    process.env.OLLAMA_MODEL && process.env.OLLAMA_BASE_URL
  )
  const useAnthropicProvider = !!process.env.ANTHROPIC_API_KEY
  if (useOllamaProvider) {
    processedMessages = transformToolMessages(messages)
  }
  const includeToolResponses = messages.some(message => message.role === 'tool')
  const useSubModel = useOllamaProvider && includeToolResponses

  const streamableAnswer = createStreamableValue<string>('')
  const answerSection = <AnswerSection result={streamableAnswer.value} />

  const currentDate = new Date().toLocaleString()

  let result: any
  let attempts = 0
  const maxAttempts = (process.env.GOOGLE_API_KEYS?.split(',').length || 1) * 2; // Allow for retries

  let successfulApiKey: string | undefined;
  while (attempts < maxAttempts) {
    try {
      const { model, apiKey: newApiKey } = getModel(useSubModel, apiKey);
      successfulApiKey = newApiKey;
      result = await streamText({
        model: model,
        maxTokens: 800, // 进一步减少token数量以获得更快的响应速度
        temperature: 0.1, // 降低创造性，提高速度
        topP: 0.9,
        frequencyPenalty: 0.1,
        system: `搜索专家，用简体中文回答。基于搜索结果提供准确信息，引用格式：[[数字]](url)

Emoji 使用:
用来突出重点，让回答结构清晰，更赏心悦目，别喧宾夺主。每个回答中至少三种，点到为止。

Whenever quoting or referencing information from a specific URL, always explicitly cite the source URL using the [[number]](url) format. Multiple citations can be included as needed, e.g., [[number]](url), [[number]](url).

输出格式：
## 快答
<核心回答，50字以内>

## 详细

• 要点1 [[1]](url)

• 要点2 [[2]](url)

## 稳定性
[High/Medium/Low]

优先速度，保持简洁。无相关搜索结果时说明"未找到可靠来源"。`,
    messages: processedMessages,
    tools: getTools({
      uiStream,
      fullResponse
    }),
    onFinish: async event => {
      finishReason = event.finishReason
      fullResponse = event.text
      streamableAnswer.done()
    }
      });
      break; // Success, exit loop
    } catch (err: any) {
      attempts++;
      if (err.message && err.message.includes('quota')) {
        console.warn(`API key failed due to quota limit. Retrying... (${attempts}/${maxAttempts})`);
        if (attempts >= maxAttempts) {
          hasError = true;
          fullResponse = 'Error: All available API keys have exceeded their quota limits.';
          streamableText.update(fullResponse);
          break;
        }
        continue;
      } else {
        // For other errors, break the loop and report the error
        hasError = true;
        fullResponse = 'Error: ' + err.message;
        streamableText.update(fullResponse);
        break;
      }
    }
  }

  // If the result is not available, return an error response
  if (!result) {
    return { result, fullResponse, hasError, toolResponses: [] }
  }

  const hasToolResult = messages.some(message => message.role === 'tool')
  if (!useAnthropicProvider || hasToolResult) {
    uiStream.append(answerSection)
  }

  // Process the response
  const toolCalls: ToolCallPart[] = []
  const toolResponses: ToolResultPart[] = []
  for await (const delta of result.fullStream) {
    switch (delta.type) {
      case 'text-delta':
        if (delta.textDelta) {
          fullResponse += delta.textDelta
          if (useAnthropicProvider && !hasToolResult) {
            streamableText.update(fullResponse)
          } else {
            streamableAnswer.update(fullResponse)
          }
        }
        break
      case 'tool-call':
        toolCalls.push(delta)
        break
      case 'tool-result':
        if (!delta.result) {
          hasError = true
        }
        toolResponses.push(delta)
        break
      case 'error':
        console.log('Error: ' + delta.error)
        hasError = true
        fullResponse += `\nError occurred while executing the tool`
        break
    }
  }
  messages.push({
    role: 'assistant',
    content: [{ type: 'text', text: fullResponse }, ...toolCalls]
  })

  if (toolResponses.length > 0) {
    // Add tool responses to the messages
    messages.push({ role: 'tool', content: toolResponses })
  }

  return { result, fullResponse, hasError, toolResponses, finishReason, apiKey: successfulApiKey }
}
