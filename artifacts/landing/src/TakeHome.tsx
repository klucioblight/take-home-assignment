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
              <div className="th-theme-title">Operational rhythms to drive alignment</div>
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
                <a href="/architecture" className="th-split-badge th-split-badge-blue" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <i className="ti ti-layout-board"></i> Production architecture drafted <i className="ti ti-arrow-right" style={{ fontSize: 10 }}></i>
                </a>
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
            </div>
          </div>

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
