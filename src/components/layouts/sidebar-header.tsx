'use client'

import { ChevronsUpDown, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

import { Avatar, AvatarFallback } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getDataCookie } from '@/lib/utils'

const HeadSidebar = () => {
  const router = useRouter()

  const userInfo = getDataCookie('userInfo')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full outline-none">
        <div className="flex items-center cursor-pointer">
          <div className="py-1">
            <Avatar className="w-6 h-6 rounded-sm">
              <AvatarFallback className="bg-zinc-700 rounded-sm text-gray-100 text-xs">
                <User className="w-3 h-3" />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-center ml-2 w-full text-muted-foreground">
            <span className="line-clamp-1 overflow-hidden text-xs font-semibold">
              {userInfo?.email}
            </span>
            <ChevronsUpDown className="w-4 h-4 ml-2" />
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuLabel className="text-xs text-muted-foreground font-thin">
          {userInfo?.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default HeadSidebar
