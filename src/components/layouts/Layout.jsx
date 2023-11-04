import Head from 'next/head'
import { NavbarUi } from '../ui/index'

const Layout = ({ children, title, description, keywords }) => {

  const location = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Ernesto López' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${location}/images/banner.png`} />
      </Head>

      <NavbarUi />

      <main className="p-10">
        {children}
      </main>
    </>
  )
}

export default Layout