import { CoreMessage, generateObject } from 'ai'
import { nextActionSchema } from '../schema/next-action'
import { getModel } from '../utils'

// Decide whether inquiry is required for the user input
export async function taskManager(messages: CoreMessage[], apiKey?: string) {
  let attempts = 0
  const maxAttempts = (process.env.GOOGLE_API_KEYS?.split(',').length || 1) * 2; // Allow for retries

  let successfulApiKey: string | undefined;
  while (attempts < maxAttempts) {
    try {
      const { model, apiKey: newApiKey } = getModel(false, apiKey);
      successfulApiKey = newApiKey;
      const result = await generateObject({
        model: model,
        system: `
    As a professional web researcher, analyze the user's query and determine if it's clear enough to proceed with research.
    
    IMPORTANT: Prioritize speed and user experience. Only choose "inquire" for extremely vague queries (less than 5% of cases).
    
    Options:
    1. "proceed": For 95%+ of queries that have enough context to provide useful research results
    2. "inquire": Only for completely unclear queries like "help me" or "what should I do?"
    
    Examples of queries that should PROCEED (not inquire):
    - "What are the best smartphones in 2024?" → PROCEED
    - "Tell me about Tesla's latest models" → PROCEED
    - "How does machine learning work?" → PROCEED
    - "Compare iPhone vs Android" → PROCEED
    - "Best restaurants in Tokyo" → PROCEED
    
    Only INQUIRE for extremely vague queries:
    - "Help me" → INQUIRE
    - "What should I do?" → INQUIRE
    
    Make decisions quickly to minimize waiting time. When in doubt, choose "proceed".
    `,
      messages,
      schema: nextActionSchema
    })

      return { ...result, apiKey: successfulApiKey };
    } catch (error: any) {
      attempts++;
      if (error.message && error.message.includes('quota')) {
        console.warn(`API key failed due to quota limit. Retrying... (${attempts}/${maxAttempts})`);
        if (attempts >= maxAttempts) {
          console.error('Error: All available API keys have exceeded their quota limits.');
          return null;
        }
        continue;
      } else {
        // For other errors, break the loop and report the error
        console.error('Error in taskManager:', error.message);
        return null;
      }
    }
  }
  return null;
}