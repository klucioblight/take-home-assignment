export default function TakeHome() {
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
              <div className="th-theme-title">Operational rhythms to drive cross-functional alignment</div>
              <ul className="th-theme-list">
                <li><span className="th-tag th-tag-ai">AI assisted</span> Consistent planning rituals — baked into operating rhythm</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Executive reporting for monthly reviews — data automated, strategy human-owned</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Central force keeping Product, Eng, Design, GTM, and Leadership in sync</li>
              </ul>
            </div>
            <div className="th-theme-card th-theme-amber">
              <div className="th-theme-label">Theme 2</div>
              <div className="th-theme-title">Tooling, AI, and process standardization</div>
              <ul className="th-theme-list">
                <li><span className="th-tag th-tag-auto">Fully automated</span> Centralized home for all product tools — build Samsara OS for Product</li>
                <li><span className="th-tag th-tag-auto">Fully automated</span> Release documentation automation — trigger a PR once a ticket closes</li>
                <li><span className="th-tag th-tag-ai">AI assisted</span> Rigorous operationalization of AI tools — lower barrier, find champions</li>
              </ul>
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
              <div className="th-principle-desc">[ description coming ]</div>
            </div>
            <div className="th-principle-card">
              <div className="th-principle-icon"><i className="ti ti-chart-bar"></i></div>
              <div className="th-principle-label">Evidence over opinion</div>
              <div className="th-principle-desc">[ description coming ]</div>
            </div>
            <div className="th-principle-card">
              <div className="th-principle-icon"><i className="ti ti-road"></i></div>
              <div className="th-principle-label">In service of the roadmap</div>
              <div className="th-principle-desc">[ description coming ]</div>
            </div>
          </div>

          {/* Charter philosophy */}
          <div className="th-philosophy-block">
            <div className="th-philosophy-eyebrow"><i className="ti ti-bulb"></i> My thinking — why this charter</div>
            <div className="th-philosophy-body">[ philosophy coming ]</div>
          </div>
        </div>
      </section>

      {/* TRACK B — RELEASE NOTE PIPELINE */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Track B · Main deliverable</div>
          <h2>Release Note Pipeline</h2>
          <p className="section-sub">
            Paste raw PRD text → AI drafts an internal release note and a customer-facing release note →
            internal note posts to <strong>#product-releases</strong> on Slack → external note publishes to
            kb.samsara.com (Zendesk Help Center) after one-click approval.
          </p>

          <div className="th-status-bar">
            <span className="th-status-badge th-badge-green"><i className="ti ti-check"></i> Working prototype</span>
            <span className="th-status-badge th-badge-blue"><i className="ti ti-layout-board"></i> Production architecture drafted</span>
            <span className="th-status-owner">Owner: Product Operations</span>
          </div>

          {/* Live prototype launch card */}
          <a
            href="https://claude.ai/public/artifacts/10cafa38-3c4f-40c8-898b-de027b9d98a9"
            target="_blank"
            rel="noopener noreferrer"
            className="th-prototype-card"
          >
            <div className="th-prototype-left">
              <div className="th-prototype-icon">
                <i className="ti ti-player-play"></i>
              </div>
              <div>
                <div className="th-prototype-card-title">Open the live prototype</div>
                <div className="th-prototype-card-desc">
                  Paste a PRD → Claude drafts internal + external release notes → ready to post to Slack and Zendesk
                </div>
              </div>
            </div>
            <div className="th-prototype-cta">
              Try it <i className="ti ti-arrow-right"></i>
            </div>
          </a>

          {/* Problem */}
          <div className="th-problem-box">
            <div className="th-problem-label">The problem today</div>
            Release documentation is manual: someone reads the PRD, writes an internal note, rewrites it for customers,
            pastes it into Slack, and separately updates the knowledge base. This pipeline turns that into <strong>one step
            with a review gate</strong> — every launch ships with consistent docs in minutes.
          </div>

          {/* Pipeline stages */}
          <div className="th-pipeline">
            <div className="th-pipe-step">
              <div className="th-pipe-icon" style={{ background: "var(--accent-light)", color: "var(--navy-light)" }}>
                <i className="ti ti-file-text"></i>
              </div>
              <div className="th-pipe-step-label">1 · Ingest</div>
              <div className="th-pipe-step-desc">Paste PRD or feature text into the left panel</div>
            </div>
            <div className="th-pipe-arrow">→</div>
            <div className="th-pipe-step">
              <div className="th-pipe-icon" style={{ background: "var(--amber-light)", color: "#7A4F00" }}>
                <i className="ti ti-robot"></i>
              </div>
              <div className="th-pipe-step-label">2 · Draft</div>
              <div className="th-pipe-step-desc">Claude parses text and drafts both notes (real API call)</div>
            </div>
            <div className="th-pipe-arrow">→</div>
            <div className="th-pipe-step">
              <div className="th-pipe-icon" style={{ background: "#EAF3DE", color: "#27500A" }}>
                <i className="ti ti-eye"></i>
              </div>
              <div className="th-pipe-step-label">3 · Review</div>
              <div className="th-pipe-step-desc">Internal · External · Publish to KB tabs</div>
            </div>
            <div className="th-pipe-arrow">→</div>
            <div className="th-pipe-step">
              <div className="th-pipe-icon" style={{ background: "#E1F5EE", color: "#085041" }}>
                <i className="ti ti-send"></i>
              </div>
              <div className="th-pipe-step-label">4 · Publish</div>
              <div className="th-pipe-step-desc">One-click to Slack + Zendesk KB</div>
            </div>
          </div>

          {/* What it generates */}
          <div className="th-outputs-grid">
            <div className="th-output-card">
              <div className="th-output-header">
                <i className="ti ti-lock"></i> Internal release note
                <span className="th-output-dest">#product-releases</span>
              </div>
              <ul className="th-output-list">
                <li><strong>TL;DR</strong> — two-sentence summary</li>
                <li><strong>How it works</strong> — functional bullets</li>
                <li><strong>Availability</strong> — plans, hardware, regions (unknowns flagged as TBD)</li>
                <li><strong>Rollout</strong> — timing and status</li>
                <li><strong>Links &amp; resources</strong> — PRD, help article, training deck</li>
                <li><strong>Talking points</strong> — for support &amp; sales</li>
              </ul>
            </div>
            <div className="th-output-card">
              <div className="th-output-header">
                <i className="ti ti-world"></i> External release note
                <span className="th-output-dest">kb.samsara.com</span>
              </div>
              <ul className="th-output-list">
                <li>Friendly announcement intro in customer voice</li>
                <li>Feature sections with no internal jargon</li>
                <li>Closing CTA pointing to docs or the admin</li>
                <li>Published as draft in Zendesk — reviewer approves before customers see it</li>
              </ul>
              <div className="th-output-example">
                <div className="th-example-label">Example input used in demo</div>
                "AI Multicam: Drivers can now add up to four additional HD cameras, providing a 360-degree
                view to reduce blindspots. The AI Multicam actively notifies drivers in real-time of
                hazards such as pedestrians and cyclists."
              </div>
            </div>
          </div>

          {/* Production architecture */}
          <div className="eyebrow" style={{ marginTop: "2rem", marginBottom: "0.75rem" }}>Production architecture · Key decisions</div>
          <div className="portfolio-table">
            <div className="pt-header">
              <div className="pt-cell pt-col-problem">Decision</div>
              <div className="pt-cell pt-col-action">Choice</div>
              <div className="pt-cell">Why</div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">Slack integration</div>
              <div className="pt-cell pt-col-action">Bot token, not webhook</div>
              <div className="pt-cell">Receipts, threading, Approve/Edit buttons, any channel</div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">Approval gate</div>
              <div className="pt-cell pt-col-action">Required for external, optional for internal</div>
              <div className="pt-cell">Internal ships instantly; customer-facing gets one human click</div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">Zendesk publish</div>
              <div className="pt-cell pt-col-action">Draft → flip live on approval</div>
              <div className="pt-cell">Reviewable first; rollback is one API call</div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">LLM output</div>
              <div className="pt-cell pt-col-action">Schema validation + one retry</div>
              <div className="pt-cell">Unparseable output never reaches a channel</div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">Secrets</div>
              <div className="pt-cell pt-col-action">All tokens in secrets manager</div>
              <div className="pt-cell">Removes per-session pasting; rotation with zero client changes</div>
            </div>
          </div>

          {/* Next step */}
          <div className="th-nextstep-bar">
            <i className="ti ti-arrow-right-circle"></i>
            <span><strong>Next step:</strong> Partner with engineering or IT to determine who can help us set this up internally.</span>
          </div>

          {/* Track B philosophy */}
          <div className="th-philosophy-block th-philosophy-light">
            <div className="th-philosophy-eyebrow"><i className="ti ti-bulb"></i> My thinking — why these decisions</div>
            <div className="th-philosophy-body">[ philosophy coming ]</div>
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
                    Mocking up the flow of the prototype. Building the actual clickable prototype. Writing the
                    implementation instructions for engineering. The Slack integration feature. Reviewing
                    Samsara's website to match the tone and color palette.
                  </div>
                </div>
              </div>
            </div>
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

      <footer>
        Kim Blight · Product Operations · Samsara Final Round
      </footer>
    </>
  );
}
