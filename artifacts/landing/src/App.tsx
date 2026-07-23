export default function App() {
  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="#stories">Case Studies</a></li>
          <li><a href="#ai">AI Tools</a></li>
          <li><a href="#themes">Themes</a></li>
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
          <p className="hero-tagline">I build lightweight frameworks that let fast-moving teams move even faster — without the overhead that slows them down. I use AI tooling to unlock what humans can't do alone, and I bring alignment to rooms full of opinionated builders.</p>
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

      {/* PORTFOLIO TABLE */}
      <section id="stories" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="eyebrow">My work · In detail</div>
          <h2>Case studies</h2>
          <p className="section-sub">Three examples of exactly how I operate — the problem I walked into, what I built or changed, and what happened as a result.</p>

          <div className="portfolio-table">
            <div className="pt-header">
              <div className="pt-cell pt-col-problem">Problem</div>
              <div className="pt-cell pt-col-action">Exactly what I did</div>
              <div className="pt-cell pt-col-outcome">Outcome</div>
            </div>

            <div className="pt-row">
              <div className="pt-cell pt-col-problem">
                <span className="pt-tag pt-tag-ownership">Ownership</span>
                <p className="pt-problem-title">No AI tooling across the org</p>
                <p className="pt-problem-desc">Product, Engineering, and GTM were doing changelogs, PRD drafts, meeting prep, and bug filing manually — with no consistent tooling or training in place.</p>
              </div>
              <div className="pt-cell pt-col-action">
                <ul className="pt-action-list">
                  <li>Built Gemini Gems for core Product and Engineering workflows: changelogs, PRD drafts, customer feedback loops, and NPI materials</li>
                  <li>Introduced Windsurf and Opencode for engineering teams; wrote skill files that standardized format and tone automatically</li>
                  <li>Led company-wide AI training — every team member equipped to automate their own repeatable work</li>
                </ul>
              </div>
              <div className="pt-cell pt-col-outcome">
                <div className="pt-outcome-stat">40% faster</div>
                <div className="pt-outcome-label">support ticket resolution (2 weeks → 5 days)</div>
                <div className="pt-outcome-stat" style={{ marginTop: "0.75rem" }}>~20 hrs/month</div>
                <div className="pt-outcome-label">reclaimed across triage, meeting prep, and NPI</div>
                <div className="pt-outcome-note">Removed an entire editorial review step from the comms process</div>
              </div>
            </div>

            <div className="pt-row">
              <div className="pt-cell pt-col-problem">
                <span className="pt-tag pt-tag-complexity">Complexity</span>
                <p className="pt-problem-title">FedRAMP High decision stalled across 5 functions</p>
                <p className="pt-problem-desc">A 6+ month all-hands effort with VP-level disagreement on all sides — legacy vs. new codebases, competing priorities, no clear path to a decision.</p>
              </div>
              <div className="pt-cell pt-col-action">
                <ul className="pt-action-list">
                  <li>Expanded from product workstream facilitator to central cross-functional decision owner across product, engineering, design, marketing, and legal</li>
                  <li>Built the decision framework: financial analysis of gov sector vs. other verticals, effort estimates by team, cost-of-waiting model</li>
                  <li>Presented a recommendation to executives; proposed and got buy-in on a tiger team model to accelerate time to market</li>
                </ul>
              </div>
              <div className="pt-cell pt-col-outcome">
                <div className="pt-outcome-stat">On time &amp; on budget</div>
                <div className="pt-outcome-label">certification delivered, new government vertical unlocked</div>
                <div className="pt-outcome-note" style={{ marginTop: "0.75rem" }}>Tiger team structure adopted as the company model for future cross-functional bets</div>
              </div>
            </div>

            <div className="pt-row">
              <div className="pt-cell pt-col-problem">
                <span className="pt-tag pt-tag-impact">Impact</span>
                <p className="pt-problem-title">10-step dev lifecycle causing bottlenecks</p>
                <p className="pt-problem-desc">Sequential handoffs meant complexity and effort were unknown until after commitment — creating rework, missed deadlines, and slow time to customer value.</p>
              </div>
              <div className="pt-cell pt-col-action">
                <ul className="pt-action-list">
                  <li>Audited every step for real signal vs. paper-trailing overhead; eliminated 7 of 10 steps</li>
                  <li>Rebuilt the lifecycle into 3 phases — iterate, implement, ship — with engineering, product, and design sharing roadmap ownership from day one</li>
                  <li>Embedded customer voice directly into plans rather than arriving as late-stage feedback</li>
                </ul>
              </div>
              <div className="pt-cell pt-col-outcome">
                <div className="pt-outcome-stat">10 steps → 3</div>
                <div className="pt-outcome-label">months-long features now shipping in weeks</div>
                <div className="pt-outcome-note" style={{ marginTop: "0.75rem" }}>Rapid prototyping became the team default; late-stage rework and surprises dropped</div>
              </div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">
                <span className="pt-tag pt-tag-impact">Impact</span>
                <p className="pt-problem-title">GTM kept getting blindsided by product updates</p>
                <p className="pt-problem-desc">New features were shipping without GTM having enough notice — causing customer friction, internal tension, and a breakdown of trust between Product and GTM teams.</p>
              </div>
              <div className="pt-cell pt-col-action">
                <ul className="pt-action-list">
                  <li>Launched a bi-weekly email to GTM leaders with known upcoming launches — sourced entirely from data Product and Engineering already used, adding zero new process for them</li>
                  <li>Built an external-facing changelog updated by Product Ops at ship time, so teams saw updates in real time alongside customers</li>
                  <li>Created a Jira dashboard surfacing tickets with a target completion date within the next two weeks — a always-on "preview" of what's coming</li>
                  <li>Introduced an AI agent that let teams search upcoming customer-facing items expected to ship in ~2 weeks, so they could prepare proactively</li>
                  <li>Added a 3-month post-launch support ticket review per feature — Product Ops helped respond and fed insights directly into Help Center documentation</li>
                </ul>
              </div>
              <div className="pt-cell pt-col-outcome">
                <div className="pt-outcome-stat">80% fewer</div>
                <div className="pt-outcome-label">launch surprises for GTM teams</div>
                <div className="pt-outcome-note" style={{ marginTop: "0.75rem" }}>The remaining 20% — fast-moving innovations — now reach GTM at the same time as customers. Chipping away at that daily.</div>
              </div>
            </div>
            <div className="pt-row">
              <div className="pt-cell pt-col-problem">
                <span className="pt-tag pt-tag-ownership">Ownership</span>
                <p className="pt-problem-title">Product and Engineering expertise wasn't reaching enterprise deals</p>
                <p className="pt-problem-desc">GTM was losing or stalling enterprise deals where technical credibility was the missing ingredient — and Product and Engineering had no structured way to show up in the sales cycle.</p>
              </div>
              <div className="pt-cell pt-col-action">
                <ul className="pt-action-list">
                  <li>Built and led a Customer Advocate Program from scratch — matching VP-level product and engineering leaders to enterprise deals based on domain expertise and relationship fit</li>
                  <li>Coordinated with GTM to bring technical advocates into deals at the exact moment trust was the blocker to close</li>
                  <li>Built the program infrastructure as a repeatable playbook — systematized so it scaled beyond individual relationships and one-off favors</li>
                  <li>Acted as the connective layer between Product and Engineering and GTM, two orgs that rarely proactively spoke before this program</li>
                </ul>
              </div>
              <div className="pt-cell pt-col-outcome">
                <div className="pt-outcome-stat">~$20M ACV</div>
                <div className="pt-outcome-label">generated for the business through the program to date</div>
                <div className="pt-outcome-note" style={{ marginTop: "0.75rem" }}>Enterprise deals closing within-quarter after technical advocate engagement — a direct revenue contribution from Product Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI TOOLS */}
      <section id="ai" style={{ background: "var(--off-white)" }}>
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

          <div className="philosophy-card">
            <i className="ti ti-scale phil-icon"></i>
            <div>
              <div className="phil-label">My AI philosophy</div>
              <p className="phil-text">The key to implementing AI at a company is knowing when to use the right tool for the right purpose — while ensuring it's the most cost-efficient choice for the business.</p>
              <p className="phil-sub">Not every problem needs the most powerful model. Part of the work is matching capability to need: using a lighter, faster tool where that's sufficient, and reserving heavier infrastructure for where it actually moves the needle. Responsible AI adoption is as much about restraint as it is about reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL THEMES */}
      <section id="themes" style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">What I heard</div>
          <h2>Themes I heard in my panel discussions</h2>
          <p className="section-sub">Across every conversation, a few consistent themes emerged — shared thoughtfully by people who care deeply about doing great work together.</p>

          <div className="why-grid" style={{ marginBottom: "1.5rem" }}>
            <div className="pillar-card">
              <i className="ti ti-database-search pillar-icon"></i>
              <h3>Scattered data systems</h3>
              <p className="pillar-desc">There's a real opportunity to make data more discoverable — so teams spend less time hunting for answers and more time acting on them.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-git-compare pillar-icon"></i>
              <h3>Multiple sources of truth</h3>
              <p className="pillar-desc">Different teams naturally gravitate toward different tools — and there's real upside in bringing those workflows closer together to create a more consistent, scalable NPI experience.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-help-circle pillar-icon"></i>
              <h3>Underused product operations</h3>
              <p className="pillar-desc">There's a big opportunity to make product operations more visible and accessible — so PMs know exactly when and how to pull the function in to unblock their work.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-clock-hour-4 pillar-icon"></i>
              <h3>VPs buried in admin work</h3>
              <p className="pillar-desc">VPs of Product have enormous strategic capacity — and there's meaningful room to reclaim more of it by lifting the administrative weight off their plates.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-users-group pillar-icon"></i>
              <h3>No room to deliberate</h3>
              <p className="pillar-desc">There's appetite to create better forums where the right people can come together, think through hard problems, and move forward with shared confidence.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-copy pillar-icon"></i>
              <h3>Teams building in silos</h3>
              <p className="pillar-desc">There's an exciting opportunity to build more cross-product visibility — so teams can spot where they're moving in the same direction and accelerate together instead of in parallel.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-heart-handshake pillar-icon"></i>
              <h3>Good people, missing a bridge</h3>
              <p className="pillar-desc">Genuinely great people who care deeply about doing right by each other — they'd benefit from a stronger bridge to communicate that intent clearly across teams.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-robot pillar-icon"></i>
              <h3>Unclear AI tool strategy</h3>
              <p className="pillar-desc">There's a real appetite for AI — and a clear opportunity to help teams identify the right tools and put them to work in ways that actually speed up development.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-eye pillar-icon"></i>
              <h3>Blind spots in launch visibility</h3>
              <p className="pillar-desc">There's a great opportunity to give internal teams better visibility into what's on the horizon — especially the Tier 3 launches that may be smaller in scope but carry real weight for customers.</p>
            </div>
            <div className="pillar-card">
              <i className="ti ti-speakerphone pillar-icon"></i>
              <h3>An untapped PMM partnership</h3>
              <p className="pillar-desc">The relationship between product operations and PMM is one of the highest-leverage cross-functional partnerships — and there's a real opportunity to build it intentionally.</p>
            </div>
          </div>

          <div className="philosophy-card">
            <i className="ti ti-bulb phil-icon"></i>
            <div>
              <div className="phil-label">Why this matters to me</div>
              <p className="phil-text">Every one of these is an opportunity a Product Operations leader is built to address.</p>
              <p className="phil-sub">Better data discovery, more consistent tooling, a more visible ops function, freed-up VP bandwidth, stronger forums for deliberation, cross-product connection — these are exactly the conditions a great Product Ops leader helps create. The job is to build the systems, bridges, and forums that make it easier for great people to do their best work — and ship faster as a result.</p>
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
              <p className="work-desc">I love talking about the craft of product operations and presenting is one of my favorite parts of my career.</p>
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
