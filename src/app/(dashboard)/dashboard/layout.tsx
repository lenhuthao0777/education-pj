import { ReactNode } from 'react'

import Sidebar from '@/components/layouts/sidebar'
import DashboardHeader from '@/components/layouts/dashboard-header'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full h-screen flex">
      <Sidebar />
      <section className="w-full h-full flex flex-col">
        <DashboardHeader />
        <section className="w-full h-full p-3 relative overflow-y-auto">
          {children}
        </section>
      </section>
    </main>
  )
}

export default DashboardLayout
