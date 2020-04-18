export default function PageWrapper({ children }) {
  return (
    <div className="page-wrapper">
      {children}

      <style jsx>{`
        .page-wrapper {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}
