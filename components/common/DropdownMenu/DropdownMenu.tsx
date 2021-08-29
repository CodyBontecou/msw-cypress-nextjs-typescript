import { FC, useState } from 'react'
import Link from 'next/link'
import Avatar from '../Avatar'
import s from './DropdownMenu.module.css'

const DropdownMenu: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      id="dropdownMenu"
      className="relative cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <Avatar />
      {expanded && (
        <div
          className={`absolute -ml-10 p-4 rounded-lg bg-white shadow-lg border border-gray-100`}
        >
          <div className="mx-20px flex flex-col items-start justify-center">
            <Link href="/">
              <a className="leading-5" data-test="dropdown-home">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="mt-2 leading-5">About</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
