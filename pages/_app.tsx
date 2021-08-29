import '../assets/globals.css'
import { AppProps } from 'next/app'
import { FC } from 'react'
require('../mocks')
import Router from 'next/router'
import React from 'react'
import NProgress from 'nprogress'

const Noop: FC = ({ children }) => <> </>

Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
