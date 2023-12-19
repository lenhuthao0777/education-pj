'use client'
import { ChevronLeft, Bell, BellDot } from 'lucide-react'
import { useRouter } from 'next/navigation'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const Header = () => {
  const router = useRouter()

  const isInfo = true

  const showListNotify = () => {
    console.log('show')
  }

  return (
    <nav className="w-full h-10 bg-background border-b border-zinc-200 px-1 flex items-center">
      <div className="flex items-center w-full space-x-2">
        <ChevronLeft
          onClick={() => router.back()}
          className="w-6 h-6 text-muted-foreground hover:text-zinc-700 rounded-sm hover:bg-neutral-200 cursor-pointer"
        />

        {/* <p className="text-xs text-zinc-700 select-none">
          {Breadcrumbs[pathName as keyof typeof Breadcrumbs]}
        </p> */}
      </div>
      <div
        className="w-8 h-8 rounded-sm transition flex items-center justify-center hover:bg-neutral-200 cursor-pointer"
        onClick={showListNotify}
      >
        <Popover>
          <PopoverTrigger asChild>
            {isInfo ? (
              <BellDot className="w-5 h-5 text-muted-foreground" />
            ) : (
              <Bell className="w-5 h-5 text-muted-foreground" />
            )}
          </PopoverTrigger>
          <PopoverContent>test</PopoverContent>
        </Popover>
      </div>
    </nav>
  )
}

export default Header
