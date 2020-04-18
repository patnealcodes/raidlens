const { WARCRAFT_LOGS_KEY } = process.env;

export default function DashboardComponent () {

  return (
    <div className="dashboard">
      <h1>RaidLens</h1>
      <p>Key: {WARCRAFT_LOGS_KEY ? WARCRAFT_LOGS_KEY : 'ERROR'}</p>

      <style jsx>{`
        .dashboard {
          align-items: center;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
