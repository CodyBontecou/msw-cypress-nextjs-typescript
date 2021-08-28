import { FC } from 'react'
import Image from 'next/image'

const Avatar: FC = () => {
  return (
    <>
      <Image
        className="rounded-full"
        alt="User Avatar"
        src="/images/blue-chair-photo-of-me.jpeg"
        height={32}
        width={32}
        quality="75"
        priority
      />
    </>
  )
}

export default Avatar
