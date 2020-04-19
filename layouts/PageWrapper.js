import { useEffect } from "react"
import { initGA, logPageView } from "../services/setupAnalytics"

export default function PageWrapper({ children }) {
  useEffect(_ => {
    if( !window.GA_INITIALIZED ) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [])

  return (
    <div className="page-wrapper">
      <div className="content-container">
        {children}
      </div>

      <style jsx>{`
        .page-wrapper {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .content-container {
          padding: 0 2em;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
