import { createFileRoute, Link } from "@tanstack/react-router";
import logoIcon from "@/assets/pi-logo-Hd-crop.jpg";
import {
  ArrowRight, Search, Settings, Package, ShieldCheck, Database,
  Layers, Linkedin, Phone, Clock, Building2, Calendar, Mail, FileText, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/casestudies/enterprise-IT-ticketing-dona-ana-county")({
  component: EnterpriseITTicketing,
  head: () => ({
    meta: [
      { title: "Case Study: Enterprise IT Ticketing — PIScaleX | U.S. SLED Government Contracting" },
      { name: "description", content: "Pre-bid intelligence package for Las Cruces Public Schools — consolidating 8 enterprise systems into a FERPA-compliant, multi-site ticketing, asset & cost tracking." },
      { property: "og:title", content: "Case Studies — PIScaleX | Enterprise IT Ticketing" },
      { property: "og:description", content: "LCPS RFP 25-26-08P pre-bid intelligence: architecture, compliance, and competitive pricing for prime contractors." },
      { property: "og:url", content: "/enterprise-IT-ticketing-dona-ana-county" },
    ],
    links: [{ rel: "canonical", href: "/casestudies/enterprise-IT-ticketing-dona-ana-county" }],
  }),
});

const LCPSNM_LOGO = "https://assets.piscalex.us/sled/LasCPS_NewMexico_Logo.png";

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="PIScaleX" className="h-10 w-50" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/rfp-services" className="hover:text-foreground transition">Services</Link>
          <Link to="/" hash="why" className="hover:text-foreground transition">Why Us</Link>
          <Link to="/capability" className="hover:text-foreground transition">Capability</Link>
          <Link to="/case-studies" className="text-foreground font-medium">Case Studies</Link>
          <Link to="/" hash="partner" className="hover:text-foreground transition">Partner</Link>
        </nav>
        <span>📞 +1 (703) 666-7959</span>
        <Link to="/" hash="partner" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition">
          Partner With Us <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-4">
        <span className="h-1 w-6 bg-primary rounded-full" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">{sub}</p>}
    </div>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1628]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.08]" />
        <div className="absolute top-1/4 left-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Pre-Bid Intelligence
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] text-gradient">
            Enterprise IT Ticketing,
            <br />
            Asset Management & Cost Ticketing System
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Cloud-native ITSM replacement for New Mexico's second-largest school district - delivering native reporting, multi-campus asset visibility, and federal-fund cost allocation across 40 campuses.
          </p>
        </div>

        {/* Meta row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass rounded-xl p-5">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">Awarding Body</div>
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 flex items-center justify-center h-10 w-10 flex-shrink-0">
                <img src={LCPSNM_LOGO} alt="Las Cruces Public Schools" className="h-full w-full object-contain" />
              </div>
              <div className="text-xs leading-snug">
                <div className="font-semibold text-foreground">Las Cruces Public Schools</div>
                <div className="text-muted-foreground">Dona Ana County, NM</div>
              </div>
            </div>
          </div>
          {[
            { label: "Solicitation", value: "RFP 26-003" },
            { label: "Contract Value", value: "$100,000 – $250,000" },
            { label: "Service", value: "Pre-Bid Intelligence / Post Bid Support", sub: "Under NDA" },
          ].map((m) => (
            <div key={m.label} className="glass rounded-xl p-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">{m.label}</div>
              <div className="font-display text-xl font-semibold text-foreground leading-tight">{m.value}</div>
              {m.sub && <div className="text-xs text-muted-foreground mt-1">{m.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROJECT OVERVIEW ─────────────── */
function Overview() {
  const stats = [
    { n: "5", label: "Systems to Integrate", desc: "Microsoft Azure Active Directory, Rapid Identity, Edupoint Synergy SIS, Tyler School ERP Pro, SchoolDude (legacy data migration source)" },
    { n: "100", label: "Evaluation Points", desc: "Functionality 20 · Cost 30 · Multi Site Support 20 · Integration 10 · Reporting/Analytics 10 · Training/Support 10" },
    { n: "45", label: "Facilities", desc: "Serving ~22,500 students, 3,200 employees and 40 school campuses, 25,000–35,000 assets under management" },
    { n: "5", label: "Compliance", desc: "FERPA, WCAG 2.1 AA, New Mexico Data Privacy, Encryption in transit (TLS 1.2+) and at rest (AES-256), US-based resources only" },
  ];
  const objectives = [
    ["Single Source of Truth", "Integrate 5+ systems into one unified platform via real-time API synchronization"],
    ["Reporting and Analytics", "Real-time and historical dashboards. Customizable reports on tickets volumes, SLA compliance, workload distributions, etc."],
    ["Multi-Site and Multi-Department Support", "Support for multiple departments with ability to separate or share queues, workflows, and data as needed."],
    ["Transparency & Accessibility", "Role-based access with WCAG 2.1 AA compliance and SSO"],
    ["Asset Management", "Track 25,000 to 35,000 endpoints from acquisition through disposal."],
    ["Implementation, Training, and Support", "Data migration from SchoolDude, project management and implementation planning"],
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="At a Glance"
          title="Project Overview"
          sub="Las Cruces Public Schools required a unified ITSM platform to replace SchoolDude and eliminate Power BI reporting workarounds. PIScaleX delivered a comprehensive pre-bid intelligence package enabling prime contractors to bid with precision and win with confidence."
        />

        {/* Awarding body card */}
        <div className="mt-12 glass rounded-2xl p-7 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-white rounded-xl p-3 flex items-center justify-center h-24 w-24 flex-shrink-0">
            <img src={LCPSNM_LOGO} alt="Las Cruces Public Schools" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-1">Awarding Body</div>
            <div className="font-display text-2xl font-semibold text-foreground">Las Cruces Public Schools</div>
            <div className="mt-1 text-sm text-muted-foreground">Dona Ana County, New Mexico · ~22,500 Students · 40 School Campuses</div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6">
              <div className="font-display text-4xl font-semibold text-gradient">{s.n}</div>
              <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {objectives.map(([title, body]) => (
            <div key={title} className="glass rounded-xl p-5 flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground text-sm">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PRE-BID SERVICES ─────────────── */
function PreBidServices() {
  const cards = [
    {
      icon: Search,
      title: "The Challenge",
      body: "LCPS's legacy SchoolDude platform could not generate native reports, forcing district staff to route data through Power BI as a workaround.",
      subTitle: "What We Uncovered",
      bullets: [
        "Asset and cost tracking were fragmented across multiple systems and spreadsheets",
        "audit exposure for federal funding (Title I, E-Rate, grants) across 40 campuses.",
      ],
    },
    {
      icon: Settings,
      title: "The Approach",
      body: "We structured the proposal around LCPS's stated pain points rather than generic platform marketing — all shared under strict NDA to protect competitive positioning.",
      subTitle: "What We Delivered",
      bullets: [
        "Reporting-first positioning",
        "Described district-level, zone-level, and campus-level organizational configuration for all 40 sites, not generic multi-tenancy",
        "Detailed SAML 2.0 federation, group-based role mapping",
      ],
    },
    {
      icon: Package,
      title: "The Outcome",
      body: "A structured pre-bid package ready for prime contractor integration into their final proposal — technical architecture, compliance framework, and competitive pricing intelligence included.",
      subTitle: "Pre-Bid Package Delivered",
      bullets: [
        "Solution architecture & integration map",
        "Compliance audit & security framework",
        "Pricing posture & competitive benchmark",
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Pre-Bid Services"
          title="How We Enable Prime Contractors to Win"
          sub="PIScaleX functioned as the technology and proposal engine behind the US Prime, translating complex SLED requirements into a winning, compliant submission."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:bg-white/[0.05] transition">
              <div className="h-11 w-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.body}</p>
              <div className="mt-5 rounded-xl border border-border/60 bg-white/[0.02] p-4">
                <div className="text-[11px] uppercase tracking-[0.14em] text-primary/90 mb-2">{c.subTitle}</div>
                <ul className="space-y-1.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── STATEMENT OF WORK ─────────────── */
function StatementOfWork() {
  const items = [
    ["Ticketing & Service Request Management", "Centralized management of incidents, service requests, problems, and changes across IT, Finance, HR, Facilities, and Transportation."],
    ["Multi-Site & Multi-Department Support", "Site-specific queues, workflows, and data separation with district-wide visibility."],
    ["Reporting & Analytics", "Native configurable dashboards with KPIs (open ticket counts, resolution times, asset condition, cost summaries)."],
    ["Asset Management", "Lifecycle tracking for 25,000 - 35,000 endpoints from acquisition through disposal."],
    ["Cost Tracking & Financial Transparency", "Labor, parts, and service cost association with tickets and assets."],
    ["SSO, Security & Compliance", "Azure AD SSO via SAML 2.0, OAuth 2.0, or OpenID Connect with role-based and group-based access."],
  ];
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Scope"
          title="Statement of Work"
          sub="Technical deliverables engineered to position prime contractors for competitive advantage across all 100 evaluation points."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {items.map(([t, d]) => (
            <div key={t} className="glass rounded-xl p-5 flex gap-3">
              <Database className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-foreground text-sm">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FIVE-PHASE METHODOLOGY ─────────────── */
function Methodology() {
  const phases = [
    ["Procurement Office Intelligence", "Solicitation timeline analysis, contact mapping, addendum tracking, and competitive landscape assessment."],
    ["Clause-by-Clause Structural Analysis", "Deep parsing of RFP terms, mandatory vs. discretionary requirements, and risk-flagged contractual language."],
    ["Solution & Capability Architecture", "Technical approach design, teaming structure recommendations, and differentiation strategy against evaluation criteria."],
    ["Competitive Pricing Intelligence", "Market rate benchmarking, cost-model optimization, and value-engineering for Cost & Value scoring."],
    ["Submission Engineering", "Proposal formatting compliance, narrative alignment to scoring rubric, and demonstration preparation for live Q&A."],
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Process"
          title="Five-Phase Delivery Methodology"
          sub="Structured intelligence workflow designed to accelerate proposal development and de-risk submission."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {phases.map(([title, body], i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-6 flex gap-5 items-start ${i === 4 ? "md:col-span-2" : ""}`}
            >
              <div className="h-11 w-11 rounded-[10px] bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                <span className="font-display font-extrabold text-primary-foreground text-lg">{i + 1}</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-[1.05rem] text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gradient leading-tight">
          Ready to Win Your Next SLED Bid?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          PIScaleX provides software consultancy, staff augmentation, and end-to-end technology delivery and support for U.S. SLED engagements.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
            <Calendar className="h-4 w-4" /> Book a Strategy Call
          </a>
          <a href="https://piscalex.us/capability" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:border-accent transition border border-border/60">
            <FileText className="h-4 w-4" /> View Capability Statement
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 pt-20 pb-10 bg-gradient-to-b from-transparent to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-sm">PI</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold">PIScaleX</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  US SLED Partner
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              U.S. State, Local & Education government IT consulting subcontractor. Trusted by prime
              contractors and state agencies for digital transformation.
            </p>

            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Phone
                  </div>
                  <div className="text-sm font-medium">+1 (703) 666-7959</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Email
                  </div>
                  <div className="text-sm font-medium">info@piscalex.us</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    Business Hours
                  </div>
                  <div className="text-sm font-medium">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM ET
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["SAM.gov", "WCAG 2.2", "CMMC L1", "NIST 800-53"].map((b) => (
                <span
                  key={b}
                  className="text-[10px] px-2.5 py-1 rounded-md border border-border text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Codes
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">NAICS</span> 541511, 541512
              </li>
              <li>
                <span className="text-muted-foreground">NIGP</span> 920-40 Software
              </li>
              <li>
                <span className="text-muted-foreground">NIGP</span> ️920-45 Maintenance
              </li>
              <li>
                <span className="text-muted-foreground">NIGP</span> 918-00 Technology
              </li>
              <li>
                <span className="text-muted-foreground">SAM.gov UEI</span> Registration In Progress
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Contact
            </div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50"
              />
              <input
                type="email"
                placeholder="Agency / Organization Email"
                className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50"
              />
              <textarea
                placeholder="How can we partner?"
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50 resize-none"
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> Send
                </button>
                <a
                  href="https://www.linkedin.com/company/piscalex"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border hover:border-primary/40 transition"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} PIScaleX. All rights reserved.</div>
          <div>Trusted U.S. SLED Technology Partner</div>
        </div>
      </div>
    </footer>
  );
}


function EnterpriseITTicketing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <PreBidServices />
        <StatementOfWork />
        <Methodology />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}