import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <h1>Eron Salihu</h1>
        <h2>Cloud & DevOps Engineer</h2>

        <p>Building, containerizing and deploying modern applications.</p>
      </header>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          <span>Linux</span>
          <span>Git</span>
          <span>GitHub Actions</span>
          <span>Docker</span>
          <span>CI/CD</span>
          <span>Cloud</span>
        </div>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Tavora POS</h3>
            <p>Restaurant and hospitality POS system.</p>
          </div>

          <div className="card">
            <h3>DevLearn</h3>
            <p>Developer learning platform.</p>
          </div>

          <div className="card">
            <h3>DevOps Labs</h3>
            <p>Docker, CI/CD and Cloud exercises.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Built with React • Docker • GitHub Actions</p>
      </footer>
    </div>
  );
}

export default App;
