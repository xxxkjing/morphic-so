import { tool } from 'ai'
import { createStreamableValue } from 'ai/rsc'
import Exa from 'exa-js'
import { searchSchema } from '@/lib/schema/search'
import { SearchSection } from '@/components/search-section'
import { ToolProps } from '.'
import { sanitizeUrl } from '@/lib/utils'
import { SearchResults } from '@/lib/types'

export const searchTool = ({ uiStream, fullResponse }: ToolProps) =>
  tool({
    description: '根据用户查询智能搜索网络信息。自动分析查询意图，优化搜索关键词，获取最相关和权威的搜索结果。适合回答事实性问题、获取最新信息、查找具体数据等。',
    parameters: searchSchema,
    execute: async ({
      query,
      max_results,
      search_depth,
      include_domains,
      exclude_domains
    }) => {
      let hasError = false
      // Append the search section with immediate loading state
      const streamResults = createStreamableValue<string>()
      
      // Show single loading state to reduce UI updates
      streamResults.update(JSON.stringify({
        loading: true,
        query: query,
        message: '正在生成搜索脚本...'
      }))
      
      uiStream.update(
        <SearchSection
          result={streamResults.value}
          includeDomains={include_domains}
        />
      )

      // Tavily API requires a minimum of 5 characters in the query
      const filledQuery =
        query.length < 5 ? query + ' '.repeat(5 - query.length) : query
      let searchResult
      const searchAPI: 'tavily' | 'exa' = 'tavily'
      
      try {
        // Direct search without intermediate progress updates
        searchResult =
          searchAPI === 'tavily'
            ? await tavilySearch(
                filledQuery,
                max_results,
                search_depth,
                include_domains,
                exclude_domains
              )
            : await exaSearch(query)
      } catch (error) {
        console.error('Search API error:', error)
        hasError = true
      }

      if (hasError) {
        fullResponse = `An error occurred while searching for "${query}.`
        uiStream.update(null)
        streamResults.done()
        return searchResult
      }

      streamResults.done(JSON.stringify(searchResult))

      return searchResult
    }
  })

async function tavilySearch(
  query: string,
  maxResults: number = 5,
  searchDepth: 'basic' | 'advanced' = 'basic',
  includeDomains: string[] = [],
  excludeDomains: string[] = []
): Promise<any> {
  const apiKey = process.env.TAVILY_API_KEY
  
  // 优化搜索查询：清理无关字符，提取关键词
  const optimizedQuery = query
    .replace(/[？?！!。.，,]/g, ' ') // 移除标点符号
    .replace(/\s+/g, ' ') // 合并多余空格
    .trim()
  
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      api_key: apiKey,
      query: optimizedQuery,
      max_results: Math.max(maxResults, 5), // 确保至少12个搜索结果
      search_depth: searchDepth === 'basic' ? 'advanced' : 'advanced', // 根据参数选择搜索深度
      include_images: true, // 禁用图片提高速度
      include_answers: true, // 包含答案提高相关性
      include_raw_content: true, // 包含原始内容
      include_domains: includeDomains,
      exclude_domains: [...excludeDomains, 'pinterest.com', 'instagram.com', 'tiktok.com', 'douyin.com'], // 排除低质量内容
    })
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  // sanitize the image urls
  const data = await response.json()
  const sanitizedData: SearchResults = {
    ...data,
    images: data.images.map((url: any) => sanitizeUrl(url))
  }

  return sanitizedData
}

async function exaSearch(
  query: string,
  maxResults: number = 10,
  includeDomains: string[] = [],
  excludeDomains: string[] = []
): Promise<any> {
  const apiKey = process.env.EXA_API_KEY
  const exa = new Exa(apiKey)
  return exa.searchAndContents(query, {
    highlights: true,
    numResults: maxResults,
    includeDomains,
    excludeDomains
  })
}
