import { createFileRoute, Link } from "@tanstack/react-router";
import logoIcon from "@/assets/pi-logo-Hd-crop.jpg";
import {
  ArrowRight, Shield, Lock, CheckCircle2, Building2, Cpu, Cloud, BarChart3,
  Smartphone, Brain, Database, Users, FileCheck2, Layers, Linkedin, Mail, Download, Phone, Clock,
  Calendar, Target, TrendingUp, Briefcase, Award, Globe2, FileText, ShieldCheck,
  Sparkles, ScrollText, Lightbulb, Handshake, Search, GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/capability")({
  component: CapabilityPage,
  head: () => ({
    meta: [
      { title: "Capability Statement — PIScaleX | U.S. SLED Government Contracting" },
      { name: "description", content: "PIScaleX capability statement for U.S. SLED government contracting. Bid intelligence, proposal support, procurement strategy, AI, cloud and data modernization for prime contractors and public sector buyers." },
      { property: "og:title", content: "PIScaleX Capability Statement — U.S. SLED Government" },
      { property: "og:description", content: "Procurement intelligence, proposal support, and technology delivery for the U.S. SLED ecosystem." },
      { property: "og:url", content: "/capability" },
    ],
    links: [{ rel: "canonical", href: "/capability" }],
  }),
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <img src={logoIcon} alt="PIScaleX" className="h-10 w-50" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/rfp-services" className="text-foreground font-medium">RFP Services</Link>
          <Link to="/" hash="why" className="hover:text-foreground transition">Why Us</Link>
          <Link to="/capability" className="text-foreground font-medium">Capability</Link>
          <Link to="/case-studies" className="hover:text-foreground transition">Case Studies</Link>
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

function CtaInline({ label, href = "#contact", icon: Icon = ArrowRight }: { label: string; href?: string; icon?: any }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition">
      {label}
      <Icon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
    </a>
  );
}

/* ──────────────────────── HERO ──────────────────────── */
function Hero() {
  const metrics = [
    { value: "10+", label: "Years Operational Experience" },
    { value: "100%", label: "Dedicated Delivery Teams" },
    { value: "Global", label: "Offshore Delivery Expertise" },
    { value: "Enterprise", label: "Client Success" },
  ];
  return (
    <section className="relative min-h-[88vh] flex items-center pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1628]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.08]" />
        <div className="absolute top-1/4 left-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Capability Statement · U.S. SLED
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] text-gradient">
            Navigate U.S. SLED Government Contracting with Confidence
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Supporting technology companies, founders, and IT service providers in understanding,
            navigating, and pursuing opportunities within the U.S. State, Local, and Education (SLED)
            government contracting ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
              <Calendar className="h-4 w-4" /> Schedule a Strategy Call
            </a>
            <a href="#download" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
              <Download className="h-4 w-4" /> Download Capability Statement
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-4">
                <div className="font-display text-2xl font-semibold text-foreground">{m.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mock card */}
        <div className="lg:col-span-5 animate-fade-up">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 via-accent/10 to-transparent blur-2xl rounded-[28px]" />
            <div className="relative glass rounded-[24px] p-6 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-[0.05]" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Procurement Intelligence</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">LIVE</span>
                </div>
                <div className="space-y-3">
                  {[
                    { l: "Active Bids Tracked", v: "240+", i: Search },
                    { l: "SLED Agencies Covered", v: "1,200", i: Building2 },
                    { l: "NIGP / NAICS Codes Mapped", v: "32", i: FileCheck2 },
                    { l: "Avg. Decode → Submission", v: "72 hrs", i: TrendingUp },
                  ].map((row) => (
                    <div key={row.l} className="flex items-center justify-between bg-white/[0.03] border border-border/60 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <row.i className="h-4 w-4 text-primary" />
                        <span className="text-sm text-foreground/90">{row.l}</span>
                      </div>
                      <span className="font-display font-semibold text-foreground">{row.v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {["NIST", "FERPA", "HIPAA"].map((t) => (
                    <div key={t} className="text-center text-[10px] uppercase tracking-wider text-muted-foreground bg-white/[0.03] border border-border/60 rounded-md py-1.5">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHY PISCALEX ─────────────────── */
function WhyPIScaleX() {
  const cards = [
    { icon: Award, t: "10+ Years Experience", d: "A decade of enterprise and public sector delivery across complex programs." },
    { icon: Users, t: "Dedicated Delivery Teams", d: "Senior, full-time pods aligned to your capture, proposal, and delivery lifecycle." },
    { icon: Globe2, t: "Global Delivery Centers", d: "Cross-shore execution with onshore client engagement and offshore scale." },
    { icon: Cpu, t: "Offshore Execution Expertise", d: "Mature playbooks for distributed engineering, QA, and analytics teams." },
    { icon: Handshake, t: "Enterprise Client Engagement", d: "Executive-level partnerships and structured stakeholder management." },
    { icon: ShieldCheck, t: "Government Contracting Readiness", d: "Compliance, security, and accessibility posture aligned to SLED buyers." },
  ];
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why PIScaleX"
          title="Trusted partner for public sector growth"
          sub="Our work focuses on helping organizations strengthen their public sector readiness through proposal strategy, procurement support, business analysis, and market positioning."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/[0.05] transition">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-display font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <CtaInline label="Talk to Our Team" />
      </div>
    </section>
  );
}

/* ───────────── GOV CONTRACTING ADVISORY ───────────── */
function Advisory() {
  const items = [
    { icon: Target, t: "Bid Readiness", d: "RFx response posture, capture artifacts, and submission engineering." },
    { icon: Handshake, t: "Partnership Development", d: "Prime / sub teaming, OEM alignment, and channel relationships." },
    { icon: Briefcase, t: "Procurement Strategy", d: "Vehicle alignment, NAICS/NIGP mapping, and pursuit prioritization." },
    { icon: Search, t: "Opportunity Qualification", d: "Pwin scoring, evaluation framework analysis, and bid/no-bid clarity." },
    { icon: TrendingUp, t: "Market Positioning", d: "Differentiation narratives for SLED buyers and proposal evaluators." },
    { icon: Lightbulb, t: "Long-Term Public Sector Growth", d: "Roadmaps for sustained pipeline and recompete-ready delivery." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Advisory"
          title="Building Public Sector Growth Strategies"
          sub="We help technology organizations build structured approaches to government contracting across the full lifecycle — from pipeline to award to delivery."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 transition group">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-display font-semibold">{c.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CtaInline label="Discuss Your Growth Strategy" />
      </div>
    </section>
  );
}

/* ─────────────── CORE CAPABILITIES ─────────────── */
function CoreCapabilities() {
  const caps = [
    {
      icon: Brain, t: "AI & Generative Intelligence",
      d: "Custom GenAI copilots, document intelligence, and decision-support systems.",
      gov: "Citizen-services automation, case management, and constituent engagement.",
      sled: "Education tutoring assistants, agency knowledge copilots, eligibility screening.",
    },
    {
      icon: Cloud, t: "Cloud & Platform Engineering",
      d: "Secure landing zones, migrations, and platform modernization.",
      gov: "AWS GovCloud, Azure Government, FedRAMP-aligned architectures.",
      sled: "State / district cloud foundations with cost governance and FinOps.",
    },
    {
      icon: Smartphone, t: "Civic Mobile & Web Portal Development",
      d: "Accessible portals, mobile apps, and citizen / staff experiences.",
      gov: "WCAG 2.2 AA, plain-language UX, identity federation.",
      sled: "Parent / student portals, permitting, licensing, and 311 experiences.",
    },
    {
      icon: BarChart3, t: "Data Analytics & Modernization",
      d: "Warehouses, lakehouses, dashboards, and operational analytics.",
      gov: "Performance reporting, transparency, and grant compliance.",
      sled: "K-12 dashboards, higher-ed analytics, public health insight platforms.",
    },
    {
      icon: ScrollText, t: "SLED Bid & Tender Intelligence",
      d: "Decode, audit, and engineer winning RFx response packages.",
      gov: "Evaluation framework mapping, compliance matrices, pricing strategy.",
      sled: "K-12, higher-ed, county, city, and state procurement coverage.",
    },
  ];
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Delivery capabilities aligned to the public sector"
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {caps.map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-display font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              <div className="mt-4 pt-4 border-t border-border/60 space-y-2 text-xs">
                <div><span className="text-[10px] uppercase tracking-wider text-primary/80">Government</span><div className="text-muted-foreground mt-0.5">{c.gov}</div></div>
                <div><span className="text-[10px] uppercase tracking-wider text-accent/90">SLED</span><div className="text-muted-foreground mt-0.5">{c.sled}</div></div>
              </div>
            </div>
          ))}
        </div>
        <CtaInline label="Explore Our Capabilities" />
      </div>
    </section>
  );
}

/* ─────────────── NAICS / NIGP CODES ─────────────── */
function Codes() {
  const naics = {
    primary: { code: "541511", title: "Custom Computer Programming Services" },
    other: [
      { code: "541512", title: "Computer Systems Design Services" },
      { code: "518210", title: "Data Processing, Hosting, and Related Services" },
      { code: "611420", title: "Computer Training" },
    ],
  };
  const nigp = {
    primary: { code: "920-40", title: "Programming Services, Computer, Including Mobile Applications" },
    other: [
      ["920-27", "Ecommerce Software Development Services"],
      ["920-30", "Image Processing and Conversion Services"],
      ["920-34", "Media Conversion Services"],
      ["920-44", "Risk Management for Software Development"],
      ["920-45", "Software Maintenance and Support Services"],
      ["920-48", "Data Storage Services"],
      ["920-65", "System Requirements Quality Assurance Review"],
      ["920-66", "System, Network, Database Administration Services"],
      ["920-76", "Testing of Systems, Infrastructure, Components, or Software"],
      ["920-91", "Computer-Based Software Training"],
    ],
  };
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Procurement Classification"
          title="NAICS & NIGP Profile"
          sub="Direct alignment to the codes procurement teams use to qualify vendors and route opportunities."
        />
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* NAICS */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span className="font-display font-semibold">NAICS</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Federal Classification</span>
            </div>
            <div className="rounded-xl bg-primary/10 border border-primary/30 p-4 mb-4">
              <div className="text-[10px] uppercase tracking-wider text-primary/90 mb-1">Primary</div>
              <div className="font-display text-xl font-semibold">{naics.primary.code}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{naics.primary.title}</div>
            </div>
            <div className="space-y-2">
              {naics.other.map((n) => (
                <div key={n.code} className="flex items-start gap-3 bg-white/[0.03] border border-border/60 rounded-lg px-4 py-2.5">
                  <span className="font-mono text-xs text-primary shrink-0 mt-0.5">{n.code}</span>
                  <span className="text-sm text-foreground/90">{n.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NIGP */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-accent" />
                <span className="font-display font-semibold">NIGP</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">SLED Procurement</span>
            </div>
            <div className="rounded-xl bg-accent/10 border border-accent/30 p-4 mb-4">
              <div className="text-[10px] uppercase tracking-wider text-accent/90 mb-1">Primary</div>
              <div className="font-display text-xl font-semibold">{nigp.primary.code}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{nigp.primary.title}</div>
            </div>
            <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
              {nigp.other.map(([code, title]) => (
                <div key={code} className="flex items-start gap-3 bg-white/[0.03] border border-border/60 rounded-lg px-4 py-2.5">
                  <span className="font-mono text-xs text-accent shrink-0 mt-0.5">{code}</span>
                  <span className="text-sm text-foreground/90">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CtaInline label="View Procurement Alignment" />
      </div>
    </section>
  );
}

/* ─────────────── COMPLIANCE ─────────────── */
function Compliance() {
  const badges = [
    { icon: CheckCircle2, t: "WCAG 2.2 AA" },
    { icon: Shield, t: "NIST 800-53" },
    { icon: GraduationCap, t: "FERPA" },
    { icon: Lock, t: "HIPAA" },
    { icon: ShieldCheck, t: "CMMC Level 1" },
    { icon: Globe2, t: "U.S. Data Residency" },
    { icon: Cloud, t: "AWS GovCloud" },
    { icon: Cloud, t: "Microsoft Azure Government" },
  ];
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Compliance Posture"
          title="Compliance & Government Readiness"
          sub="Built to align with the controls, frameworks, and residency expectations U.S. SLED buyers require."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.t} className="glass rounded-xl p-5 flex flex-col items-start gap-3 hover:border-primary/40 transition">
              <div className="h-9 w-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                <b.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="font-medium text-sm">{b.t}</div>
            </div>
          ))}
        </div>
        <CtaInline label="Discuss Compliance Requirements" />
      </div>
    </section>
  );
}

/* ─────────────── PAST PERFORMANCE ─────────────── */
function PastPerformance() {
  const cases = [
    {
      title: "Maycomb Community College — RFQ Q 1971",
      sector: "Higher Education SLED",
      location: "United States",
      summary: "AV equipment bid intelligence and submission engineering project decoded, audited, benchmarked, and transformed into a submission-ready package within 72 hours.",
      tags: ["Bid Intelligence", "Submission Engineering", "72-hr Turnaround"],
    },
    {
      title: "Kansas City KS Public Schools — RFP 26-003",
      sector: "K-12 SLED",
      location: "United States",
      summary: "District-wide data dashboard bid intelligence across seven data domains mapped against a 25-point evaluation framework and five-year total cost of ownership analysis.",
      tags: ["Data Dashboards", "Evaluation Mapping", "5-yr TCO"],
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Selected Past Performance"
          title="Decoded Under NDA"
          sub="All client engagements, bid intelligence activities, and procurement support projects are executed under strict Non-Disclosure Agreements."
        />
        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-[11px] uppercase tracking-wider text-accent">
          <Lock className="h-3 w-3" /> Delivered Under NDA
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-7 relative overflow-hidden group">
              <div className="absolute inset-0 bg-grid opacity-[0.04]" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-wider text-primary/90">{c.sector}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{c.location}</span>
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>

                {/* Timeline */}
                <div className="mt-5 flex items-center gap-2">
                  {["Decode", "Audit", "Engineer", "Submit"].map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{step}</span>
                      </div>
                      {i < 3 && <div className="h-px w-4 bg-border" />}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] border border-border/60 text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-accent"><Lock className="h-3 w-3" /> Delivered Under NDA</div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <CtaInline label="Request Additional References" />
      </div>
    </section>
  );
}

/* ─────────────── NDA / CONFIDENTIALITY ─────────────── */
function Confidentiality() {
  return (
    <section className="py-24 section-alt">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-[11px] uppercase tracking-wider text-primary mb-5">
              <Lock className="h-3 w-3" /> Confidentiality Commitment
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient leading-tight">
              Strict NDAs protect every procurement engagement
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              All procurement intelligence engagements, proposal support activities, bid strategy projects,
              and client advisory work are performed under strict confidentiality agreements and Non-Disclosure
              Agreements (NDAs). Sensitive procurement data, evaluation strategies, and client information
              remain protected throughout the engagement lifecycle.
            </p>
            <CtaInline label="Discuss Confidential Opportunities" icon={ArrowRight} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── DOWNLOAD ─────────────── */
function DownloadSection() {
  return (
    <section id="download" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-br from-card to-background p-10 md:p-14">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-3">
                <Sparkles className="h-3.5 w-3.5" /> Capability Statement
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient leading-tight">
                Download Our Capability Statement
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                A concise, share-ready PDF designed for prime contractors, procurement officials, and capture managers.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/api/download/PIScaleX — Capability Statement_v1.pdf" className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-accent text-accent-foreground font-medium shadow-xl shadow-accent/20 hover:opacity-90 transition">
                <FileText className="h-5 w-5" />
                Download Capability Statement (PDF)
                <Download className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-2xl glass text-foreground font-medium hover:bg-white/5 transition">
                <Calendar className="h-4 w-4" /> Schedule a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section id="contact" className="py-24 section-alt">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
          <Handshake className="h-3.5 w-3.5 text-primary" /> Let's Build Your Public Sector Practice
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gradient leading-tight">
          Ready to Strengthen Your Public Sector Growth Strategy?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you are pursuing your first government opportunity or expanding an established public sector practice,
          PIScaleX provides the procurement intelligence, proposal support, and strategic guidance needed to accelerate success.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
            <Calendar className="h-4 w-4" /> Schedule a Consultation
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
                  href="https://www.linkedin.com/company/pisolglobal"
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

function CapabilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <WhyPIScaleX />
        <Advisory />
        <CoreCapabilities />
        <Codes />
        <Compliance />
        <PastPerformance />
        <Confidentiality />
        <DownloadSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}