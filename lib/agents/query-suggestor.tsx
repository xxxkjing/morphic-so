import { createStreamableUI, createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamObject } from 'ai'
import { PartialRelated, relatedSchema } from '@/lib/schema/related'
import SearchRelated from '@/components/search-related'
import { getModel } from '../utils'

export async function querySuggestor(
  uiStream: ReturnType<typeof createStreamableUI>,
  messages: CoreMessage[],
  apiKey?: string
) {
  const objectStream = createStreamableValue<PartialRelated>()
  uiStream.append(<SearchRelated relatedQueries={objectStream.value} />)

  const lastMessages = messages.slice(-1).map(message => {
    return {
      ...message,
      role: 'user'
    }
  }) as CoreMessage[]

  let finalRelatedQueries: PartialRelated = {}
  let attempts = 0
  const maxAttempts = (process.env.GOOGLE_API_KEYS?.split(',').length || 1) * 2; // Allow for retries

  let successfulApiKey: string | undefined;
  while (attempts < maxAttempts) {
    try {
      const { model, apiKey: newApiKey } = getModel(false, apiKey);
      successfulApiKey = newApiKey;
      await streamObject({
        model: model,
        system: `As a professional web researcher, your task is to generate a set of three queries that explore the subject matter more deeply, building upon the initial query and the information uncovered in its search results.

    For instance, if the original query was "Starship's third test flight key milestones", your output should follow this format:

    "{
      "related": [
        "What were the primary objectives achieved during Starship's third test flight?",
        "What factors contributed to the ultimate outcome of Starship's third test flight?",
        "How will the results of the third test flight influence SpaceX's future development plans for Starship?"
      ]
    }"

    Aim to create queries that progressively delve into more specific aspects, implications, or adjacent topics related to the initial query. The goal is to anticipate the user's potential information needs and guide them towards a more comprehensive understanding of the subject matter.
    Please match the language of the response to the user's language.`,
    messages: lastMessages,
    schema: relatedSchema
      })
        .then(async result => {
          for await (const obj of result.partialObjectStream) {
            if (obj.items) {
              objectStream.update(obj)
              finalRelatedQueries = obj
            }
          }
        })
        .finally(() => {
          // Do not close the stream here, let the loop handle it.
        })
      break; // Success, exit loop
    } catch (err: any) {
      attempts++;
      if (err.message && err.message.includes('quota')) {
        console.warn(`API key failed due to quota limit. Retrying... (${attempts}/${maxAttempts})`);
        if (attempts >= maxAttempts) {
          console.error('Error: All available API keys have exceeded their quota limits.');
          break;
        }
        continue;
      } else {
        // For other errors, break the loop and report the error
        console.error('Error in querySuggestor:', err.message);
        break;
      }
    }
  }

  objectStream.done();
  return { ...finalRelatedQueries, apiKey: successfulApiKey }
}
