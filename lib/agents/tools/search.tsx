import { tool } from 'ai'
import { createStreamableValue } from 'ai/rsc'
import Exa from 'exa-js'
import { searchSchema } from '@/lib/schema/search'
import { SearchSection } from '@/components/search-section'
import { ToolProps } from '.'
import { sanitizeUrl } from '@/lib/utils'
import { SearchResults, SearchResultItem } from '@/lib/types'
import { withTimeout } from '../../utils/withTimeout'

export const searchTool = ({ uiStream, fullResponse }: ToolProps) =>
  tool({
    description: 'Search the web for information',
    parameters: searchSchema,
    execute: async ({
      query,
      max_results = 6,
      search_depth,
      include_domains,
      exclude_domains
    }) => {
      const streamResults = createStreamableValue<string>()
      uiStream.update(
        <SearchSection
          result={streamResults.value}
          includeDomains={include_domains}
        />
      )

      const filledQuery =
        query.length < 5 ? query + ' '.repeat(5 - query.length) : query

      try {
        const [tavilyResults, exaResults] = await Promise.allSettled([
          withTimeout(
            tavilySearch(
              filledQuery,
              max_results,
              search_depth,
              include_domains,
              exclude_domains
            ),
            3000
          ),
          withTimeout(
            exaSearch(
              query,
              max_results,
              include_domains,
              exclude_domains
            ),
            3000
          )
        ])

        let searchResult: SearchResults = {
          images: [],
          results: [],
          query: filledQuery
        }

        if (tavilyResults.status === 'fulfilled') {
          searchResult.images = tavilyResults.value.images
          searchResult.results.push(...tavilyResults.value.results)
        } else {
          console.error('Tavily search failed:', tavilyResults.reason)
        }

        if (exaResults.status === 'fulfilled') {
          searchResult.results.push(...exaResults.value.results)
        } else {
          console.error('Exa search failed:', exaResults.reason)
        }

        // Deduplicate results by URL
        const uniqueResults = Array.from(
          new Map(
            searchResult.results.map(result => [result.url, result])
          ).values()
        )
        searchResult.results = uniqueResults

        // Limit to top 2 results and only include raw content for these
        const top2Results = searchResult.results.slice(0, 2)
        const otherResults = searchResult.results.slice(2).map(result => ({
          ...result,
          content: ''
        }))

        searchResult.results = [...top2Results, ...otherResults]

        if (uniqueResults.length === 0) {
          fullResponse = `No results found for "${query}".`
          uiStream.update(null)
          streamResults.done()
          return
        }

        streamResults.done(JSON.stringify(searchResult))

        // Return only the top 2 results to the agent
        return top2Results
      } catch (error) {
        console.error('Search API error:', error)
        fullResponse = `An error occurred while searching for "${query}".`
        uiStream.update(null)
        streamResults.done()
      }
    }
  })

async function tavilySearch(
  query: string,
  maxResults: number = 6,
  searchDepth: 'basic' | 'advanced' = 'basic',
  includeDomains: string[] = [],
  excludeDomains: string[] = []
): Promise<SearchResults> {
  const apiKey = process.env.TAVILY_API_KEY
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      max_results: maxResults,
      search_depth: searchDepth,
      include_raw_content: true,
      include_domains: includeDomains,
      exclude_domains: excludeDomains
    })
  })

  if (!response.ok) {
    throw new Error(`Tavily API error: ${response.status}`)
  }

  const data = await response.json()
  return {
    ...data,
    images: data.images?.map((url: any) => sanitizeUrl(url)) || []
  }
}

async function exaSearch(
  query: string,
  maxResults: number = 6,
  includeDomains: string[] = [],
  excludeDomains: string[] = []
): Promise<SearchResults> {
  const apiKey = process.env.EXA_API_KEY
  const exa = new Exa(apiKey)
  const exaResults = await exa.searchAndContents(query, {
    highlights: true,
    numResults: maxResults,
    includeDomains,
    excludeDomains
  })

  const results: SearchResultItem[] = exaResults.results.map((result: any) => ({
    title: result.title || '',
    url: result.url,
    content: result.text || ''
  }))

  return {
    images: [],
    results,
    query
  }
}
