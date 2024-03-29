import Head from 'next/head'
import DesktopBackground from "../components/DesktopBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>easysolutionclo</title>
        <meta name="description" content="Take it easy :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/favicon/apple-touch-icon.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/images/favicon/favicon-32x32.png"
          />
          <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/images/favicon/favicon-16x16.png"
          />
          <link
              rel="manifest"
              href="/images/favicon/site.webmanifest"
          />
          <link
              rel="mask-icon"
              href="/images/favicon/safari-pinned-tab.svg"
              color="#5bbad5"
          />
          <meta
              name="msapplication-TileColor"
              content="#00aba9"
          />
          <meta
              name="theme-color"
              content="#fff"
          />
          <link
              rel="icon"
              href="/images/favicon/favicon.ico"
          />
      </Head>
      <main>
         <DesktopBackground/>
      </main>
    </>
  )
}
