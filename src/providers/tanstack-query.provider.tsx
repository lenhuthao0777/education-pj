'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const query = new QueryClient()

const TanStackQueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>
}

export default TanStackQueryProvider
