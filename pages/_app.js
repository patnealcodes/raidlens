import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="component-container">
        <Component {...pageProps} />
      </div>
      <Footer />

      {/* Global CSS goes here */}
      <style jsx global>{`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        
        html, body, #__next {
          height: 100%;
        }

        body {
          background-color: #282c34;
          font-family: Roboto;
          margin: 0;
        }
        body, a {
          color: white;
        }
      `}</style>
      <style jsx>{`
        .app-layout {
          display: flex;
          height: 100%;
          flex-direction: column;
        }
        .component-container {
          flex-grow: 1;
        }
      `}</style>
    </div>
  )
}
