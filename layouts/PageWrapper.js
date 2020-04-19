export default function PageWrapper({ children }) {
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
