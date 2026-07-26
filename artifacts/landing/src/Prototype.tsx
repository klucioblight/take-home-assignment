import { useState, useRef } from "react";

const DEFAULT_PRD = `AI Multicam: Drivers can now add up to four additional HD cameras, providing a 360-degree view to reduce blindspots, all accessible through an in-cab monitor. In addition, the AI Multicam actively notifies drivers in real-time of hazards, such as pedestrians and cyclists. Whether using a Samsara camera or a third-party device, administrators can retrieve historic video footage and corresponding audio to help quickly resolve incidents.`;

const DEMO_INTERNAL = {
  tldr: "AI Multicam expands Samsara's camera system to support up to four additional HD cameras per vehicle, delivering 360° visibility and real-time AI hazard alerts. Admins can retrieve video and audio footage for incident resolution across Samsara and third-party devices.",
  howItWorks: [
    "Drivers add up to four additional HD cameras via the in-cab monitor interface",
    "Cameras are accessible and manageable directly through the in-cab monitor",
    "AI Multicam actively monitors the feed and sends real-time hazard alerts for pedestrians, cyclists, and other risks",
    "Supports both Samsara-native cameras and compatible third-party devices",
    "Administrators can pull historic video footage and corresponding audio through the Samsara dashboard for incident resolution",
  ],
  availability: {
    plans: "TBD — confirm which fleet/enterprise tiers include AI Multicam",
    hardware: "Samsara cameras + compatible third-party devices",
    regions: "TBD — confirm regional rollout scope",
  },
  rollout: "TBD — confirm GA date, phased rollout plan, and beta customer list",
  links: [
    { label: "PRD", url: "TBD" },
    { label: "Help Center article", url: "TBD — kb.samsara.com" },
    { label: "Training deck", url: "TBD" },
  ],
  talkingPoints: [
    "360° HD coverage closes the blindspot gap that single-camera setups can't address",
    "AI-powered real-time hazard alerts mean the system acts on footage, not just records it",
    "Third-party device support lowers the barrier for fleets already invested in their camera hardware",
    "Historic video + audio retrieval speeds up incident resolution for admins — no manual footage hunting",
  ],
};

const DEMO_EXTERNAL = {
  title: "AI Multicam: Expanded Camera Support and Real-Time Hazard Alerts",
  intro:
    "We're excited to introduce AI Multicam — a major expansion to Samsara's camera capabilities that gives drivers a complete view of their surroundings and helps fleets resolve incidents faster.",
  sections: [
    {
      heading: "360° visibility with up to four HD cameras",
      body: "Drivers can now connect up to four additional HD cameras to create a full 360-degree view around the vehicle, all manageable from the in-cab monitor. Whether you're operating in tight urban spaces or on open highways, AI Multicam helps eliminate the blindspots that lead to incidents.",
    },
    {
      heading: "Real-time AI hazard alerts",
      body: "AI Multicam doesn't just record — it actively analyzes the feed and notifies drivers in real time when pedestrians, cyclists, or other hazards are detected. Proactive alerts help drivers respond before a situation becomes an incident.",
    },
    {
      heading: "Works with your existing cameras",
      body: "Already using third-party cameras? AI Multicam is compatible with a range of non-Samsara devices, so you can expand your visibility without replacing hardware you've already invested in.",
    },
    {
      heading: "Faster incident resolution for administrators",
      body: "When incidents do occur, administrators can retrieve historic video footage and the corresponding audio directly from the Samsara dashboard — giving your team the full picture quickly so you can act with confidence.",
    },
  ],
  cta: "To get started or learn more about supported hardware and setup, visit the Samsara Help Center or contact your account team.",
};

type Tab = "internal" | "external" | "publish";

export default function Prototype() {
  const [prd, setPrd] = useState(DEFAULT_PRD);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [activeTab, setActiveTab] = useState<Tab>("internal");
  const [loadingMsg, setLoadingMsg] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const LOADING_STEPS = [
    "Parsing PRD text…",
    "Drafting internal release note…",
    "Drafting external release note…",
    "Flagging unknowns as TBD…",
    "Structuring Slack Block Kit payload…",
    "Done.",
  ];

  function handleGenerate() {
    if (!prd.trim()) return;
    setStatus("loading");
    setLoadingMsg(LOADING_STEPS[0]);
    let i = 1;
    const interval = setInterval(() => {
      if (i < LOADING_STEPS.length) {
        setLoadingMsg(LOADING_STEPS[i]);
        i++;
      } else {
        clearInterval(interval);
        setStatus("done");
        setActiveTab("internal");
        setTimeout(() => {
          outputRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }, 600);
  }

  function copyText(text: string, key: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  const internalText = [
    `TL;DR\n${DEMO_INTERNAL.tldr}`,
    `\nHow it works\n${DEMO_INTERNAL.howItWorks.map((b) => `• ${b}`).join("\n")}`,
    `\nAvailability\n• Plans: ${DEMO_INTERNAL.availability.plans}\n• Hardware: ${DEMO_INTERNAL.availability.hardware}\n• Regions: ${DEMO_INTERNAL.availability.regions}`,
    `\nRollout\n${DEMO_INTERNAL.rollout}`,
    `\nTalking points\n${DEMO_INTERNAL.talkingPoints.map((t) => `• ${t}`).join("\n")}`,
  ].join("");

  const externalText = [
    DEMO_EXTERNAL.title,
    `\n\n${DEMO_EXTERNAL.intro}`,
    ...DEMO_EXTERNAL.sections.map((s) => `\n\n${s.heading}\n${s.body}`),
    `\n\n${DEMO_EXTERNAL.cta}`,
  ].join("");

  return (
    <>
      <nav>
        <div className="nav-logo">
          Interview · <span>Samsara</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/take-home-assignment">← Back to assignment</a>
          </li>
        </ul>
      </nav>

      <section className="proto-hero">
        <div className="container">
          <div className="eyebrow" style={{ color: "var(--amber)" }}>
            Track B · Live prototype
          </div>
          <h1 className="proto-title">Release Note Pipeline</h1>
          <p className="proto-subtitle">
            Paste a PRD → AI drafts internal + external release notes → one-click publish to Slack
            and Zendesk KB
          </p>
        </div>
      </section>

      <section className="proto-body">
        <div className="container proto-layout">
          {/* LEFT: INPUT */}
          <div className="proto-input-col">
            <div className="proto-panel">
              <div className="proto-panel-label">
                <i className="ti ti-file-text"></i> PRD or feature text
              </div>
              <textarea
                className="proto-textarea"
                value={prd}
                onChange={(e) => {
                  setPrd(e.target.value);
                  if (status === "done") setStatus("idle");
                }}
                placeholder="Paste your PRD or feature description here…"
                rows={10}
              />
              <button
                className="proto-generate-btn"
                onClick={handleGenerate}
                disabled={status === "loading" || !prd.trim()}
              >
                {status === "loading" ? (
                  <>
                    <span className="proto-spinner"></span> Generating…
                  </>
                ) : (
                  <>
                    <i className="ti ti-player-play"></i> Generate release notes
                  </>
                )}
              </button>

              {status === "loading" && (
                <div className="proto-loading-msg">
                  <i className="ti ti-robot"></i> {loadingMsg}
                </div>
              )}

              {status === "done" && (
                <div className="proto-success-msg">
                  <i className="ti ti-check"></i> Notes generated — review below
                </div>
              )}

              <div className="proto-panel proto-slack-panel" style={{ marginTop: "1rem" }}>
                <div className="proto-panel-label">
                  <i className="ti ti-brand-slack"></i> Slack destination
                </div>
                <div className="proto-slack-channel">#product-releases</div>
                <p className="proto-slack-note">
                  In production: paste your incoming webhook URL to auto-post the internal note on
                  generate.
                </p>
                <input
                  className="proto-webhook-input"
                  type="password"
                  placeholder="https://hooks.slack.com/services/…"
                  disabled
                />
                <span className="proto-tbd-pill">Demo mode — webhook disabled</span>
              </div>
            </div>
          </div>

          {/* RIGHT: OUTPUT */}
          <div className="proto-output-col" ref={outputRef}>
            {status === "idle" && (
              <div className="proto-empty-state">
                <i className="ti ti-arrow-left" style={{ fontSize: "1.5rem", opacity: 0.3 }}></i>
                <p>Paste a PRD and click Generate to see both release notes here.</p>
                <p style={{ fontSize: "12px", opacity: 0.5 }}>
                  The AI Multicam example is pre-loaded to try immediately.
                </p>
              </div>
            )}

            {status === "loading" && (
              <div className="proto-empty-state">
                <div className="proto-big-spinner"></div>
                <p style={{ marginTop: "1rem" }}>{loadingMsg}</p>
              </div>
            )}

            {status === "done" && (
              <div className="proto-results">
                <div className="proto-tabs">
                  <button
                    className={`proto-tab ${activeTab === "internal" ? "proto-tab-active" : ""}`}
                    onClick={() => setActiveTab("internal")}
                  >
                    <i className="ti ti-lock"></i> Internal note
                  </button>
                  <button
                    className={`proto-tab ${activeTab === "external" ? "proto-tab-active" : ""}`}
                    onClick={() => setActiveTab("external")}
                  >
                    <i className="ti ti-world"></i> External note
                  </button>
                  <button
                    className={`proto-tab ${activeTab === "publish" ? "proto-tab-active" : ""}`}
                    onClick={() => setActiveTab("publish")}
                  >
                    <i className="ti ti-send"></i> Publish to KB
                  </button>
                </div>

                {activeTab === "internal" && (
                  <div className="proto-note-panel">
                    <div className="proto-note-actions">
                      <span className="proto-dest-tag">
                        <i className="ti ti-brand-slack"></i> #product-releases
                      </span>
                      <button
                        className="proto-copy-btn"
                        onClick={() => copyText(internalText, "internal")}
                      >
                        {copied === "internal" ? (
                          <><i className="ti ti-check"></i> Copied</>
                        ) : (
                          <><i className="ti ti-copy"></i> Copy</>
                        )}
                      </button>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">TL;DR</div>
                      <p>{DEMO_INTERNAL.tldr}</p>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">How it works</div>
                      <ul className="proto-note-list">
                        {DEMO_INTERNAL.howItWorks.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">Availability</div>
                      <div className="proto-availability-grid">
                        <div>
                          <span className="proto-avail-key">Plans</span>
                          <span className="proto-tbd-chip">TBD</span>
                          <span className="proto-avail-val">
                            {DEMO_INTERNAL.availability.plans.replace("TBD — ", "")}
                          </span>
                        </div>
                        <div>
                          <span className="proto-avail-key">Hardware</span>
                          <span className="proto-avail-val">
                            {DEMO_INTERNAL.availability.hardware}
                          </span>
                        </div>
                        <div>
                          <span className="proto-avail-key">Regions</span>
                          <span className="proto-tbd-chip">TBD</span>
                          <span className="proto-avail-val">
                            {DEMO_INTERNAL.availability.regions.replace("TBD — ", "")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">Rollout</div>
                      <span className="proto-tbd-chip">TBD</span>
                      <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                        {" "}
                        {DEMO_INTERNAL.rollout.replace("TBD — ", "")}
                      </span>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">Links &amp; resources</div>
                      <ul className="proto-note-list">
                        {DEMO_INTERNAL.links.map((l, i) => (
                          <li key={i}>
                            <strong>{l.label}:</strong>{" "}
                            <span className="proto-tbd-chip" style={{ fontSize: "11px" }}>
                              TBD
                            </span>{" "}
                            {l.url.replace("TBD — ", "").replace("TBD", "")}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="proto-note-section">
                      <div className="proto-note-label">Talking points</div>
                      <ul className="proto-note-list">
                        {DEMO_INTERNAL.talkingPoints.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="proto-slack-action">
                      <button className="proto-slack-btn" disabled>
                        <i className="ti ti-brand-slack"></i> Post to #product-releases
                        <span style={{ fontSize: "11px", opacity: 0.7, marginLeft: "6px" }}>
                          (add webhook to enable)
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "external" && (
                  <div className="proto-note-panel">
                    <div className="proto-note-actions">
                      <span className="proto-dest-tag">
                        <i className="ti ti-world"></i> kb.samsara.com
                      </span>
                      <button
                        className="proto-copy-btn"
                        onClick={() => copyText(externalText, "external")}
                      >
                        {copied === "external" ? (
                          <><i className="ti ti-check"></i> Copied</>
                        ) : (
                          <><i className="ti ti-copy"></i> Copy</>
                        )}
                      </button>
                    </div>

                    <div className="proto-kb-preview">
                      <div className="proto-kb-breadcrumb">kb.samsara.com › Release Notes</div>
                      <h2 className="proto-kb-title">{DEMO_EXTERNAL.title}</h2>
                      <p className="proto-kb-intro">{DEMO_EXTERNAL.intro}</p>
                      {DEMO_EXTERNAL.sections.map((s, i) => (
                        <div key={i} className="proto-kb-section">
                          <h3 className="proto-kb-heading">{s.heading}</h3>
                          <p>{s.body}</p>
                        </div>
                      ))}
                      <div className="proto-kb-cta">{DEMO_EXTERNAL.cta}</div>
                    </div>
                  </div>
                )}

                {activeTab === "publish" && (
                  <div className="proto-note-panel">
                    <div className="proto-publish-header">
                      <i className="ti ti-send" style={{ color: "var(--accent)" }}></i>
                      <span>Publish to Zendesk Help Center</span>
                    </div>
                    <p className="proto-publish-desc">
                      In production, hitting Publish fires a{" "}
                      <code>POST .../sections/&#123;id&#125;/articles.json</code> to the Zendesk
                      Help Center API — article created as a draft so a reviewer approves it before
                      customers see it.
                    </p>

                    <div className="proto-publish-steps">
                      <div className="proto-publish-step proto-step-done">
                        <div className="proto-step-num">1</div>
                        <div>
                          <strong>PRD ingested</strong>
                          <span className="proto-step-status proto-status-done">
                            <i className="ti ti-check"></i> Done
                          </span>
                        </div>
                      </div>
                      <div className="proto-publish-step proto-step-done">
                        <div className="proto-step-num">2</div>
                        <div>
                          <strong>Notes drafted by AI</strong>
                          <span className="proto-step-status proto-status-done">
                            <i className="ti ti-check"></i> Done
                          </span>
                        </div>
                      </div>
                      <div className="proto-publish-step proto-step-done">
                        <div className="proto-step-num">3</div>
                        <div>
                          <strong>Internal note reviewed</strong>
                          <span className="proto-step-status proto-status-done">
                            <i className="ti ti-check"></i> Done
                          </span>
                        </div>
                      </div>
                      <div className="proto-publish-step proto-step-pending">
                        <div className="proto-step-num">4</div>
                        <div>
                          <strong>External note approved</strong>
                          <span className="proto-step-status proto-status-pending">
                            <i className="ti ti-clock"></i> Awaiting approval
                          </span>
                        </div>
                      </div>
                      <div className="proto-publish-step proto-step-pending">
                        <div className="proto-step-num">5</div>
                        <div>
                          <strong>Published to kb.samsara.com</strong>
                          <span className="proto-step-status proto-status-pending">
                            <i className="ti ti-clock"></i> Pending step 4
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="proto-publish-code">
                      <div className="proto-code-label">Generated API request (draft)</div>
                      <pre className="proto-code-block">{`POST https://samsara.zendesk.com/api/v2
  /help_center/en-us/sections/{SECTION_ID}/articles.json

Authorization: Bearer {ZENDESK_API_TOKEN}
Content-Type: application/json

{
  "article": {
    "title": "${DEMO_EXTERNAL.title}",
    "body": "...(generated HTML)...",
    "draft": true,
    "locale": "en-us"
  }
}`}</pre>
                      <button
                        className="proto-copy-btn"
                        style={{ marginTop: "0.5rem" }}
                        onClick={() => copyText("POST https://samsara.zendesk.com/api/v2/help_center/en-us/sections/{SECTION_ID}/articles.json", "api")}
                      >
                        {copied === "api" ? (
                          <><i className="ti ti-check"></i> Copied</>
                        ) : (
                          <><i className="ti ti-copy"></i> Copy request</>
                        )}
                      </button>
                    </div>

                    <div className="proto-publish-note">
                      <i className="ti ti-info-circle"></i> In production, API tokens live in a
                      secrets manager — no pasting per session, rotation with zero client changes.
                    </div>
                  </div>
                )}
              </div>
            )}
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
