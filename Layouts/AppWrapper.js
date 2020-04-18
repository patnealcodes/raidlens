import Header from "../components/shared/Header";

export default ({ children }) => (
  <div>
    <Header />
    {children}
    
    <style jsx>{`
      :global(body) {
        background-color: #282c34;
        font-family: Roboto;
        margin: 0;
      }
      :global(body, a) {
        color: white;
      }
    `}</style>
  </div>
)
