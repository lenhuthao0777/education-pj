'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface SidebarSubItemProps {
  path: string
  title: string
  name: string
}
const SidebarSubItem: FC<SidebarSubItemProps> = ({ path, title, name }) => {
  const pathName = usePathname()

  const isActive = pathName === path

  return (
    <li
      className={cn(
        'text-sm text-muted-foreground cursor-pointer rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition py-1 pl-8 pr-2 line-clamp-1',
        isActive ? ' bg-neutral-200 text-zinc-900' : '',
      )}
    >
      <Link href={path} className="w-full h-full flex">
        {title}
      </Link>
    </li>
  )
}

export default SidebarSubItem
