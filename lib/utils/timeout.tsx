import { AnswerSection } from '@/components/answer-section'
import { createStreamableValue } from 'ai/rsc'

export class TimeoutError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TimeoutError'
  }
}

export function withTimeout<T>(
  promise: Promise<T>,
  timeout: number,
  fallback: T,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      console.warn(`Operation timed out after ${timeout}ms`)
      resolve(fallback)
    }, timeout)

    promise
      .then(result => {
        clearTimeout(timer)
        resolve(result)
      })
      .catch(error => {
        clearTimeout(timer)
        if (error.name === 'AbortError') {
          console.warn(`Operation aborted, resolving with fallback.`)
          resolve(fallback)
        } else {
          reject(error)
        }
      })
  })
}

export function createFallbackResponse(messages: any[]) {
  const stream = createStreamableValue()
  const fallbackMessage = {
    id: Date.now().toString(),
    role: 'assistant' as const,
    content: [
      {
        type: 'text' as const,
        text: 'I am having trouble connecting to my tools. Please try again later.',
      },
    ],
    tool_calls: [],
  }
  stream.done({
    ...fallbackMessage,
    annotations: [],
  })
  return <AnswerSection result={stream.value} />
}
