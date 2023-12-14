import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Velvet Vista</title>
        <meta property="og:title" content="Velvet Vista" key="title" />
        <link href="https://api.fontshare.com/v2/css?f[]=ranade@700,300,2,701,401,101,100,400,1,500,501,301&f[]=excon@400,900,700,500,300,100,1&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
