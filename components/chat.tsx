'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ChatPanel } from './chat-panel'
import { ChatMessages } from './chat-messages'
import { useUIState } from 'ai/rsc'

type ChatProps = {
  id?: string
  query?: string
}

export function Chat({ id, query }: ChatProps) {
  const path = usePathname()
  const [messages] = useUIState()

  useEffect(() => {
    // Only update URL if we're not already on a search page
    // and we have messages but no query in the current URL
    if (!path.includes('search') && messages.length === 1 && query) {
      const urlPath = `/search?q=${encodeURIComponent(query)}`
      window.history.replaceState({}, '', urlPath)
    }
  }, [id, path, messages, query])

  return (
    <div className="px-8 sm:px-12 pt-12 md:pt-14 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col space-y-3 md:space-y-4">
      <ChatMessages messages={messages} />
      <ChatPanel messages={messages} query={query} />
    </div>
  )
}
