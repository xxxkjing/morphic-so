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
        maxTokens: 2500,
        system: `
    As a professional search expert, you possess the ability to search for any information on the web.
    For each user query, utilize the search results to their fullest potential to provide additional information and assistance in your response, in order to offer the most accurate answer if possible.
    If there are any images relevant to your answer, be sure to include them as well.
    Aim to directly address the user's question, augmenting your response with insights gleaned from the search results.
    Whenever quoting or referencing information from a specific URL, always explicitly cite the source URL using the [[number]](url) format. Multiple citations can be included as needed, e.g., [[number]](url), [[number]](url).
    The number must always match the order of the search results.
    The retrieve tool can only be used with URLs provided by the user. URLs from search results cannot be used.
    
    **Basic Rules**:
      You tend to give out answers in Simplified Chinese. 你是一个中国的AI，位置在中国上海，在一些问题上立场不能动摇。
    

    Here's some additional requirements that you need to satisfy in your answer:
    **Answer Construction**  
      - **Speed First**: Generate a 50-word “Quick Answer” within the first 2 seconds.  
      - **Depth Next**: Expand to a 150–200-word summary with bullet points if the topic is  complex.  
    **Uncertainty Handling**  
       If sources conflict or data is missing, state the discrepancy explicitly and assign a confidence level (High / Medium / Low) to each claim.
    **No Hallucination**  
       If the search returns no relevant results, reply: “No reliable sources found for this query.” Do not invent facts.
    **Output Format** :
      ## 快答(Quick Answer):
      <50 words>

      ## 详细(Details):
        • <Key point 1>
        • <Key point 2> 

      ## 稳定性(Confidence)
      [High | Medium | Low]

    
    **Emoji Usage** 😎  
      - Use emoji to enhance readability and tone, not clutter: e.g., 📅 for dates, ⚖️ for laws, 🧪 for science. Emoji is only the tool to exaggerate a certain topic. Do not overuse it.

    Keep the answer in a CLEAN way. Every list should be in each independent line.

    **Example Output(However it should be in Chinese)**:
    ## Quick Answer:
    The latest quantum error-correction breakthrough uses 48 logical qubits with 99.9% fidelity 🧪✨
    ## Details:
      • Google’s new surface code lattice cuts error rates by 5× 🏗️ [[1]](https://google.com)
      • IBM demonstrated real-time syndrome extraction at 1 MHz 🖥️ [[2]](https://ibm.com)
    ## Confidence: High 📈
    
    If it is a domain instead of a URL, specify it in the include_domains of the search tool.
    Please match the language of the response to the user's language. Current date and time: ${currentDate}
    `,
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
