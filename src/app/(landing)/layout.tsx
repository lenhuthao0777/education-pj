import { ReactNode } from 'react'
import type { Metadata } from 'next'

import Header from '@/components/layouts/header'
import Footer from '@/components/layouts/footer'

export const metadata: Metadata = {
  title: 'TDT Education',
  description: 'Home Page',
}

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </main>
  )
}

export default LandingLayout
