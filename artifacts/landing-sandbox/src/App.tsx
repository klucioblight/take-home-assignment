import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="#observations">What I Heard</a></li>
          <li><a href="#ai">AI Tools</a></li>
          <li><a href="#why">Why Samsara</a></li>
          <li><a href="#work">My Work</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="eyebrow">Product Operations · Samsara Interview</div>
          <span className="amber-bar"></span>
          <h1><span className="amber-underline">Kim Blight</span></h1>
          <p className="hero-title">Product Operations Leader · Builder · Systems Thinker</p>
          <p className="hero-tagline">I build systems that let fast-moving teams move even faster — without the overhead that slows them down. I use AI to unlock what humans can't do alone, and I bring alignment to rooms full of opinionated builders.</p>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">What I bring</div>
          <h2>Three things Samsara cares about</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <i className="ti ti-flag-2 pillar-icon"></i>
              <h3>High ownership</h3>
              <p className="pillar-desc">I act outside my remit when it matters. I don't wait for permission when I can see what needs to be done.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-arrows-shuffle pillar-icon"></i>
              <h3>Complex problem spaces</h3>
              <p className="pillar-desc">I thrive where org, process, and product complexity intersect — and I build tools that outlast me.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-chart-line pillar-icon"></i>
              <h3>Measurable impact</h3>
              <p className="pillar-desc">Every story I tell traces back to customer impact, cost reduction, or unlocked team velocity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OBSERVATIONS */}
      <section id="observations" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="eyebrow">What I heard · What I've done</div>
          <h2>Three themes — and proof I've tackled each one</h2>
          <p className="section-sub">Observations from my conversations with the Samsara team, connected to work I've already shipped.</p>

          {/* Observation 1 */}
          <div className="obs-block">
            <div className="obs-heard">
              <div className="obs-heard-label">
                <i className="ti ti-ear"></i> What I heard from the Samsara team
              </div>
              <blockquote className="obs-quote">
                "GTM teams aren't seeing what's shipping until it's already out — even for launches they care about."
              </blockquote>
            </div>
            <div className="obs-proof-wrap">
              <div className="obs-connector">
                <i className="ti ti-arrow-right"></i>
                <span>I've tackled this before.</span>
              </div>
              <div className="proof-stat-row">
                <span className="proof-stat">80% fewer</span>
                <span className="proof-stat-label">launch surprises for GTM teams</span>
              </div>
              <p className="proof-context">
                Built a system at my previous company that gave GTM full visibility into everything shipping — before it shipped. The remaining 20% of fast-moving changes now reach GTM at the same time as customers.
              </p>
              <button className="expand-toggle" onClick={() => toggle('obs1')}>
                <span>How I did it</span>
                <i className={`ti ${open['obs1'] ? 'ti-chevron-up' : 'ti-chevron-down'}`}></i>
              </button>
              {open['obs1'] && (
                <div className="expand-content">
                  <ul className="expand-list">
                    <li>Launched a bi-weekly email to GTM leaders with known upcoming launches — sourced entirely from data Product and Engineering already used, adding zero new process for them</li>
                    <li>Built an external-facing changelog updated by Product Ops at ship time, so teams saw updates in real time alongside customers</li>
                    <li>Created a Jira dashboard surfacing tickets with a target completion date within the next two weeks — an always-on "preview" of what's coming</li>
                    <li>Introduced an AI agent that let teams search upcoming customer-facing items expected to ship in ~2 weeks, so they could prepare proactively</li>
                    <li>Added a 3-month post-launch support ticket review per feature — Product Ops helped respond and fed insights directly into Help Center documentation</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Observation 2 */}
          <div className="obs-block">
            <div className="obs-heard">
              <div className="obs-heard-label">
                <i className="ti ti-ear"></i> What I heard from the Samsara team
              </div>
              <blockquote className="obs-quote">
                "There's real appetite for AI tools, but no clear map of what to use for what — and real risk of redundant spend."
              </blockquote>
            </div>
            <div className="obs-proof-wrap">
              <div className="obs-connector">
                <i className="ti ti-arrow-right"></i>
                <span>I built this playbook from scratch.</span>
              </div>
              <div className="proof-stat-row">
                <span className="proof-stat">40% faster</span>
                <span className="proof-stat-label">support ticket resolution (2 weeks → 5 days)</span>
              </div>
              <div className="proof-stat-row" style={{ marginTop: "0.5rem" }}>
                <span className="proof-stat">~20 hrs/month</span>
                <span className="proof-stat-label">reclaimed across triage, meeting prep, and NPI</span>
              </div>
              <p className="proof-context">
                Took an org with no AI tooling to a fully deployed stack — Gemini Gems, Windsurf, Opencode, and a company-wide training program. Removed an entire editorial review step from the comms process.
              </p>
              <button className="expand-toggle" onClick={() => toggle('obs2')}>
                <span>How I did it</span>
                <i className={`ti ${open['obs2'] ? 'ti-chevron-up' : 'ti-chevron-down'}`}></i>
              </button>
              {open['obs2'] && (
                <div className="expand-content">
                  <ul className="expand-list">
                    <li>Built Gemini Gems for core Product and Engineering workflows: changelogs, PRD drafts, customer feedback loops, and NPI materials</li>
                    <li>Introduced Windsurf and Opencode for engineering teams; wrote skill files that standardized format and tone automatically</li>
                    <li>Led company-wide AI training — every team member equipped to automate their own repeatable work</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Observation 3 */}
          <div className="obs-block">
            <div className="obs-heard">
              <div className="obs-heard-label">
                <i className="ti ti-ear"></i> What I heard from the Samsara team
              </div>
              <blockquote className="obs-quote">
                "There's genuine care across teams — but it doesn't always translate into alignment across functions."
              </blockquote>
            </div>
            <div className="obs-proof-wrap">
              <div className="obs-connector">
                <i className="ti ti-arrow-right"></i>
                <span>I built the bridge that connected Product, Engineering, and GTM.</span>
              </div>
              <div className="proof-stat-row">
                <span className="proof-stat">~$20M ACV</span>
                <span className="proof-stat-label">generated through a program I built from scratch</span>
              </div>
              <p className="proof-context">
                Created a Customer Advocate Program that matched VP-level Product and Engineering leaders to enterprise deals at exactly the moment trust was the blocker to close — connecting two orgs that rarely spoke before this program existed.
              </p>
              <button className="expand-toggle" onClick={() => toggle('obs3')}>
                <span>How I did it</span>
                <i className={`ti ${open['obs3'] ? 'ti-chevron-up' : 'ti-chevron-down'}`}></i>
              </button>
              {open['obs3'] && (
                <div className="expand-content">
                  <ul className="expand-list">
                    <li>Built and led a Customer Advocate Program from scratch — matching VP-level product and engineering leaders to enterprise deals based on domain expertise and relationship fit</li>
                    <li>Coordinated with GTM to bring technical advocates into deals at the exact moment trust was the blocker to close</li>
                    <li>Built the program infrastructure as a repeatable playbook — systematized so it scaled beyond individual relationships and one-off favors</li>
                    <li>Acted as the connective layer between Product, Engineering, and GTM — two orgs that rarely proactively spoke before this program</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* AI TOOLS */}
      <section id="ai" style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">AI toolkit</div>
          <h2>Tools I've implemented and shipped with</h2>
          <p className="section-sub">Not evaluated — deployed. Each of these has been rolled out to teams with training, workflows, and measurable outcomes attached.</p>

          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-gemini"><i className="ti ti-sparkles"></i></div>
                <div><div className="tool-name">Gemini</div></div>
              </div>
              <p className="tool-use">Built the first internal Gems for Product and Engineering — automating changelogs, PRD drafts, meeting prep, and customer feedback intake. The foundation of our AI workflow stack.</p>
              <div className="tool-tags">
                <span className="tool-tag">Workflow automation</span>
                <span className="tool-tag">Gems / agents</span>
                <span className="tool-tag">Product and Engineering ops</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-cursor"><i className="ti ti-terminal-2"></i></div>
                <div><div className="tool-name">Cursor</div></div>
              </div>
              <p className="tool-use">Deployed for engineers to accelerate code writing and review — getting builders out of boilerplate and into architecture and product thinking.</p>
              <div className="tool-tags">
                <span className="tool-tag">Code acceleration</span>
                <span className="tool-tag">Engineering</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-opencode"><i className="ti ti-code"></i></div>
                <div><div className="tool-name">Opencode</div></div>
              </div>
              <p className="tool-use">Built skill files to auto-generate PRD first drafts with embedded customer notes, wiki context, and data. Removed the blank-page problem for PMs entirely.</p>
              <div className="tool-tags">
                <span className="tool-tag">PRD generation</span>
                <span className="tool-tag">Skill files</span>
                <span className="tool-tag">Product</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-windsurf"><i className="ti ti-wind"></i></div>
                <div><div className="tool-name">Windsurf</div></div>
              </div>
              <p className="tool-use">Rolled out for agentic coding workflows — letting engineers delegate longer-horizon tasks and iterate faster on prototypes.</p>
              <div className="tool-tags">
                <span className="tool-tag">Agentic coding</span>
                <span className="tool-tag">Prototyping</span>
                <span className="tool-tag">Engineering</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-anthropic"><i className="ti ti-cpu"></i></div>
                <div><div className="tool-name">Anthropic / Claude</div></div>
              </div>
              <p className="tool-use">Used for reasoning-heavy work — complex document synthesis, cross-functional alignment prep, and internal tools that needed nuanced judgment, not just speed.</p>
              <div className="tool-tags">
                <span className="tool-tag">Reasoning &amp; synthesis</span>
                <span className="tool-tag">Internal tooling</span>
                <span className="tool-tag">Strategy</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo" style={{ background: "#F0F4FF", color: "#4353FF" }}><i className="ti ti-world-bolt"></i></div>
                <div><div className="tool-name">Replit</div></div>
              </div>
              <p className="tool-use">Used to deploy web experiences quickly — from internal tools to interview pages like this one. Replit's AI agent lets me ship functional apps without a traditional dev environment.</p>
              <div className="tool-tags">
                <span className="tool-tag">Web deployment</span>
                <span className="tool-tag">AI agent</span>
                <span className="tool-tag">Rapid prototyping</span>
              </div>
            </div>
          </div>

          {/* AGENT BUILDS */}
          <div className="agent-section">
            <div className="agent-section-label">Agent builds</div>
            <div className="agent-card">
              <div className="agent-header">
                <div className="agent-title-row">
                  <div className="agent-logo"><i className="ti ti-robot"></i></div>
                  <div>
                    <div className="agent-name">Bug triage &amp; auto-fix agent</div>
                    <div className="agent-stack">Jira MCP · Claude 3.5 Sonnet · Windsurf Cascade · GitHub</div>
                  </div>
                </div>
                <p className="agent-desc">An end-to-end agentic loop that ingests incoming bug tickets, classifies and triages them with Claude, and — for auto-fixable issues — writes the patch, generates a regression test, and opens a pull request, all without human intervention.</p>
              </div>
              <div className="agent-pipeline">
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#E8F4FF", color: "#0062CC" }}><i className="ti ti-inbox"></i></div>
                  <div className="pipeline-label">Ingest</div>
                  <div className="pipeline-detail">Polls Jira via MCP for new bug tickets. Pulls title, description, customer type, and ideal state.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "var(--amber-light)", color: "#7A4F00" }}><i className="ti ti-cpu"></i></div>
                  <div className="pipeline-label">Classify</div>
                  <div className="pipeline-detail">Claude reads each ticket: real bug, duplicate, or feature request? Ranks severity, identifies the subsystem from the stack trace, and scores auto-fix confidence.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EAF3DE", color: "#27500A" }}><i className="ti ti-git-branch"></i></div>
                  <div className="pipeline-label">Fix</div>
                  <div className="pipeline-detail">Windsurf Cascade reads the relevant source files, writes the patch, and generates a matching regression test — validated inside a sandboxed branch.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EEEDFE", color: "#3C3489" }}><i className="ti ti-git-pull-request"></i></div>
                  <div className="pipeline-label">Ship or review</div>
                  <div className="pipeline-detail">Tests pass → PR opened on a <code>fix/</code> branch with root cause, diff summary, and ticket link. Low-confidence fixes open as draft PRs for human review.</div>
                </div>
              </div>
              <div className="agent-model-note">
                <i className="ti ti-cpu"></i>
                <span><strong>Why Claude 3.5 Sonnet:</strong> Fast and cost-efficient for high-volume classification — the right choice for a continuous triage loop that needs reliable structured output without burning budget on every ticket.</span>
              </div>
            </div>
            <div className="agent-card" style={{ marginTop: "12px" }}>
              <div className="agent-header">
                <div className="agent-title-row">
                  <div className="agent-logo"><i className="ti ti-mail-bolt"></i></div>
                  <div>
                    <div className="agent-name">stuck@ inbox agent</div>
                    <div className="agent-stack">Gmail MCP · Google Drive MCP · Jira MCP · Confluence MCP · Claude 3.7 Sonnet</div>
                  </div>
                </div>
                <p className="agent-desc">An agentic loop that watches an internal help alias, searches three knowledge sources simultaneously, and either auto-replies with a sourced answer or opens a Jira ticket — then writes every resolved answer back to the wiki so the same question never reaches a human twice.</p>
              </div>
              <div className="agent-pipeline agent-pipeline-5">
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#E8F4FF", color: "#0062CC" }}><i className="ti ti-mail-search"></i></div>
                  <div className="pipeline-label">Watch inbox</div>
                  <div className="pipeline-detail">Gmail MCP polls stuck@ continuously. Claude parses the core question, strips reply-chain noise, and deduplicates against Confluence so repeat asks never reach humans.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EAF3DE", color: "#27500A" }}><i className="ti ti-topology-star"></i></div>
                  <div className="pipeline-label">Search in parallel</div>
                  <div className="pipeline-detail">Google Drive, Jira, and Confluence MCPs fire simultaneously. Results come back ranked by relevance and recency before Claude writes a word.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "var(--amber-light)", color: "#7A4F00" }}><i className="ti ti-adjustments-horizontal"></i></div>
                  <div className="pipeline-label">Apply /stuck skill</div>
                  <div className="pipeline-detail">A purpose-built prompt formats the answer for an internal audience: direct, source-linked, under 200 words — and outputs a confidence score to gate auto-reply vs. escalation.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EEEDFE", color: "#3C3489" }}><i className="ti ti-git-pull-request"></i></div>
                  <div className="pipeline-label">Reply or escalate</div>
                  <div className="pipeline-detail">High confidence → auto-reply via Gmail. Low confidence → Jira ticket assigned to the right team, CC'd to stuck@, and a holding reply sent so the asker isn't left in silence.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#E1F5EE", color: "#085041" }}><i className="ti ti-books"></i></div>
                  <div className="pipeline-label">Write the wiki</div>
                  <div className="pipeline-detail">Once resolved — by agent or human — a Confluence page is created (or appended) with the question, verified answer, and source links. The next identical ask surfaces on the first search pass.</div>
                </div>
              </div>
              <div className="agent-model-note">
                <i className="ti ti-cpu"></i>
                <span><strong>Why Claude 3.7 Sonnet:</strong> Stronger reasoning handles the ambiguity of natural-language help requests and multi-source synthesis — extended thinking lets it reconcile conflicting results across Confluence, Drive, and Jira before committing to a reply.</span>
              </div>
            </div>
            <div className="agent-card" style={{ marginTop: "12px" }}>
              <div className="agent-header">
                <div className="agent-title-row">
                  <div className="agent-logo"><i className="ti ti-presentation-analytics"></i></div>
                  <div>
                    <div className="agent-name">NPI QBR deck agent</div>
                    <div className="agent-stack">Jira MCP · Claude Opus 4 · Google Drive MCP · Slack MCP</div>
                  </div>
                </div>
                <p className="agent-desc">A quarterly cron that pulls the roadmap and changelog from Jira, translates engineering language into customer-ready copy, and injects it into the company slide template — so reps always have an accurate, current QBR deck without chasing product or PM for content.</p>
              </div>
              <div className="agent-pipeline agent-pipeline-5">
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#E8F4FF", color: "#0062CC" }}><i className="ti ti-inbox"></i></div>
                  <div className="pipeline-label">Pull from Jira</div>
                  <div className="pipeline-detail">Queries the roadmap board for customer-visible tickets and the last-90-day changelog. Also pulls linked customer-request tickets to surface which features real accounts asked for.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "var(--amber-light)", color: "#7A4F00" }}><i className="ti ti-cpu"></i></div>
                  <div className="pipeline-label">Segment &amp; prioritize</div>
                  <div className="pipeline-detail">Claude groups raw tickets into 3–5 customer-meaningful themes. Within each theme, items rank by linked customer-request count — so the deck leads with what matters to the account, not what shipped last.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EAF3DE", color: "#27500A" }}><i className="ti ti-writing"></i></div>
                  <div className="pipeline-label">Write customer copy</div>
                  <div className="pipeline-detail">"Refactor RBAC middleware" becomes "Control exactly who sees which dashboards." 25-word cap per bullet, no jargon, tense-framed for shipped vs. coming soon vs. horizon.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#EEEDFE", color: "#3C3489" }}><i className="ti ti-layout-dashboard"></i></div>
                  <div className="pipeline-label">Build the deck</div>
                  <div className="pipeline-detail">Copy injects into the PowerPoint template from Google Drive. Title slide, one shipped slide per theme, a visual timeline, and a what's next slide — layout and branding untouched.</div>
                </div>
                <div className="pipeline-arrow"><i className="ti ti-arrow-right"></i></div>
                <div className="pipeline-step">
                  <div className="pipeline-icon" style={{ background: "#E1F5EE", color: "#085041" }}><i className="ti ti-send"></i></div>
                  <div className="pipeline-label">Publish &amp; notify</div>
                  <div className="pipeline-detail">Deck uploads to <code>/QBR Assets/Q3 2026/</code> in Drive. Agent posts a link to #customer-success in Slack. Run on a quarterly cron — the folder stays current automatically.</div>
                </div>
              </div>
              <div className="agent-model-note">
                <i className="ti ti-cpu"></i>
                <span><strong>Why Claude Opus 4:</strong> The output goes directly to customers in a QBR room, so copy quality can't be an afterthought. Opus 4 produces the tightest, most polished prose — worth the cost when every bullet has to be accurate, concise, and on-brand.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY SAMSARA */}
      <section id="why">
        <div className="container">
          <div className="eyebrow">Why Samsara</div>
          <h2>Work that matters to the world with people who care</h2>
          <p className="section-sub">Every company I've wanted to work for has had two things in common: work that matters beyond a screen, and people who make you better just by being in the room. Samsara has both.</p>

          <div className="why-grid">
            <div className="why-card">
              <i className="ti ti-heart-handshake why-icon"></i>
              <div className="why-title">People-centered</div>
              <p className="why-desc">The experience with the team so far has been genuinely exceptional — thoughtful, curious, and generous with their time. Samsara's reputation for its people in the tech industry isn't marketing. I've felt it firsthand.</p>
            </div>
            <div className="why-card">
              <i className="ti ti-world why-icon"></i>
              <div className="why-title">Work that moves the world</div>
              <p className="why-desc">Fleet operations are the invisible infrastructure of modern life. The drivers, dispatchers, and operators Samsara serves keep supply chains moving and people safe. That's a category of impact most tech companies never get close to.</p>
            </div>
            <div className="why-card">
              <i className="ti ti-users why-icon"></i>
              <div className="why-title">DEI as a real commitment</div>
              <p className="why-desc">Samsara's focus on diversity, equity, and inclusion shows up in who's in the room and who gets heard — a signal of the kind of culture where I do my best work.</p>
            </div>
            <div className="why-card">
              <i className="ti ti-hammer why-icon"></i>
              <div className="why-title">Builders who stay builders</div>
              <p className="why-desc">Sanjit and John are still in the building. That founder-led energy — the urgency, the directness, the bias toward doing over discussing — is the environment where I've always contributed the most.</p>
            </div>
          </div>

          <div className="closing-card">
            <i className="ti ti-quote" style={{ fontSize: "24px", color: "var(--amber)", flexShrink: 0, marginTop: "2px" }}></i>
            <div>
              <p className="closing-text">I'm not looking for the next job. I'm looking for the place where the work is hard, the people are exceptional, and what we build actually matters to the people using it. That's Samsara.</p>
              <div className="closing-attr">— Why I'm here</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEE MY WORK */}
      <section id="work" style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">See my work on the web</div>
          <h2>Writing, speaking &amp; thinking out loud</h2>
          <p className="section-sub">A selection of public work — articles, author profiles, and a conference talk.</p>

          <div className="work-grid">
            <a className="work-card" href="https://kimblight.substack.com" target="_blank" rel="noopener noreferrer">
              <div className="work-card-top">
                <div className="work-logo" style={{ background: "#fff3e4", color: "#e06c00" }}>
                  <i className="ti ti-pencil"></i>
                </div>
                <div>
                  <div className="work-title">Substack</div>
                  <div className="work-domain">kimblight.substack.com</div>
                </div>
              </div>
              <p className="work-desc">Writing on product operations, women in tech, career growth, and building teams that last.</p>
              <span className="work-link">Read <i className="ti ti-arrow-up-right"></i></span>
            </a>

            <a className="work-card" href="https://www.pendo.io/pendo-blog/blog-authors/kim-blight/" target="_blank" rel="noopener noreferrer">
              <div className="work-card-top">
                <div className="work-logo" style={{ background: "#e8f4ff", color: "#0062cc" }}>
                  <i className="ti ti-article"></i>
                </div>
                <div>
                  <div className="work-title">Pendo Blog</div>
                  <div className="work-domain">pendo.io</div>
                </div>
              </div>
              <p className="work-desc">Published author on the Pendo blog — product management, operations, and lessons from the field.</p>
              <span className="work-link">Read <i className="ti ti-arrow-up-right"></i></span>
            </a>

            <a className="work-card" href="https://www.youtube.com/watch?v=f7n7u6FtldQ" target="_blank" rel="noopener noreferrer">
              <div className="work-card-top">
                <div className="work-logo" style={{ background: "#fff0f0", color: "#cc0000" }}>
                  <i className="ti ti-brand-youtube"></i>
                </div>
                <div>
                  <div className="work-title">Conference Talk</div>
                  <div className="work-domain">youtube.com</div>
                </div>
              </div>
              <p className="work-desc">A conference talk on the craft of product operations — the systems, the influence, and what it actually takes to build teams that ship.</p>
              <span className="work-link">Watch <i className="ti ti-arrow-up-right"></i></span>
            </a>

            <a className="work-card work-card-wide" href="/Kim_Blight_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <div className="work-card-top">
                <div className="work-logo" style={{ background: "var(--accent-light)", color: "var(--navy-light)" }}>
                  <i className="ti ti-file-cv"></i>
                </div>
                <div>
                  <div className="work-title">Résumé</div>
                  <div className="work-domain">Kim Blight · 2026</div>
                </div>
              </div>
              <p className="work-desc">18+ years across product management, program management, and product & engineering operations.</p>
              <span className="work-link">Download PDF <i className="ti ti-arrow-up-right"></i></span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        Built for Samsara · Product Operations Interview
      </footer>
    </>
  );
}
