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
    </div>
  )
}
