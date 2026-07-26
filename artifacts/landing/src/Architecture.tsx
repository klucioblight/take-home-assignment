export default function Architecture() {
  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="/take-home-assignment">← Take Home Assignment</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ padding: "3rem 0 2.5rem" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--amber)" }}>Production Architecture · Release Note Pipeline</div>
          <span className="amber-bar"></span>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 48px)" }}>
            From Prototype to Production
          </h1>
          <p className="hero-tagline">
            How the browser prototype becomes a fully hands-free release documentation service —
            with delivery receipts, an approval gate, and no secrets in the UI.
          </p>
        </div>
      </section>

      {/* SYSTEM DIAGRAM */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Six-step happy path</div>
          <h2>System Diagram</h2>
          <p className="section-sub">
            Everything the browser prototype does moves behind a single small <strong>Release Pipeline Service</strong>.
            That's the only addition that makes the whole thing hands-free.
          </p>

          {/* SVG Diagram */}
          <div style={{
            background: "var(--navy)",
            borderRadius: "16px",
            padding: "2rem 1.5rem",
            overflowX: "auto",
            marginBottom: "1.5rem"
          }}>
            <svg viewBox="0 0 820 320" width="100%" style={{ minWidth: "560px", display: "block" }} aria-label="Release Pipeline Architecture Diagram">
              {/* Defs */}
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.4)" />
                </marker>
                <marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#F5A623" />
                </marker>
              </defs>

              {/* Step boxes */}
              {/* Step 1 — PM submits PRD */}
              <rect x="10" y="100" width="110" height="80" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="65" y="128" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="80">STEP 1</text>
              <text x="65" y="148" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">PM submits</text>
              <text x="65" y="163" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">PRD</text>
              <text x="65" y="178" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">via form / webhook</text>

              {/* Arrow 1→2 */}
              <line x1="122" y1="140" x2="148" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* Step 2 — Claude drafts */}
              <rect x="150" y="100" width="120" height="80" rx="10" fill="rgba(0,119,182,0.2)" stroke="rgba(0,119,182,0.5)" strokeWidth="1" />
              <text x="210" y="128" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="80">STEP 2</text>
              <text x="210" y="148" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Claude drafts</text>
              <text x="210" y="163" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">both notes</text>
              <text x="210" y="178" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">validated JSON</text>

              {/* Arrow 2→3 */}
              <line x1="272" y1="140" x2="298" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* Step 3 — Persist */}
              <rect x="300" y="100" width="110" height="80" rx="10" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <text x="355" y="128" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="80">STEP 3</text>
              <text x="355" y="148" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Persist with</text>
              <text x="355" y="163" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">audit trail</text>
              <text x="355" y="178" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">DB + version log</text>

              {/* Arrow 3→4 */}
              <line x1="412" y1="140" x2="438" y2="140" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" markerEnd="url(#arrow)" />

              {/* Step 4 — Post to Slack */}
              <rect x="440" y="100" width="120" height="80" rx="10" fill="rgba(245,166,35,0.15)" stroke="rgba(245,166,35,0.45)" strokeWidth="1" />
              <text x="500" y="128" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="80">STEP 4</text>
              <text x="500" y="148" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Post internal</text>
              <text x="500" y="163" textAnchor="middle" fill="#fff" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="600">note to Slack</text>
              <text x="500" y="178" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">#product-releases</text>

              {/* Arrow 4→5 */}
              <line x1="562" y1="140" x2="588" y2="140" stroke="#F5A623" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />

              {/* Step 5 — Human approves */}
              <rect x="590" y="100" width="110" height="80" rx="10" fill="rgba(245,166,35,0.25)" stroke="#F5A623" strokeWidth="1.5" />
              <text x="645" y="122" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="80">STEP 5</text>
              <text x="645" y="140" textAnchor="middle" fill="#F5A623" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="700">Human</text>
              <text x="645" y="155" textAnchor="middle" fill="#F5A623" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="700">approves</text>
              <text x="645" y="170" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">external gate</text>
              <text x="645" y="182" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9.5" fontFamily="Inter,sans-serif">one click in Slack</text>

              {/* Arrow 5→6 */}
              <line x1="702" y1="140" x2="728" y2="140" stroke="#F5A623" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />

              {/* Step 6 — Publish KB */}
              <rect x="730" y="100" width="80" height="80" rx="10" fill="rgba(39,80,10,0.35)" stroke="#6dbb3a" strokeWidth="1.5" />
              <text x="770" y="122" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="1" textLength="60">STEP 6</text>
              <text x="770" y="140" textAnchor="middle" fill="#a8e06a" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="700">Published</text>
              <text x="770" y="155" textAnchor="middle" fill="#a8e06a" fontSize="11.5" fontFamily="Space Grotesk,sans-serif" fontWeight="700">✓</text>
              <text x="770" y="170" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter,sans-serif">kb.samsara.com</text>
              <text x="770" y="183" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9.5" fontFamily="Inter,sans-serif">+ Slack thread</text>

              {/* Release Pipeline Service bracket */}
              <rect x="140" y="70" width="590" height="4" rx="2" fill="rgba(0,119,182,0.3)" />
              <text x="435" y="65" textAnchor="middle" fill="rgba(0,119,182,0.7)" fontSize="10" fontFamily="Space Grotesk,sans-serif" fontWeight="600" letterSpacing="1">RELEASE PIPELINE SERVICE</text>
              <line x1="140" y1="70" x2="140" y2="100" stroke="rgba(0,119,182,0.3)" strokeWidth="1" />
              <line x1="730" y1="70" x2="730" y2="100" stroke="rgba(0,119,182,0.3)" strokeWidth="1" />

              {/* Secrets manager bubble */}
              <ellipse cx="355" cy="255" rx="90" ry="28" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" />
              <text x="355" y="251" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Space Grotesk,sans-serif" fontWeight="600">Secrets Manager</text>
              <text x="355" y="265" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter,sans-serif">Anthropic · Slack · Zendesk</text>
              {/* lines from secrets to service */}
              <line x1="265" y1="250" x2="210" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="355" y1="227" x2="500" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {[
              { color: "rgba(255,255,255,0.2)", border: "rgba(255,255,255,0.3)", label: "Automated step" },
              { color: "rgba(245,166,35,0.25)", border: "#F5A623", label: "Human gate (external only)" },
              { color: "rgba(39,80,10,0.35)", border: "#6dbb3a", label: "Published state" },
            ].map(({ color, border, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <div style={{ width: 14, height: 14, borderRadius: 3, background: color, border: `1.5px solid ${border}`, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE DECISIONS */}
      <section style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="eyebrow">Architecture decisions</div>
          <h2>Three things worth flagging for eng</h2>
          <p className="section-sub">
            These aren't obvious from the prototype — they're the choices that make the production version
            feel effortless instead of fragile.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
            <div style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--accent)",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem 1.5rem"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>
                Decision 1
              </div>
              <h3 style={{ marginBottom: "0.6rem" }}>Bot token replaces the webhook</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                In production, Slack's <code style={{ fontFamily: "monospace", fontSize: 11, background: "var(--off-white)", border: "1px solid var(--border)", padding: "1px 4px", borderRadius: 3 }}>chat.postMessage</code> with
                a bot token gives you what the prototype's webhook can't: delivery receipts, threading, and —
                most importantly — interactive <strong>Approve / Edit</strong> buttons directly on the release message.
              </p>
              <div style={{ fontSize: 12, color: "var(--text-muted)", background: "var(--off-white)", borderRadius: "var(--radius-md)", padding: "0.6rem 0.85rem" }}>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>Why it matters:</span> The approval gate becomes one click inside Slack — no context switching, no separate UI to navigate.
              </div>
            </div>

            <div style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderTop: "3px solid var(--amber)",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem 1.5rem"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7A4F00", marginBottom: "0.5rem" }}>
                Decision 2
              </div>
              <h3 style={{ marginBottom: "0.6rem" }}>Asymmetric approval gates</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                Internal notes auto-ship instantly — preserving the "publish immediately" behavior from the prototype.
                The external path requires one human click before the Zendesk article flips from draft to live.
              </p>
              <div style={{ fontSize: 12, color: "var(--text-muted)", background: "var(--off-white)", borderRadius: "var(--radius-md)", padding: "0.6rem 0.85rem" }}>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>Why it matters:</span> It's a per-destination config flag — tightening or loosening it later isn't a code change.
              </div>
            </div>

            <div style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderTop: "3px solid #27500A",
              borderRadius: "var(--radius-lg)",
              padding: "1.25rem 1.5rem"
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#27500A", marginBottom: "0.5rem" }}>
                Decision 3
              </div>
              <h3 style={{ marginBottom: "0.6rem" }}>The credentials problem disappears</h3>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                All three tokens — Anthropic, Slack, Zendesk — live in a secrets manager the service reads at runtime.
                No more pasting a webhook per session, and credential rotation never touches the UI.
              </p>
              <div style={{ fontSize: 12, color: "var(--text-muted)", background: "var(--off-white)", borderRadius: "var(--radius-md)", padding: "0.6rem 0.85rem" }}>
                <span style={{ fontWeight: 600, color: "var(--navy)" }}>Why it matters:</span> One of the prototype's biggest limitations — eliminated entirely in production.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE TABLE */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Build scope</div>
          <h2>What's actually left to build</h2>
          <p className="section-sub">
            The prompt, Block Kit payload, and Zendesk request are all proven in the prototype.
            The work is wrapping them in an API with a state machine.
          </p>

          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            background: "#fff",
            marginBottom: "1.25rem"
          }}>
            {/* Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "28% 44% 28%",
              background: "var(--navy)"
            }}>
              {["Component", "What it does", "Effort"].map((h) => (
                <div key={h} style={{ padding: "0.6rem 1.1rem", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                  {h}
                </div>
              ))}
            </div>

            {[
              {
                component: "Pipeline Service API",
                desc: "Express / FastAPI endpoint that accepts a PRD payload, calls Claude, stores the result, and fires the Slack + Zendesk side effects",
                effort: "3–5 days",
                color: "#fff"
              },
              {
                component: "State machine",
                desc: "Tracks each release through Draft → Internal Sent → Approved → Published. Prevents double-publishing and gives the audit trail.",
                effort: "2–3 days",
                color: "var(--off-white)"
              },
              {
                component: "Slack bot token + approval blocks",
                desc: "Replaces webhook with a bot. Adds interactive Approve / Edit buttons that resolve the external approval step without leaving Slack.",
                effort: "1–2 days",
                color: "#fff"
              },
              {
                component: "Zendesk draft → live toggle",
                desc: "On approval, flips the article from draft to published via Help Center API and threads a \"Published ✓ + link\" back to the Slack message.",
                effort: "1 day",
                color: "var(--off-white)"
              },
              {
                component: "Secrets manager wiring",
                desc: "Pull Anthropic, Slack, and Zendesk credentials from Vault / AWS Secrets Manager at runtime. No secrets in env vars or browser.",
                effort: "½ day",
                color: "#fff"
              },
            ].map(({ component, desc, effort, color }) => (
              <div key={component} style={{ display: "grid", gridTemplateColumns: "28% 44% 28%", borderTop: "1px solid var(--border)", background: color }}>
                <div style={{ padding: "0.9rem 1.1rem", fontSize: 12.5, fontWeight: 600, color: "var(--navy)", lineHeight: 1.5 }}>
                  {component}
                </div>
                <div style={{ padding: "0.9rem 1.1rem", fontSize: 12.5, color: "var(--text-secondary)", lineHeight: 1.6, borderLeft: "1px solid var(--border)" }}>
                  {desc}
                </div>
                <div style={{ padding: "0.9rem 1.1rem", borderLeft: "1px solid var(--border)" }}>
                  <span style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    background: "var(--accent-light)",
                    color: "var(--navy-light)",
                    borderRadius: 4,
                    padding: "2px 8px"
                  }}>{effort}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Estimate callout */}
          <div style={{
            background: "var(--amber-light)",
            borderLeft: "3px solid var(--amber)",
            borderRadius: "0 var(--radius-md) var(--radius-md) 0",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "flex-start",
            gap: 12
          }}>
            <i className="ti ti-clock" style={{ color: "var(--amber)", fontSize: 20, flexShrink: 0, marginTop: 2 }}></i>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#7A4F00", marginBottom: 4 }}>
                Total estimate: 1–2 engineer-weeks for the full happy path
              </div>
              <div style={{ fontSize: 13, color: "#9A6500", lineHeight: 1.6 }}>
                Since the prompt, Block Kit payload, and Zendesk request are already proven in the prototype —
                the engineering work is wrapping them in an API with a state machine and credential management.
                The hard product decisions are already made.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2 */}
      <section style={{ background: "var(--navy)" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--amber)" }}>Phase 2</div>
          <h2 style={{ color: "#fff" }}>What slots in next — without changing anything downstream</h2>
          <p className="section-sub" style={{ color: "rgba(255,255,255,0.65)" }}>
            The phase 1 API is designed so phase 2 is additive — no breaking changes to the pipeline.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {[
              {
                icon: "ti-webhook",
                title: "PRD folder webhook trigger",
                desc: "Watch a Google Drive or Notion folder for new PRD documents. Auto-trigger the pipeline the moment a doc is moved to a \"Ready for Release Notes\" folder — zero manual steps."
              },
              {
                icon: "ti-send",
                title: "#sales-enablement routing",
                desc: "A second Slack destination for external-facing teams. Same pipeline, different Block Kit template with GTM-friendly language and a link to the KB article once it's live."
              },
              {
                icon: "ti-calendar-repeat",
                title: "Weekly release digest",
                desc: "Cron job that aggregates all notes published in the last 7 days and posts a summary digest to a broader channel — so all teams see what shipped without hunting through individual posts."
              },
              {
                icon: "ti-chart-bar",
                title: "Metrics + feedback loop",
                desc: "Track opens on the KB article, collect PM ratings on note quality, and feed low-quality examples back into prompt fine-tuning — so the AI output improves automatically over time."
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-lg)",
                padding: "1.1rem 1.25rem"
              }}>
                <i className={`ti ${icon}`} style={{ fontSize: 22, color: "var(--amber)", marginBottom: "0.5rem", display: "block" }}></i>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>{title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "1.5rem",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderLeft: "3px solid var(--amber)",
            borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
            padding: "1.25rem 1.5rem"
          }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: 6 }}>
              <i className="ti ti-bulb"></i> Design principle
            </div>
            <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              Phase 2 items plug into the same API surface — they're additional triggers and destinations,
              not rewrites. This means phase 1 can ship in under two weeks and deliver immediate value
              while phase 2 is being scoped. The pipeline gets better without getting bigger.
            </div>
          </div>
        </div>
      </section>

      {/* CTA BACK */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <a href="/prototype" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--navy)",
            color: "#fff",
            padding: "0.7rem 1.25rem",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 600,
            fontFamily: "'Space Grotesk', sans-serif",
            transition: "background 0.15s"
          }}>
            <i className="ti ti-player-play"></i>
            Try the live prototype
          </a>
          <a href="/take-home-assignment" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            padding: "0.7rem 1.25rem",
            borderRadius: "var(--radius-md)",
            textDecoration: "none",
            fontSize: 13.5,
            fontWeight: 600
          }}>
            <i className="ti ti-arrow-left"></i>
            Back to Take Home
          </a>
        </div>
      </section>

      <footer>
        Kim Blight · Product Operations · Samsara Final Round
      </footer>
    </>
  );
}
