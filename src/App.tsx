import "./App.css"

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="band-name">THE ROLLOS</h1>

        <div className="button-container">
          <a
            href="https://instagram.com/therollosband"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <svg
              className="instagram-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="3" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
