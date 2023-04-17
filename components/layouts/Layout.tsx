import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from 'src/components/ui'

type Props = {
  children?: JSX.Element,
  title?: string,
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name='author' content='Uriel Hernandez' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}