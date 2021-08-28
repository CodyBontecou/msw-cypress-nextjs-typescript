import { FC } from 'react'
import Link from 'next/link'
import DropdownMenu from '../DropdownMenu'

const Header: FC = () => {
  return (
    <div className="relative py-2 px-3 border-b border-gray-200 flex justify-between items-end lg:py-5 lg:px-6">
      <Link href={`/`}>
        <a className="font-bold">Blogflow</a>
      </Link>
      <DropdownMenu />
    </div>
  )
}

export default Header
