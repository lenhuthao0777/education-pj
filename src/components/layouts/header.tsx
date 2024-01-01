import Link from 'next/link'
import Logo from './logo'
import UserAvatar from './UserAvatar'

const Header = () => {
  const menus = ['Home', 'About Us', 'Blog']

  return (
    <header className="h-16 w-full flex items-center sticky top-0 z-10 bg-background border-b border-gray-200">
      <nav className="container w-ful flex items-center justify-center md:justify-between">
        <Logo />
        <div className="flex items-center space-x-2">
          <ul className="font-semibold text-sm flex items-center">
            {menus.map((item) => (
              <li
                key={item}
                className="px-10 text-sm cursor-pointer hover:text-gray-200 transition-all"
              >
                <Link href="/" className="block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="">
            <UserAvatar />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
