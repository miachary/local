import './App.css'

// Single home page for the Local pilot (Sandy, Utah).
// Both sections are placeholders for now — no data, no fetching, just
// a heading and a "coming soon" note each. Real functionality comes later.
function App() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Local</h1>
        <p className="tagline">Civic transparency for Sandy, Utah</p>
      </header>

      <section className="card">
        <h2>Elections</h2>
        <p className="coming-soon">Coming soon</p>
        <p>Upcoming local election dates and ballot measures for Sandy, Utah.</p>
      </section>

      <section className="card">
        <h2>Budget Execution</h2>
        <p className="coming-soon">Coming soon</p>
        <p>
          Did the city spend what it said it would, on what it said it would?
          A look at Sandy, Utah&rsquo;s budget versus actual spending.
        </p>
      </section>
    </main>
  )
}

export default App
