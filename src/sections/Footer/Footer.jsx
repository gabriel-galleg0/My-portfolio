import "./footer.css"

export default function Footer(){

  const year = new Date().getFullYear()

  return (

    <footer className="footer">

      <div className="footer_container">

        <p className="footer_logo">
          Gabriel
        </p>

        <div className="footer_socials">

          <a href="https://github.com/seuusuario" target="_blank" rel="noreferrer">

            <svg viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.2 11.38c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.34-5.47-5.96 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.63-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>

          </a>

          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">

            <svg viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5 3.87 6.1 2.49 6.1S0 5 0 3.5C0 2 1.11.9 2.49.9s2.49 1.1 2.49 2.6zM.21 8.09h4.56V24H.21zM7.98 8.09h4.37v2.16h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.71c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24H7.98z"/>
            </svg>

          </a>

          <a href="mailto:seuemail@email.com">

            <svg viewBox="0 0 24 24">
              <path d="M12 13 2 6.76V18h20V6.76L12 13zm10-9H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 
              0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
            </svg>

          </a>

        </div>

        <p className="footer_copy">
          © {year} Gabriel — Built with React
        </p>

      </div>

    </footer>
  )
}