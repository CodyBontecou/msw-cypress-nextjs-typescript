import { FC, useState } from 'react'
import Link from 'next/link'
import Avatar from '../Avatar'
import s from './DropdownMenu.module.css'

const DropdownMenu: FC = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <Avatar />
      {expanded && (
        <div
          className={`absolute -ml-10 p-4 rounded-lg bg-white ${s.dropdownShadow}`}
        >
          <div className="mx-20px flex flex-col items-start justify-center">
            <div className="font-normal text-xl leading-5">name</div>
            <div className="mt-1 mr-1 font-bold leading-4">number</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
