import { FC } from 'react'
import { Header } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="fit">{children}</main>
    </div>
  )
}

export default Layout
