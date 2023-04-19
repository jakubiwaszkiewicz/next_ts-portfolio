import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <title>iw4sz's Portfolio</title>
        <meta property="og:title" content="iw4sz's Portfolio" key="title" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
