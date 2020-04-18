import Document, { Html, Head, Main, NextScript } from 'next/document'
import AppWrapper from '../Layouts/AppWrapper'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          {/* Custom App-level wrapper */}
          <AppWrapper>
            <Main />
          </AppWrapper>

          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument
