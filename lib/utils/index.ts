import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { createOllama } from 'ollama-ai-provider'
import { createOpenAI } from '@ai-sdk/openai'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { anthropic } from '@ai-sdk/anthropic'
import { CoreMessage } from 'ai'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getModel(useSubModel = false, apiKey?: string) {
  const ollamaBaseUrl = process.env.OLLAMA_BASE_URL + '/api'
  const ollamaModel = process.env.OLLAMA_MODEL
  const ollamaSubModel = process.env.OLLAMA_SUB_MODEL
  const openaiApiBase = process.env.OPENAI_API_BASE
  const openaiApiKey = process.env.OPENAI_API_KEY
  let openaiApiModel = process.env.OPENAI_API_MODEL || 'gpt-4o'
  const googleApiKeys = process.env.GOOGLE_API_KEYS?.split(',') || []
  const anthropicApiKey = process.env.ANTHROPIC_API_KEY

  if (
    !(ollamaBaseUrl && ollamaModel) &&
    !openaiApiKey &&
    googleApiKeys.length === 0 &&
    !anthropicApiKey
  ) {
    throw new Error(
      'Missing environment variables for Ollama, OpenAI, Google or Anthropic'
    )
  }
  // Ollama
  if (ollamaBaseUrl && ollamaModel) {
    const ollama = createOllama({ baseURL: ollamaBaseUrl })

    if (useSubModel && ollamaSubModel) {
      return { model: ollama(ollamaSubModel) }
    }

    return { model: ollama(ollamaModel) }
  }

  // Google Gemini
  if (googleApiKeys.length > 0) {
    let selectedApiKey = apiKey;
    if (!selectedApiKey) {
      // If no preferred key is provided, select a random one
      const randomIndex = Math.floor(Math.random() * googleApiKeys.length);
      selectedApiKey = googleApiKeys[randomIndex];
    }
    
    const google = createGoogleGenerativeAI({ apiKey: selectedApiKey });
    return { model: google('models/gemini-2.5-flash-lite-preview-06-17'), apiKey: selectedApiKey };
  }

  if (anthropicApiKey) {
    return { model: anthropic('claude-3-5-sonnet-20240620') }
  }

  // Fallback to OpenAI instead

  const openai = createOpenAI({
    baseURL: openaiApiBase, // optional base URL for proxies etc.
    apiKey: openaiApiKey, // optional API key, default to env property OPENAI_API_KEY
    organization: '' // optional organization
  })

  return { model: openai.chat(openaiApiModel) }
}

/**
 * Takes an array of AIMessage and modifies each message where the role is 'tool'.
 * Changes the role to 'assistant' and converts the content to a JSON string.
 * Returns the modified messages as an array of CoreMessage.
 *
 * @param aiMessages - Array of AIMessage
 * @returns modifiedMessages - Array of modified messages
 */
export function transformToolMessages(messages: CoreMessage[]): CoreMessage[] {
  return messages.map(message =>
    message.role === 'tool'
      ? {
          ...message,
          role: 'assistant',
          content: JSON.stringify(message.content),
          type: 'tool'
        }
      : message
  ) as CoreMessage[]
}

/**
 * Sanitizes a URL by replacing spaces with '%20'
 * @param url - The URL to sanitize
 * @returns The sanitized URL
 */
export function sanitizeUrl(url: string): string {
  return url.replace(/\s+/g, '%20')
}
