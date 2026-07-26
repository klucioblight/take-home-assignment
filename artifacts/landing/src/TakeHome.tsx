export default function TakeHome() {
  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="/">← Back to main page</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="container">
          <div className="eyebrow">Take Home Assignment · Samsara Final Round</div>
          <span className="amber-bar"></span>
          <h1><span className="amber-underline">Kim Blight</span></h1>
          <p className="hero-title">Product Operations · Final Round Materials</p>
          <p className="hero-tagline">Materials for my Samsara take-home assignment will live here.</p>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Coming soon</div>
          <h2>Assignment materials</h2>
          <p className="section-sub">This page will be updated with take-home assignment deliverables.</p>
        </div>
      </section>

      <footer>
        Built for Samsara · Product Operations Interview
      </footer>
    </>
  );
}
