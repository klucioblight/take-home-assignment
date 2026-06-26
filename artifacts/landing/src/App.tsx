import { useState } from "react";

interface StoryProps {
  tag: string;
  tagClass: string;
  title: string;
  sub: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  results: { icon: string; label: string; text: string }[];
  defaultOpen?: boolean;
}

function StoryCard({ tag, tagClass, title, sub, situation, task, action, result, results, defaultOpen }: StoryProps) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`story-card ${open ? "open" : ""}`}>
      <div className="story-header" onClick={() => setOpen(!open)}>
        <div>
          <span className={`tag ${tagClass}`}>{tag}</span>
          <p className="story-title">{title}</p>
          <p className="story-sub">{sub}</p>
        </div>
        <i className="ti ti-chevron-down chevron"></i>
      </div>
      <div className="story-body">
        <div className="star-grid">
          <div className="star-item">
            <div className="star-label">Situation</div>
            <p className="star-text">{situation}</p>
          </div>
          <div className="star-item">
            <div className="star-label">Task</div>
            <p className="star-text">{task}</p>
          </div>
          <div className="star-item">
            <div className="star-label">Action</div>
            <p className="star-text">{action}</p>
          </div>
          <div className="star-item">
            <div className="star-label">Result</div>
            <p className="star-text">{result}</p>
          </div>
        </div>
        <hr className="story-divider" />
        <div className="results-row">
          {results.map((r, i) => (
            <div className="result-chip" key={i}>
              <i className={`ti ${r.icon} result-icon`}></i>
              <div>
                <div className="result-label">{r.label}</div>
                <p className="result-text">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav>
        <div className="nav-logo">Interview · <span>Samsara</span></div>
        <ul className="nav-links">
          <li><a href="#stories">Stories</a></li>
          <li><a href="#advocacy">Advocacy</a></li>
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
          <h1>Kim Blight</h1>
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

      {/* STAR STORIES */}
      <section id="stories" style={{ background: "var(--off-white)" }}>
        <div className="container">
          <div className="eyebrow">My stories · STAR format</div>
          <h2>Click each to expand</h2>
          <p className="section-sub">Short and sweet — the result and the impact, always front and center.</p>

          <StoryCard
            defaultOpen
            tag="Ownership"
            tagClass="tag-ownership"
            title="Scaling AI adoption across Cloudflare's product & engineering org"
            sub="Built from zero — agentic tools, company-wide training, and measurable time back"
            situation="Cloudflare's product and engineering teams were doing repetitive, low-leverage work manually — changelogs, PRD drafts, customer meeting prep, bug filing — with no consistent AI tooling in place to address it."
            task="My role was Product Operations, but I saw the opportunity to drive company-wide leverage. I took ownership of building and rolling out our entire internal AI capability — beyond what was asked of me."
            action="Started with Gemini Gems to automate core P&E workflows: changelog review, PRD creation, customer feedback loops, bug intake, and NPI materials. As tooling matured, I introduced Windsurf and Opencode for builders, then led company-wide training to equip every team member with the skills to automate their repeatable work."
            result="Measurable time savings across support, communications, and product operations — with faster resolution cycles and a new capability baseline across the entire org."
            results={[
              { icon: "ti-clock", label: "Support tickets", text: "40% faster time to resolution — 2 weeks down to 5 working days by automating intake and assignment of escalated tickets" },
              { icon: "ti-file-text", label: "Blog review", text: "Removed an entire step from the comms process by automating style and tone review before editor handoff" },
              { icon: "ti-code", label: "PRD generation", text: "Built an Opencode skill that auto-generates a first-pass PRD with customer notes, data, and wiki context already embedded" },
              { icon: "ti-calendar", label: "~20 hrs/month saved", text: "Across triage, meeting prep, and NPI materials for GTM teams via skill files that standardize format and tone automatically" },
            ]}
          />

          <StoryCard
            tag="Complexity"
            tagClass="tag-complexity"
            title="Steering a cross-org FedRAMP High certification decision"
            sub="6+ months of effort, VP-level disagreement, and a new vertical on the line"
            situation="Cloudflare was considering FedRAMP High certification — a 6+ month, all-hands effort touching every product and engineering team. The project had strong opinions on all sides: legacy vs. new codebases, competing customer segment priorities, and real debate about whether the government vertical was worth the disruption to global roadmaps."
            task="I was brought in to facilitate the product workstream. But as the complexity became clear, I expanded my role to become the central coordinator driving the entire cross-functional decision — VPs across product, engineering, design, marketing, and legal."
            action="I convened all stakeholders and structured the decision around data: financial analysis of the government sector vs. other verticals, effort estimates by team, and a clear cost-of-waiting model. I presented back a recommendation with confidence — framing the tradeoffs clearly enough for executives to make a call. The path chosen was a tiger team model: focused squads on certification work rather than taxing full teams, which accelerated time to market."
            result="Certification delivered on time and on budget. Cloudflare broke into a new customer vertical, and the tiger team structure became the model for how we'd tackle future cross-functional bets."
            results={[
              { icon: "ti-users", label: "Stakeholders aligned", text: "VPs across 5 functions — product, engineering, design, marketing, and legal — brought to a single decision with clear tradeoffs" },
              { icon: "ti-building", label: "New vertical unlocked", text: "Certification completed on time and on budget, opening the government sector as a net-new customer segment" },
            ]}
          />

          <StoryCard
            tag="Impact"
            tagClass="tag-impact"
            title="Cutting the product development lifecycle from 10 steps to 3"
            sub="Months to weeks — by building a minimal viable process for all of EPD"
            situation="When I joined, the product development lifecycle had 10 sequential steps — discovery, planning, roadmap commitment, PRD, design brief, engineering plan, beta, feedback, testing, ship. Complexity and effort were unknown until after commitment, which created bottlenecks, rework, and slow time to customer value."
            task="My first mandate as head of Product Operations was to review the process. I approached it the same way I'd approach a product: find the MVP — in this case, the minimal viable process."
            action="Audited every step for real value vs. paper-trailing overhead. Eliminated steps that added friction without adding signal. Rebuilt the lifecycle around three phases: iterate, implement, ship — with engineering, product, and design having shared ownership of the roadmap from the start."
            result="Features that previously took months now shipped in weeks. EPD alignment improved because all three functions had a stake in decisions earlier, and customer voice was embedded directly into plans rather than arriving as late feedback."
            results={[
              { icon: "ti-scissors", label: "10 steps → 3", text: "Eliminated 7 sequential handoff steps and the paper-trailing overhead that slowed every feature from commit to ship" },
              { icon: "ti-rocket", label: "Months → weeks", text: "Faster time to value for customers through rapid prototyping, quicker feedback loops, and stronger VoC data in plans" },
              { icon: "ti-chart-bar", label: "EPD alignment", text: "Engineering, product, and design gained shared roadmap ownership — reducing rework and late-stage surprises" },
              { icon: "ti-user-check", label: "Rapid prototyping as the norm", text: "Shifted the team's default from sequential documentation to iterative building with customer feedback baked in" },
            ]}
          />
        </div>
      </section>

      {/* CUSTOMER ADVOCACY */}
      <section id="advocacy" style={{ background: "#fff" }}>
        <div className="container">
          <div className="eyebrow">Customer advocacy</div>
          <h2>Bridging product &amp; engineering to close enterprise deals</h2>
          <p className="section-sub">I built and led a Customer Advocate Program that put the right technical partner in the room at the right moment in the sales cycle — turning P&amp;E expertise into a direct revenue lever for the GTM org.</p>

          <div className="metrics-row">
            <div className="metric-card">
              <div className="metric-val">~$20M <span>ACV</span></div>
              <div className="metric-label">Generated for the business through the program to date</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">Enterprise <span>↑</span></div>
              <div className="metric-label">Deals closing within-quarter after the right technical advocate was engaged</div>
            </div>
            <div className="metric-card">
              <div className="metric-val">P&amp;E + GTM</div>
              <div className="metric-label">Product Ops as the connective layer between two orgs that rarely spoke</div>
            </div>
          </div>

          <div className="inner-card">
            <div className="inner-title">How it worked</div>
            <div className="how-grid">
              <div className="how-item">
                <i className="ti ti-users-group how-icon"></i>
                <h3>Identify the right advocate</h3>
                <p className="how-desc">Matched VP-level product and engineering leaders to enterprise deals based on domain expertise and relationship fit</p>
              </div>
              <div className="how-item">
                <i className="ti ti-handshake how-icon"></i>
                <h3>Engage at the right moment</h3>
                <p className="how-desc">Product Ops coordinated with GTM to bring technical credibility into deals when trust was the blocker to close</p>
              </div>
              <div className="how-item">
                <i className="ti ti-repeat how-icon"></i>
                <h3>Systematize the motion</h3>
                <p className="how-desc">Built the program infrastructure so it scaled beyond individual relationships — a repeatable playbook, not a one-off favor</p>
              </div>
            </div>
            <div className="acv-bar">
              <i className="ti ti-trending-up" style={{ fontSize: "22px", color: "#D4860A", flexShrink: 0 }}></i>
              <div>
                <div className="acv-bar-text">~$20M in additional ACV generated</div>
                <div className="acv-bar-sub">Enterprise deals closing within-quarter after technical advocate engagement — a direct revenue contribution from Product Operations</div>
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
                <div><div className="tool-name">Gemini</div><div className="tool-maker">Google</div></div>
              </div>
              <p className="tool-use">Built the first internal Gems for P&E — automating changelogs, PRD drafts, meeting prep, and customer feedback intake. The foundation of our AI workflow stack.</p>
              <div className="tool-tags">
                <span className="tool-tag">Workflow automation</span>
                <span className="tool-tag">Gems / agents</span>
                <span className="tool-tag">P&amp;E ops</span>
              </div>
            </div>
            <div className="tool-card">
              <div className="tool-top">
                <div className="tool-logo logo-cursor"><i className="ti ti-terminal-2"></i></div>
                <div><div className="tool-name">Cursor</div><div className="tool-maker">Anysphere</div></div>
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
                <div><div className="tool-name">Opencode</div><div className="tool-maker">Charm</div></div>
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
                <div><div className="tool-name">Windsurf</div><div className="tool-maker">Codeium</div></div>
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
                <div><div className="tool-name">Anthropic / Claude</div><div className="tool-maker">Anthropic</div></div>
              </div>
              <p className="tool-use">Used for reasoning-heavy work — complex document synthesis, cross-functional alignment prep, and internal tools that needed nuanced judgment, not just speed.</p>
              <div className="tool-tags">
                <span className="tool-tag">Reasoning &amp; synthesis</span>
                <span className="tool-tag">Internal tooling</span>
                <span className="tool-tag">Strategy</span>
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
              <p className="work-desc">Watch a recorded talk — speaking on stage to audiences ranging from hundreds to thousands.</p>
              <span className="work-link">Watch <i className="ti ti-arrow-up-right"></i></span>
            </a>

            <a className="work-card" href="/Kim_Blight_Resume.pdf" target="_blank" rel="noopener noreferrer">
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
