import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/styles/homepage.css" />
        <link rel="stylesheet" href="/styles/login.css" />
        <link rel="stylesheet" href="/styles/signup.css" />
        <link rel="stylesheet" href="/styles/ngo_map.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
