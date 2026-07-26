import { useState } from "react";

export default function TakeHome() {
  const [archOpen, setArchOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="/">← Back to main page</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="eyebrow">Take Home Assignment · Samsara Final Round</div>
          <span className="amber-bar"></span>
          <h1><span className="amber-underline">Product Ops Plan</span></h1>
          <p className="hero-title">Kim Blight · Product Operations</p>
          <p className="hero-tagline">
            The assignment asked me to show how I'd approach Product Operations at Samsara — starting
            from PM survey feedback, building a charter, and delivering a working prototype for release
            documentation automation.
          </p>
        </div>
      </section>

      {/* WHAT THE PMs SAID */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Starting point</div>
          <h2>What the PM team told us</h2>
          <p className="section-sub">
            Two themes dominated the survey. I bucketed every item into three workstreams: human-owned,
            AI assisted, or fully automated.
          </p>

          <div className="th-themes">
            <div className="th-theme-card th-theme-white">
              <div className="th-theme-label">Theme 1</div>
              <div className="th-theme-title">Operational rhythms to drive alignment</div>
              <ul className="th-theme-list">
                <li><span className="th-tag th-tag-ai">AI assisted</span> Consistent planning rituals — baked into operating rhythm</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Executive reporting for monthly reviews — data automated</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Central force keeping Product, Eng, Design, GTM, and Leadership in sync</li>
              </ul>
              <div style={{ marginTop: "0.85rem", padding: "0.6rem 0.85rem", background: "rgba(0,38,62,0.05)", borderLeft: "2px solid rgba(0,38,62,0.2)", borderRadius: "0 4px 4px 0", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>Human owned:</span> All AI-assisted items have a human aspect to ownership. AI serves as the assistant to a human producing the work within product operations.
              </div>
            </div>
            <div className="th-theme-card th-theme-amber">
              <div className="th-theme-label">Theme 2</div>
              <div className="th-theme-title">Tooling, AI, and process standardization</div>
              <ul className="th-theme-list">
                <li><span className="th-tag th-tag-auto">Fully automated</span> Centralized home for all product tools — build Samsara OS for Product</li>
                <li><span className="th-tag th-tag-auto">Fully automated</span> Release documentation automation — trigger a PR once a ticket closes</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Rigorous operationalization of AI tools — lower barrier, find champions</li>
              </ul>
              <div style={{ marginTop: "0.85rem", padding: "0.6rem 0.85rem", background: "rgba(0,38,62,0.05)", borderLeft: "2px solid rgba(245,166,35,0.4)", borderRadius: "0 4px 4px 0", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>Human owned:</span> All AI-assisted items have a human aspect to ownership. AI serves as the assistant to a human producing the work within product operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARTER */}
      <section style={{ background: "var(--navy)" }} id="th-charter">
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--amber)" }}>Product Operations Charter</div>
          <h2 style={{ color: "#fff" }}>Mission</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.65)" }}>
            Empower the product organization to deliver value to customers with speed and intention.
            Ensure every cross-functional team has clear visibility to deliver the best customer experience.
          </p>

          <div className="th-charter-grid">
            <div className="th-charter-card">
              <div className="th-charter-icon"><i className="ti ti-repeat"></i></div>
              <div className="th-charter-name">Operational Rhythms &amp; Cross-Functional Alignment</div>
              <ul className="th-charter-list">
                <li>Own consistent planning rituals across the product org</li>
                <li>Design and run executive reporting for monthly business reviews</li>
                <li>Act as the central force surfacing risks and dependencies before they block delivery</li>
                <li>Create shared visibility into priorities, timelines, and trade-offs</li>
              </ul>
            </div>
            <div className="th-charter-card">
              <div className="th-charter-icon"><i className="ti ti-robot"></i></div>
              <div className="th-charter-name">Tooling, AI &amp; Process Standardization</div>
              <ul className="th-charter-list">
                <li>Establish a centralized home for product tools, templates, and documentation</li>
                <li>Automate release documentation and repetitive, error-prone workflows</li>
                <li>Operationalize AI tools rigorously — pilot, prove impact, then scale</li>
                <li>Standardize processes to reduce duplicated effort and inconsistent ways of working</li>
              </ul>
            </div>
          </div>

          {/* Operating principles — expanded */}
          <div className="th-principles-grid">
            <div className="th-principle-card">
              <div className="th-principle-icon"><i className="ti ti-antenna"></i></div>
              <div className="th-principle-label">Proactive, not administrative</div>
              <div className="th-principle-desc">Anticipating the needs of the product organization before they need them — building roadmaps from planning artifacts, reviewing customer feedback for beta candidates, preparing all-hands slides before they're asked for, and keeping an eye on support queues before they become a problem.</div>
            </div>
            <div className="th-principle-card">
              <div className="th-principle-icon"><i className="ti ti-chart-bar"></i></div>
              <div className="th-principle-label">Evidence over opinion</div>
              <div className="th-principle-desc">Showing the work instead of just talking about it. Building dashboards, automating release systems, and taking actual work off product managers' plates to demonstrate the need for a true product operations partner.</div>
            </div>
            <div className="th-principle-card">
              <div className="th-principle-icon"><i className="ti ti-road"></i></div>
              <div className="th-principle-label">In service of the roadmap</div>
              <div className="th-principle-desc">A customer-focused mindset on removing every barrier so product and engineering teams can deliver with minimal distractions — ensuring all data is available for product decisions and that clear adoption metrics are measured and reviewed.</div>
            </div>
          </div>

          {/* Charter philosophy */}
          <div className="th-philosophy-block">
            <div className="th-philosophy-eyebrow"><i className="ti ti-bulb"></i> My thinking — why this charter</div>
            <div className="th-philosophy-body">Product Operations should serve as both the bridge to all cross-functional teams and a true partner to product — not above or below the PM team. This means being the source of answers for questions from other teams, the place to bring pain points that need improvement, and the go-to for anything that falls in between. The two pillars reflect that dual mandate: one facing inward to keep the product org aligned and moving, one facing outward to remove the friction that slows everyone else down.</div>
          </div>
        </div>
      </section>

      {/* TRACK B — RELEASE NOTE PIPELINE */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Track B · Main deliverable</div>

          <div className="th-split-card">
            {/* LEFT: Why & What */}
            <div className="th-split-left">
              <h2>Release Note Pipeline</h2>
              <p className="section-sub">
                Release documentation is manual: someone reads the PRD, writes an internal note, rewrites it for customers,
                pastes it into Slack, and separately updates the knowledge base. This pipeline turns that into{' '}
                <strong>one step with a review gate</strong> — every launch ships with consistent docs in minutes.
              </p>

              <div className="th-split-produces-label">
                <i className="ti ti-file-text"></i> What it produces
              </div>

              <div className="th-split-outputs">
                <div className="th-split-output-card">
                  <div className="th-split-output-header">
                    <i className="ti ti-lock"></i> Internal Release Note
                    <span className="th-split-output-dest">#product-releases</span>
                  </div>
                  <div className="th-split-output-lines">
                    <div className="th-split-line" style={{ width: "75%" }}></div>
                    <div className="th-split-line" style={{ width: "100%" }}></div>
                    <div className="th-split-line" style={{ width: "83%" }}></div>
                    <div className="th-split-line" style={{ width: "67%" }}></div>
                  </div>
                </div>
                <div className="th-split-output-card">
                  <div className="th-split-output-header">
                    <i className="ti ti-world"></i> External KB Article
                    <span className="th-split-output-dest">kb.samsara.com</span>
                  </div>
                  <div className="th-split-output-lines">
                    <div className="th-split-line" style={{ width: "100%" }}></div>
                    <div className="th-split-line" style={{ width: "80%" }}></div>
                    <div className="th-split-line" style={{ width: "83%" }}></div>
                    <div className="th-split-line" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>

              <div className="th-split-badges">
                <span className="th-split-badge th-split-badge-green">
                  <i className="ti ti-check"></i> Working prototype
                </span>
                <button
                  onClick={() => setArchOpen(o => !o)}
                  className="th-split-badge th-split-badge-blue"
                  style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit" }}
                >
                  <i className="ti ti-layout-board"></i> Production architecture drafted{" "}
                  <i className={`ti ${archOpen ? "ti-chevron-up" : "ti-chevron-down"}`} style={{ fontSize: 10 }}></i>
                </button>
              </div>
            </div>

            {/* RIGHT: How */}
            <div className="th-split-right">
              <div className="th-split-glow-orb"></div>
              <div className="th-split-how-label">How it works</div>

              <div className="th-split-steps">
                <div className="th-split-connector"></div>
                <div className="th-split-step">
                  <div className="th-split-step-num">1</div>
                  <div>
                    <div className="th-split-step-title">Ingest</div>
                    <div className="th-split-step-desc">PM submits raw PRD via simple form.</div>
                  </div>
                </div>
                <div className="th-split-step">
                  <div className="th-split-step-num">2</div>
                  <div>
                    <div className="th-split-step-title">Draft</div>
                    <div className="th-split-step-desc">Claude AI generates tailored internal &amp; external drafts.</div>
                  </div>
                </div>
                <div className="th-split-step">
                  <div className="th-split-step-num">3</div>
                  <div>
                    <div className="th-split-step-title">Review</div>
                    <div className="th-split-step-desc">Human-in-the-loop approval and final edits.</div>
                  </div>
                </div>
                <div className="th-split-step">
                  <div className="th-split-step-num th-split-step-num-amber">4</div>
                  <div>
                    <div className="th-split-step-title th-split-step-title-amber">Publish</div>
                    <div className="th-split-step-desc">Auto-posts to Slack (#product-releases) and Zendesk KB.</div>
                  </div>
                </div>
              </div>

              <div className="th-split-cta-wrap">
                <div className="th-split-cta-glow"></div>
                <a href="/prototype" className="th-split-cta">
                  <span className="th-split-cta-main">
                    Try the live prototype <i className="ti ti-arrow-right"></i>
                  </span>
                  <span className="th-split-cta-sub">Paste a PRD → get internal + external notes in seconds</span>
                </a>
              </div>

              <div className="th-split-arch">
                <div className="th-split-arch-label">Architecture Decisions</div>
                <div className="th-split-arch-row">
                  <span>Slack</span><span>Bot token integration</span>
                </div>
                <div className="th-split-arch-row">
                  <span>Approval gate</span><span>Required for external</span>
                </div>
                <div className="th-split-arch-row">
                  <span>Zendesk</span><span>Draft → Live on approval</span>
                </div>
              </div>

              <a
                href="https://github.com/klucioblight/take-home-assignment"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "0.85rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.15s"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                <i className="ti ti-brand-github" style={{ fontSize: 14 }}></i>
                View source on GitHub
              </a>
            </div>
          </div>

          {/* ARCHITECTURE DROPDOWN */}
          {archOpen && (
            <div style={{
              marginTop: "1rem",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "var(--off-white)"
            }}>
              {/* Diagram */}
              <div style={{ background: "var(--navy)", padding: "1.5rem 1.5rem 1.25rem" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "0.25rem" }}>
                  Six-step happy path
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: "1rem", fontFamily: "'Space Grotesk', sans-serif" }}>
                  System Diagram
                </div>
                <svg viewBox="0 0 820 300" width="100%" style={{ display: "block", minWidth: 480 }} aria-label="Release Pipeline Architecture Diagram">
                  <defs>
                    <marker id="arrow-w" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.4)" />
                    </marker>
                    <marker id="arrow-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#F5A623" />
                    </marker>
                  </defs>
                  {/* Step 1 */}
                  <rect x="10" y="90" width="110" height="80" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="65" y="118" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 1</text>
                  <text x="65" y="136" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">PM submits</text>
                  <text x="65" y="150" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">PRD</text>
                  <text x="65" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">via form / webhook</text>
                  <line x1="122" y1="130" x2="148" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow-w)" />
                  {/* Step 2 */}
                  <rect x="150" y="90" width="120" height="80" rx="10" fill="rgba(0,119,182,0.2)" stroke="rgba(0,119,182,0.5)" strokeWidth="1" />
                  <text x="210" y="118" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 2</text>
                  <text x="210" y="136" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Claude drafts</text>
                  <text x="210" y="150" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">both notes</text>
                  <text x="210" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">validated JSON</text>
                  <line x1="272" y1="130" x2="298" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow-w)" />
                  {/* Step 3 */}
                  <rect x="300" y="90" width="110" height="80" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <text x="355" y="118" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 3</text>
                  <text x="355" y="136" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Persist with</text>
                  <text x="355" y="150" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">audit trail</text>
                  <text x="355" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">DB + version log</text>
                  <line x1="412" y1="130" x2="438" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow-w)" />
                  {/* Step 4 */}
                  <rect x="440" y="90" width="120" height="80" rx="10" fill="rgba(245,166,35,0.15)" stroke="rgba(245,166,35,0.45)" strokeWidth="1" />
                  <text x="500" y="118" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 4</text>
                  <text x="500" y="136" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Post internal</text>
                  <text x="500" y="150" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="600">note to Slack</text>
                  <text x="500" y="165" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">#product-releases</text>
                  <line x1="562" y1="130" x2="588" y2="130" stroke="#F5A623" strokeWidth="1.5" markerEnd="url(#arrow-a)" />
                  {/* Step 5 */}
                  <rect x="590" y="90" width="110" height="80" rx="10" fill="rgba(245,166,35,0.25)" stroke="#F5A623" strokeWidth="1.5" />
                  <text x="645" y="112" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 5</text>
                  <text x="645" y="130" textAnchor="middle" fill="#F5A623" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="700">Human</text>
                  <text x="645" y="145" textAnchor="middle" fill="#F5A623" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="700">approves</text>
                  <text x="645" y="160" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">external gate</text>
                  <text x="645" y="173" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter,sans-serif">one click in Slack</text>
                  <line x1="702" y1="130" x2="728" y2="130" stroke="#F5A623" strokeWidth="1.5" markerEnd="url(#arrow-a)" />
                  {/* Step 6 */}
                  <rect x="730" y="90" width="80" height="80" rx="10" fill="rgba(39,80,10,0.35)" stroke="#6dbb3a" strokeWidth="1.5" />
                  <text x="770" y="112" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1">STEP 6</text>
                  <text x="770" y="130" textAnchor="middle" fill="#a8e06a" fontSize="11" fontFamily="Space Grotesk,sans-serif" fontWeight="700">Published ✓</text>
                  <text x="770" y="153" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="Inter,sans-serif">kb.samsara.com</text>
                  <text x="770" y="166" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter,sans-serif">+ Slack thread</text>
                  {/* Pipeline service bracket */}
                  <rect x="140" y="62" width="590" height="4" rx="2" fill="rgba(0,119,182,0.3)" />
                  <text x="435" y="57" textAnchor="middle" fill="rgba(0,119,182,0.7)" fontSize="9.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600" letterSpacing="1">RELEASE PIPELINE SERVICE</text>
                  <line x1="140" y1="62" x2="140" y2="90" stroke="rgba(0,119,182,0.3)" strokeWidth="1" />
                  <line x1="730" y1="62" x2="730" y2="90" stroke="rgba(0,119,182,0.3)" strokeWidth="1" />
                  {/* Secrets manager */}
                  <ellipse cx="355" cy="245" rx="90" ry="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />
                  <text x="355" y="241" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Secrets Manager</text>
                  <text x="355" y="256" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter,sans-serif">Anthropic · Slack · Zendesk</text>
                  <line x1="265" y1="240" x2="210" y2="172" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="355" y1="219" x2="500" y2="172" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
                {/* Legend */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
                  {[
                    { color: "rgba(255,255,255,0.15)", border: "rgba(255,255,255,0.3)", label: "Automated step" },
                    { color: "rgba(245,166,35,0.25)", border: "#F5A623", label: "Human gate (external only)" },
                    { color: "rgba(39,80,10,0.35)", border: "#6dbb3a", label: "Published state" },
                  ].map(({ color, border, label }) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 12, height: 12, borderRadius: 2, background: color, border: `1.5px solid ${border}`, flexShrink: 0 }} />
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three decisions */}
              <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
                  Architecture decisions
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
                  {[
                    {
                      color: "var(--accent)",
                      label: "Decision 1",
                      title: "Bot token replaces the webhook",
                      body: "In production, Slack's chat.postMessage with a bot token gives delivery receipts, threading, and interactive Approve / Edit buttons directly on the release message — things the prototype's webhook can't do.",
                    },
                    {
                      color: "var(--amber)",
                      label: "Decision 2",
                      title: "Asymmetric approval gates",
                      body: "Internal notes auto-ship instantly. The external path requires one human click before the Zendesk article goes live. It's a per-destination config flag — easy to tighten or loosen later without a code change.",
                    },
                    {
                      color: "#27500A",
                      label: "Decision 3",
                      title: "Credentials in secrets manager",
                      body: "All three tokens — Anthropic, Slack, Zendesk — live in a secrets manager the service reads at runtime. No more pasting a webhook per session; credential rotation never touches the UI.",
                    },
                  ].map(({ color, label, title, body }) => (
                    <div key={label} style={{
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderTop: `3px solid ${color}`,
                      borderRadius: "var(--radius-md)",
                      padding: "0.85rem 1rem"
                    }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color, marginBottom: "0.35rem" }}>{label}</div>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--navy)", marginBottom: "0.4rem" }}>{title}</div>
                      <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{body}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Build scope */}
              <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
                  Build scope — 1–2 engineer-weeks for the full happy path
                </div>
                <div style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#fff" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "32% 1fr auto", background: "var(--navy)" }}>
                    {["Component", "What it does", "Effort"].map(h => (
                      <div key={h} style={{ padding: "0.5rem 0.85rem", fontSize: 9.5, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{h}</div>
                    ))}
                  </div>
                  {[
                    { c: "Pipeline Service API", d: "Accepts PRD, calls Claude, stores result, fires Slack + Zendesk side effects", e: "3–5 days", bg: "#fff" },
                    { c: "State machine", d: "Tracks each release: Draft → Internal Sent → Approved → Published. Prevents double-publishing.", e: "2–3 days", bg: "var(--off-white)" },
                    { c: "Slack bot + approval blocks", d: "Bot token replaces webhook. Adds interactive Approve / Edit buttons in Slack.", e: "1–2 days", bg: "#fff" },
                    { c: "Zendesk draft → live", d: "On approval, flips article from draft to published and threads 'Published ✓ + link' back to Slack.", e: "1 day", bg: "var(--off-white)" },
                    { c: "Secrets manager wiring", d: "Pull Anthropic, Slack, and Zendesk credentials at runtime. No secrets in env vars or browser.", e: "½ day", bg: "#fff" },
                  ].map(({ c, d, e, bg }) => (
                    <div key={c} style={{ display: "grid", gridTemplateColumns: "32% 1fr auto", borderTop: "1px solid var(--border)", background: bg }}>
                      <div style={{ padding: "0.65rem 0.85rem", fontSize: 12, fontWeight: 600, color: "var(--navy)", lineHeight: 1.5 }}>{c}</div>
                      <div style={{ padding: "0.65rem 0.85rem", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55, borderLeft: "1px solid var(--border)" }}>{d}</div>
                      <div style={{ padding: "0.65rem 0.85rem", borderLeft: "1px solid var(--border)", display: "flex", alignItems: "center" }}>
                        <span style={{ fontSize: 10.5, fontWeight: 700, background: "var(--accent-light)", color: "var(--navy-light)", borderRadius: 3, padding: "2px 7px", whiteSpace: "nowrap" }}>{e}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 2 */}
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
                  Phase 2 — additive, no breaking changes to the pipeline
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 10 }}>
                  {[
                    { icon: "ti-webhook", title: "PRD folder webhook trigger", desc: "Watch a Google Drive or Notion folder for new PRDs. Auto-trigger the pipeline when a doc moves to 'Ready for Release Notes' — zero manual steps." },
                    { icon: "ti-send", title: "#sales-enablement routing", desc: "A second Slack destination for external-facing teams. Same pipeline, different Block Kit template with GTM-friendly language." },
                    { icon: "ti-calendar-repeat", title: "Weekly release digest", desc: "Cron job that aggregates all notes published in the last 7 days and posts a summary digest to a broader channel." },
                    { icon: "ti-chart-bar", title: "Metrics + feedback loop", desc: "Track opens on the KB article, collect PM ratings on note quality, and feed low-quality examples back into prompt fine-tuning." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} style={{
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.85rem 1rem"
                    }}>
                      <i className={`ti ${icon}`} style={{ fontSize: 18, color: "var(--accent)", marginBottom: "0.4rem", display: "block" }}></i>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--navy)", marginBottom: "0.3rem" }}>{title}</div>
                      <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Philosophy */}
          <div className="th-philosophy-block th-philosophy-light" style={{ marginTop: "1.25rem" }}>
            <div className="th-philosophy-eyebrow"><i className="ti ti-bulb"></i> My thinking — why these decisions</div>
            <div className="th-philosophy-body">Release documentation came up repeatedly in my interviews — teams are often surprised by releases and see them at the same time as, or after, a customer. Fixing that is a quick win with high visibility. Starting with internal notes lets us see what the outputs look like, collect feedback from PMs and internal stakeholders, and iterate before anything goes external. External notes require approval until we feel fully confident the system is pulling the right information and the language is clear for a customer audience — that human gate stays until we've earned the trust to remove it.</div>
          </div>
        </div>
      </section>

      {/* WHAT I WOULD DO NEXT */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="eyebrow">After gathering feedback</div>
          <h2>What I would do next</h2>
          <div className="th-open-grid">
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Gather feedback on the prototype from the team and implement prioritized changes
            </div>
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Fill TBDs in internal note template defaults (plans, regions) with real launch policy
            </div>
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Confirm the release-notes section ID on kb.samsara.com
            </div>
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Decide default: auto-publish internal on generate, or review-first?
            </div>
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Partner with engineering or IT to scope and staff phase 1 build
            </div>
            <div className="th-open-item">
              <i className="ti ti-circle-dot"></i>
              Phase 2 candidates: PRD-folder webhook trigger · #sales-enablement routing · weekly digest
            </div>
          </div>
        </div>
      </section>

      {/* THE AI LEDGER */}
      <section style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--amber)" }}>The AI ledger</div>
          <h2 style={{ color: "#fff" }}>How I used AI — and where I didn't</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.65)" }}>
            An honest accounting of what I delegated to AI and what I deliberately kept for myself.
          </p>

          <div className="th-ledger-grid">
            {/* Human-owned */}
            <div className="th-ledger-col">
              <div className="th-ledger-header th-ledger-human">
                <i className="ti ti-user"></i> Kept human
              </div>
              <div className="th-ledger-items">
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">The mission and charter</div>
                  <div className="th-ledger-item-desc">
                    Coming into this role, I wanted to bring my real experience from over 10 years working in product
                    operations. The charter needs to speak to experience and focus on the key tenets of Samsara's
                    culture: shipping fast, removing barriers, and empowering all teams to own their work and have
                    time for what matters most — the customer.
                  </div>
                </div>
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">Determining AI-assisted vs. automated</div>
                  <div className="th-ledger-item-desc">
                    This was pulled from experience building similar tools and what I have learned from those tools.
                    Knowing which workstreams benefit from a human in the loop versus those that are safe to fully
                    automate is a judgment call that comes from having done it before.
                  </div>
                </div>
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">Release note decisions</div>
                  <div className="th-ledger-item-desc">
                    Whether the prototype should auto-publish, and where. How long and how specific the release notes
                    should be — calibrated for internal teams versus external customers.
                  </div>
                </div>
              </div>
            </div>

            {/* AI-assisted */}
            <div className="th-ledger-col">
              <div className="th-ledger-header th-ledger-ai">
                <i className="ti ti-robot"></i> Delegated to AI
              </div>
              <div className="th-ledger-items">
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">Release Notes prototype</div>
                  <div className="th-ledger-item-desc">
                    Mocking up the flow of the prototype. Building the actual clickable prototype. The Slack integration feature.
                  </div>
                </div>
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">Voice of customer research</div>
                  <div className="th-ledger-item-desc">
                    Reviewed Samsara's online artifacts — website, help center, release content — to pull voice of customer and understand how Samsara discusses products and features with their audience.
                  </div>
                </div>
                <div className="th-ledger-item">
                  <div className="th-ledger-item-title">Engineering guidelines</div>
                  <div className="th-ledger-item-desc">
                    Generated implementation guidelines for engineering to use if the team decides to move forward with building the prototype internally.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* When AI didn't hit the mark */}
          <div style={{
            marginTop: "1.25rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderLeft: "3px solid rgba(245,166,35,0.6)",
            borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
            padding: "1.1rem 1.4rem"
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: 7 }}>
              <i className="ti ti-alert-triangle"></i> When AI didn't hit the mark
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
              A few areas where AI missed the mark were: matching Samsara's exact brand requirements, assumptions about tone of voice before checking brand materials, and making a recommendation for how to implement the prototype without understanding the engineering tech stack.
            </p>
          </div>

          {/* What this implies */}
          <div className="th-ledger-implication">
            <div className="th-ledger-impl-label">What this implies about how this role should be shaped</div>
            <p>
              Even though AI can build fast prototypes and help you architect your vision clearly, human
              empathy and understanding for culture is the clear driver of success in the product operations
              function. Knowing when to leverage tools and systems to automate versus keeping other elements
              human-centered is the easy part.
            </p>
            <p>
              Adding in the additional layer of context — business priorities, customer impact, and the effect
              of decisions on internal teams' workloads — is what is critical to this role's success. Being
              able to come in, take on some of the biggest pain points, show immediate value, and use those
              examples to set the tone for how teams can partner with product operations is the key.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROMPTS */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Behind the prototype</div>
          <h2>The exact prompts I used</h2>
          <p className="section-sub">
            Nine turns in Claude to go from a blank page to a working prototype with a Samsara
            design system, Slack integration, Zendesk publish flow, and architecture one-pager.
            User prompts are verbatim.
          </p>

          <div className="th-prompts-timeline">
            {[
              {
                turn: 1,
                prompt: "I am a product operations leader who wants to automate the way product release documentation is completed. I'd like to make a working prototype that does the following:\n\n• Takes raw data from a PRD or text source\n• Creates an internal release note for teams to understand the feature, how it works, who it is available to, and any links to more information\n• Creates an external release note and includes the steps to automatically push the release note to https://kb.samsara.com/hc/en-us/p/support_home\n\nUse this feature in the example for the prototype:\n\n• AI Multicam: Drivers can now add up to four additional HD cameras, providing a 360-degree view to reduce blindspots, all accessible through an in-cab monitor. In addition, the AI Multicam actively notifies drivers in real-time of hazards, such as pedestrians and cyclists. Whether using a Samsara camera or a third-party device, administrators can retrieve historic video footage and corresponding audio to help quickly resolve incidents.",
                result: "Created release-note-pipeline.jsx — working React prototype with live Claude API call, pre-loaded AI Multicam PRD, internal note + external note + Zendesk publish flow"
              },
              {
                turn: 2,
                prompt: "Can you add a step on internal release note where the internal note can publish directly to Slack?",
                result: "Added Slack Block Kit builder, webhook send, and Publish to Slack section on the internal note tab"
              },
              {
                turn: 3,
                prompt: "Yes, have it publish to #product-releases on slack immediately",
                result: "Moved Slack config to input panel, added auto-publish-on-generate for #product-releases, converted internal-tab Slack box to a status/resend surface"
              },
              {
                turn: 4,
                prompt: "Yes, please sketch the architecture",
                result: "Created release-pipeline-architecture.html — one-pager with SVG system diagram covering the full six-step production path"
              },
              {
                turn: 5,
                prompt: "Can you put all the information you've worked on here into a notion-style format so I can paste to notion? How can I ensure the team can click the prototype?",
                result: "Created release-note-pipeline-notion.md — full project consolidated into Notion-ready markdown with sharing instructions"
              },
              {
                turn: 6,
                prompt: "Can you publish the link to the prototype so I can include it in my document?",
                result: "Explained that publishing must be done by the artifact owner from the Claude interface"
              },
              {
                turn: 7,
                prompt: "Can you create a design system that matches the samsara brand and implement across the prototype and any other items built: https://www.samsara.com",
                result: "Created samsara-design-system.html (v1) — fetched samsara.com, extracted tokens (navy #00263E, Samsara Blue, orange as signal), applied across all deliverables"
              },
              {
                turn: 8,
                prompt: "Samsara redesigned their brand and announced this last week, the design system above is pulling the old colors of brand. New brand colors and font are shown here: https://www.samsara.com/blog/builtwithoperators",
                result: "Rewrote design-system.html as v2 — fetched rebrand announcement, rebuilt around hi-vis yellow #EAF400, asphalt near-black, signal stripe motif, re-applied across all deliverables"
              },
              {
                turn: 9,
                prompt: "I need to share the exact prompts/conversation I had with claude to create this prototype. Can you share a file that I can view the full conversation?",
                result: "Created conversation-transcript.md — full reconstructed session with verbatim user prompts and bracketed notes on files created/edited"
              }
            ].map(({ turn, prompt, result }) => (
              <div key={turn} className="th-prompt-item">
                <div className="th-prompt-turn">
                  <div className="th-prompt-turn-num">{turn}</div>
                  <div className="th-prompt-turn-line"></div>
                </div>
                <div className="th-prompt-body">
                  <div className="th-prompt-bubble">
                    <div className="th-prompt-who"><i className="ti ti-user"></i> Prompt</div>
                    <div className="th-prompt-text">{prompt}</div>
                  </div>
                  <div className="th-prompt-result">
                    <i className="ti ti-robot"></i> {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THANK YOU */}
      <section style={{ background: "var(--navy)", borderTop: "3px solid var(--amber)" }}>
        <div className="container" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <div className="eyebrow" style={{ color: "var(--amber)", justifyContent: "center", display: "flex" }}>Thank you</div>
          <h2 style={{ color: "#fff", marginBottom: "1rem" }}>It was a pleasure putting this together</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 540, margin: "0 auto 2rem" }}>
            I genuinely enjoyed working through this assignment — it gave me a chance to show not just
            what I know, but how I think and build. I hope it gives you a clear sense of how I'd show
            up in this role. I would love to connect.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="mailto:kblight815@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--amber)",
                color: "var(--navy)",
                fontWeight: 700,
                fontSize: 14,
                padding: "0.7rem 1.4rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "opacity 0.15s"
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseOut={e => (e.currentTarget.style.opacity = "1")}
            >
              <i className="ti ti-mail" style={{ fontSize: 16 }}></i>
              kblight815@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kimberlylucioblight/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "0.7rem 1.4rem",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 0.15s"
              }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
              onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            >
              <i className="ti ti-brand-linkedin" style={{ fontSize: 16 }}></i>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        Kim Blight · Product Operations · Samsara Final Round
        <a href="https://github.com/klucioblight/take-home-assignment" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "1.25rem", display: "inline-flex", alignItems: "center", gap: "5px", color: "inherit", opacity: 0.7, textDecoration: "none", fontSize: "0.85em" }}>
          <i className="ti ti-brand-github" style={{ fontSize: "1.1em" }}></i> View on GitHub
        </a>
      </footer>
    </>
  );
}
