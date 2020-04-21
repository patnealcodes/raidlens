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
          background-color: #212223;
          font-family: Roboto;
          margin: 0;
        }
        body, a {
          color: white;
        }

        .artifact { color: rgb(229,204,128) }
        .astounding { color: rgb(226,104,168) }
        .legendary { color: rgb(255,128,0) }
        .epic { color: rgb(163,53,238) }
        .rare { color: rgb(0,112,255) }
        .uncommon { color: rgb(30,255,0) }
        .shit { color: #666 }

        .druid { color:rgb(100%,49%,4%) }
        .hunter { color:rgb(67%,83%,45%) }
        .mage { color:rgb(41%,80%,94%) }
        .paladin { color:rgb(96%,55%,73%) }
        .priest { color:rgb(100%,100%,100%) }
        .rogue { color:rgb(100%,96%,41%) }
        .shaman { color:rgb(14%,35%,100%) }
        .warlock { color:rgb(58%,51%,79%) }
        .warrior { color:rgb(78%,61%,43%) }
      `}</style>
      
      <style jsx>{`
        .app-layout {
          display: flex;
          height: 100%;
          flex-direction: column;
        }
        .component-container {
          background: #282c34;
          flex-grow: 1;
          display: flex;
          padding: 1em 2em;
        }
      `}</style>
    </div>
  )
}
