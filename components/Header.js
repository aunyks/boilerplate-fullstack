import Head from 'next/head'

export default () => (
  <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        background: #fff;
        font: 11px menlo;
        color: #000;
      }
  `}</style>
  </React.Fragment>
)