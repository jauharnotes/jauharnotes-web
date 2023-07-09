import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/jn-logo.ico" />
          <script src="https://smtpjs.com/v3/smtp.js">
          </script>
        </Head>
        <body className="font-inter">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
