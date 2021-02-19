import Head from 'next/head'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Designo</title>
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
