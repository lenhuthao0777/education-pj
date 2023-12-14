import Link from 'next/link'
import { Avatar, AvatarFallback } from '../ui/avatar'

const Header = () => {
  const menus = ['Home', 'About Us', 'Blog']
  return (
    <header className="h-16 w-full flex items-center sticky top-0 z-10 bg-background border-b border-gray-200 bg-main-blue1">
      <nav className="container w-ful flex items-center justify-center md:justify-between">
        <h2 className="text-2xl font-extrabold text-white">T-D-T</h2>
        <div className="flex items-center space-x-2">
          <ul className="text-white font-semibold text-sm flex items-center">
            {menus.map((item) => (
              <li
                key={item}
                className="px-10 cursor-pointer hover:text-gray-200 transition-all"
              >
                <Link href="/" className="block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="">
            <Avatar className="cursor-pointer">
              <AvatarFallback>HL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
