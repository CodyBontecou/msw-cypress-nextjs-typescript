import '../assets/globals.css'
import { AppProps } from 'next/app'
import { FC } from 'react'
require('../mocks')
import Router from 'next/router'
import React from 'react'

const Noop: FC = ({ children }) => <> </>

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const [loading, setLoading] = React.useState(false)
  React.useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true)
    }
    const end = () => {
      console.log('finished')
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  const Layout = Component.Layout ?? Noop

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
