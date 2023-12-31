import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: [
    {
      media: '(prefers-color-scheme: light)',
      url: '/logo.svg',
      href: '/logo.svg',
    },
    {
      media: '(prefers-color-scheme: dark)',
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'bg-main-gray1')}>{children}</body>
    </html>
  )
}
