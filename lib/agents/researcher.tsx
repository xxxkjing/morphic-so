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
        maxTokens: 2500, // 增加token数量防止回答被截断
        temperature: 0.1,
        topP: 0.9,
        frequencyPenalty: 0.1,
        system: `你是专业搜索分析专家，用简体中文回答用户问题。

**核心要求：**
- 基于搜索结果提供准确、完整的回答
- 每个事实都必须引用来源：[[数字]](url)
- 回答必须完整，不能被截断
- 使用适当emoji增强可读性（每个回答至少3个）

**严格输出格式：**
第一要义：！！！非常重要！！！回答每行一个，不得拥挤在一起！！！
## 🔍 快速回答
[1-2句话总结核心答案，必须包含关键信息，50字以内]

## 📋 详细分析
**1. [此处是你的第一个观点]** 🎯<br>
• 具体内容描述 [[1]](related-url-address-1)
  
<br>
• 补充细节信息 [[2]](related-url-address-2)
  
<br>
**2. [此处是你的第二个观点]** 📊<br>
• 具体内容描述 [[3]](related-url-address-3)
  
<br>
• 补充细节信息 [[4]](related-url-address-4)
  
<br>
    
## 🎯 可信度评估
**[High/Medium/Low]** - [简述原因]

**格式要求：**
- 每个部分必须完整输出，不得省略
- 引用必须对应搜索结果编号
- 保持结构清晰，分段合理
- 无搜索结果时回复："暂无可靠搜索结果支持此问题"`,
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
