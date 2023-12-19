'use client'

import { FC, useState } from 'react'
import { ChevronRight, FileText, LucideIcon } from 'lucide-react'
import Link from 'next/link'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn, getDataCookie } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import SidebarSubItem from './sidebar-sub-item'

interface SidebarItemProps {
  title: string
  path?: string
  permission: string[]
  child: any[]
  icon: LucideIcon
}

const SidebarItem: FC<SidebarItemProps> = ({
  title,
  icon: Icon,
  path,
  child,
  permission,
}) => {
  const [open, setOpen] = useState(false)

  const pathName = usePathname()

  const isActive = pathName === path

  const userInfo = getDataCookie('userInfo')

  return (
    <>
      {!permission.includes(userInfo?.role as string) ? (
        <>
          {child.length ? (
            <li className="flex items-center">
              <Collapsible
                open={open}
                onOpenChange={setOpen}
                className="w-full"
              >
                <CollapsibleTrigger
                  className={cn(
                    'flex items-center w-full py-1 px-2 hover:bg-neutral-300 text-muted-foreground dark:hover:bg-neutral-600 rounded-sm cursor-pointer',
                  )}
                >
                  {!path ? (
                    <ChevronRight
                      className={cn(
                        'w-4 h-4 mr-1 transition hover:bg-neutral-400 rounded-sm',
                        open ? ' rotate-90' : '',
                      )}
                    />
                  ) : null}
                  {path ? (
                    <Link
                      href={path}
                      className="text-sm w-full flex items-center"
                    >
                      <FileText className="w-4 h-4 mr-1" /> {title}
                    </Link>
                  ) : (
                    <span className="text-sm w-full flex items-center">
                      <Icon className="w-4 h-4 mr-1" /> {title}
                    </span>
                  )}
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <ul className="flex flex-col">
                    {child.map((item: any) => (
                      <SidebarSubItem
                        key={item.id}
                        title={item.title}
                        path={item.path as string}
                        name={item.name}
                      />
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          ) : (
            <li
              className={cn(
                'text-sm text-muted-foreground cursor-pointer rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition py-1 pl-7 pr-2 line-clamp-1',
                isActive && !child.length
                  ? ' bg-neutral-200 text-zinc-900'
                  : '',
              )}
            >
              <Link href={path as string} className="w-full h-full flex">
                <span className="text-sm w-full flex items-center">
                  <Icon className="w-4 h-4 mr-1" /> {title}
                </span>
              </Link>
            </li>
          )}
        </>
      ) : null}
    </>
  )
}

export default SidebarItem
