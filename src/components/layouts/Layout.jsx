import Head from 'next/head'
import {NavbarUi} from '../ui/index'

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Ernesto López' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavbarUi />

      <main className="p-10">
        {children}
      </main>
    </>
  )
}

export default Layout