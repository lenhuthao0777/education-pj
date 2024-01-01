'use client'
import {
  Book,
  LayoutDashboard,
  DollarSign,
  ChevronsLeft,
  MenuIcon,
} from 'lucide-react'
import SidebarItem from './sidebar-item'
import SidebarHeader from './sidebar-header'
import { useMediaQuery } from 'usehooks-ts'
import { ElementRef, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export const SIDEBAR: any = [
  {
    id: 1,
    title: 'Dashboard',
    permission: ['ADMIN', 'TEACHER'],
    icon: LayoutDashboard,
    path: '/dashboard',
    child: [],
  },
  {
    id: 2,
    title: 'Salary',
    permission: ['ADMIN'],
    icon: DollarSign,
    path: '/dashboard/salary',
    child: [],
  },
  {
    id: 3,
    title: 'Class Management',
    permission: ['ADMIN', 'TEACHER'],
    icon: Book,
    child: [
      {
        id: '3.1',
        title: 'Class',
        path: '/class',
        name: 'class',
      },
      {
        id: '3.2',
        title: 'Class Note Book',
        path: '/dashboard/class/note-book',
        name: 'note-book',
      },
    ],
  },
]

const Sidebar = () => {
  const [isResetting, setIsResetting] = useState(false)

  const isMobile: boolean = useMediaQuery('(max-width: 768px)')

  const sidebarRef = useRef<ElementRef<'aside'>>(null)

  const [isCollapsed, setIsCollapsed] = useState(isMobile)

  const isResizingRef = useRef(false)

  const navbarRef = useRef<ElementRef<'div'>>(null)

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)

      sidebarRef.current.style.width = '0'
      navbarRef.current.style.setProperty('width', '100%')
      navbarRef.current.style.setProperty('left', '0')
      setTimeout(() => setIsResetting(false), 300)
    }
  }

  const handleOpenSidebar = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false)
      // setIsResetting(false)
      sidebarRef.current.style.width = '20rem'
      // setTimeout(() => setIsResetting(true), 300)
    }
  }

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          'group/sidebar h-full w-80 bg-main-blue1 dark:border-r dark:border-slate-700 overflow-y-auto relative flex flex-col z-20',
          isResetting ? 'transition-all ease-in-out duration-300' : '',
          isMobile ? 'w-0' : '',
        )}
      >
        <div className="px-3 hover:bg-neutral-300 transition">
          <SidebarHeader />
          <div
            onClick={collapse}
            role="button"
            className={cn(
              'w-5 h-5 text-muted-foreground rounded-sm hover:bg-neutral-400 dark:hover:bg-neutral-600 absolute top-1.5 right-2 opacity-0 group-hover/sidebar:opacity-100 transition',
              isMobile && 'opacity-100',
            )}
          >
            <ChevronsLeft className="w-5 h-5 z-20" />
          </div>
        </div>

        <div className="mt-5"></div>

        {/* <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute right-0 top-0 h-full w-1 bg-primary/10" /> */}
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          'absolute top-0 z-20 left-60 w-[calc(100% - 240px)]',
          isResetting ? 'transition-all ease-in-out duration-300' : '',
          isMobile ? 'left-0 w-full' : '',
        )}
      >
        <nav className="bg-transparent w-full">
          {isCollapsed ? (
            <MenuIcon
              role="button"
              className="w-5 h-5 text-muted-foreground"
              onClick={handleOpenSidebar}
            />
          ) : null}
        </nav>
      </div>
    </>
  )
}

export default Sidebar
