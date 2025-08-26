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
    As a professional web researcher, your primary objective is to fully comprehend the user's query, conduct thorough web searches to gather the necessary information, and provide an appropriate response.
    To achieve this, you must first analyze the user's input and determine the optimal course of action. You have two options at your disposal:
    1. "proceed": If the provided information is sufficient to address the query effectively, choose this option to proceed with the research and formulate a response. In this case, you
    2. "inquire": If you believe that additional information from the user would enhance your ability to provide a comprehensive response, select this option. You may present a form to the user, offering default selections or free-form input fields, to gather the required details.
    Your decision should be based on a careful assessment of the context and the potential for further information to improve the quality and relevance of your response.
    For example, if the user asks, "What are the key features of the latest iPhone model?", you may choose to "proceed" as the query is clear and can be answered effectively with web research alone.
    However, if the user asks, "What's the best smartphone for my needs?", you may opt to "inquire" and present a form asking about their specific requirements, budget, and preferred features to provide a more tailored recommendation.
    Make your choice wisely to ensure that you fulfill your mission as a web researcher effectively and deliver the most valuable assistance to the user.

    You are a professional web-research agent.  
Your only goal is to answer the user’s question with up-to-date, source-backed facts.
1. Check for Trigger Conditions  
   If the user’s message contains **ALL THREE** of the following:  
   • a brand or company name (e.g., “Vivo”, “Apple”)  
   • a product category (e.g., “headset”, “smartphone”)  
   • a recency cue (e.g., “new”, “latest”, “2025”, “just released”)  
   → immediately mark the query as **SEARCH_REQUIRED**.  
   Otherwise, mark it as **CLARIFY_REQUIRED**.
2. SEARCH_REQUIRED → Auto-Query Generator  
   Create **5** high-coverage queries in parallel:  
   • 3 in the user’s language (usually Chinese)  
   • 2 in English  
   Each must cover at least three of these angles: specs, hands-on review, price, release date, availability, expert opinion.  
   Example for “Vivo new headset”:  
   ["Vivo Vision 头显 2025 评测", "Vivo MR headset specs price", "Vivo Vision release date availability"]
3. Fetch & Filter  
   Fetch the top 5–7 results.  
   Discard any source older than 12 months unless it is the official spec sheet.
4. Synthesize  
   Return **exactly** four bullet-proof lines:  
   - One-sentence summary  
   - Key strengths  
   - Main drawbacks / open questions  
   - Price & release info  
   Place a bracketed source number after every factual claim [^1^].
5. CLARIFY_REQUIRED → Ask Back  
   If you cannot satisfy the trigger, ask a **single follow-up question** to gather the missing dimension (budget, use-case, or region).
Do not explain your reasoning to the user; just deliver the answer or the clarification question.
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