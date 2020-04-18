import Header from '../components/shared/Header'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />

      {/* Global CSS goes here */}
      <style jsx global>{`
        body {
          background-color: #282c34;
          font-family: Roboto;
          margin: 0;
        }
        body, a {
          color: white;
        }
      `}</style>
    </div>
  )
}
