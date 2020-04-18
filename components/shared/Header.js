import Logo from './Logo';

export default function HeaderComponent () {
  return (
    <div>
      <header className="raidlens-header">
        <div className="home-link">
          <div className="logo">
            <Logo fill="white" maxHeight="22px" />
          </div>
          <span className="raidlens-title">RaidLens</span>
        </div>
      </header>

      <style jsx>{`
        .raidlens-header {
          background: rgba(0,0,0,.2);
          display: flex;
          justify-content: space-between;
          padding: .75em;
        }

        .home-link {
          display: flex;
          cursor: pointer;
        }

        .raidlens-title {
          margin: 0 0 0 1em;
        }

        @media (prefers-reduced-motion: no-preference) {
          .home-link:hover .logo {
            animation: logo-spin 3s ease-in-out;
          }
        }

        @keyframes logo-spin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.5);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
