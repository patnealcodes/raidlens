import Logo from './Logo';

export default function HeaderComponent () {
  return (
    <div>
      <footer className="raidlens-footer">
        <span>© 2020 Patrick Neal</span>
        <div className="footer-spacer" />
        <a href="mailto:apparently@patrickneal.codes">apparently@patrickneal.codes</a>
        <div className="footer-spacer" />
        <a href="https://github.com/patnealcodes/raidlens" target="_blank">GitHub</a>
      </footer>

      <style jsx>{`
        .raidlens-footer {
          background: rgba(0,0,0,.2);
          display: flex;
          font-size: .75em;
          justify-content: center;
          padding: 1.5em .75em;
        }

        .footer-spacer {
          width: 2em;
        }
      `}</style>
    </div>
  )
}
