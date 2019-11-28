import Head from 'next/head'

export default class Header extends React.Component {
  async componentDidMount() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
        console.log('SW registration succeeded')
      } catch (e) {
        console.error(`SW registration failed`);
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Here's the title!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="" />
          <meta name="description" content="" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@twitter" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:image" content="" />
          <meta property="og:title" content="" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://" />
          <meta property="og:image" content="" />
          <meta property="og:description" content="" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="" />
          <link rel="shortcut icon" type="image/png" href="" />
          <link href="" sizes="2048x2732" rel="apple-touch-startup-image" />
          <link href="" sizes="1668x2224" rel="apple-touch-startup-image" />
          <link href="" sizes="1536x2048" rel="apple-touch-startup-image" />
          <link href="" sizes="1125x2436" rel="apple-touch-startup-image" />
          <link href="" sizes="1242x2208" rel="apple-touch-startup-image" />
          <link href="" sizes="750x1334" rel="apple-touch-startup-image" />
          <link href="" sizes="640x1136" rel="apple-touch-startup-image" />
          <link rel="stylesheet" href="/css/a.css" />
        </Head>
      </React.Fragment>
    )
  }
}