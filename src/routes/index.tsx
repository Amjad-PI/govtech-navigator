import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import {
  ArrowRight, Shield, Lock, CheckCircle2, MapPin, Building2, Cpu, Cloud,
  BarChart3, Smartphone, Code2, Brain, Database, Workflow, Users, Sparkles,
  ShieldCheck, Gauge, FileCheck2, Layers, Linkedin, Mail, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PI Solutions & Consulting — U.S. SLED Government IT Partner" },
      { name: "description", content: "Trusted U.S. State and Local Government IT subcontractor. Custom Apps, AI/ML, Data Analytics, Cloud Migration. NAICS 541612, 541519." },
      { property: "og:title", content: "PI Solutions & Consulting — U.S. SLED Government IT Partner" },
      { property: "og:description", content: "Custom Application Development, AI/ML, Data Analytics, and Cloud Migration for U.S. SLED agencies and prime contractors." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "PI Solutions and Consulting PVT Limited",
        url: "/",
        description: "U.S. State, Local & Education Government IT consulting subcontractor.",
        areaServed: "United States",
      }),
    }],
  }),
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">PI</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm">PI Solutions</div>
            <div className="text-[10px] text-muted-foreground tracking-wider uppercase">& Consulting</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#projects" className="hover:text-foreground transition">SLED Portfolio</a>
          <a href="#why" className="hover:text-foreground transition">Why PI</a>
          <a href="#ai" className="hover:text-foreground transition">AI & Data</a>
          <a href="#partner" className="hover:text-foreground transition">Partner</a>
        </nav>
        <a href="#partner" className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition">
          Partner With Us <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        {/* Base navy */}
        <div className="absolute inset-0 bg-[#0b1628]" />

        {/* Cinematic Capitol + flag + network image */}
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-right opacity-90 scale-105 motion-safe:animate-pulse-glow"
          style={{ animationDuration: "12s" }}
        />

        {/* Dark navy overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1628] via-[#0b1628]/90 to-[#0b1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1628]/60 via-transparent to-[#0b1628]" />

        {/* Animated cyber grid overlay */}
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.18] mix-blend-screen" />

        {/* Soft blue glow behind headline */}
        <div className="absolute top-1/4 left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/25 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />

        {/* Subtle network particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { t: "12%", l: "22%", d: "0s" },
            { t: "28%", l: "48%", d: "1.2s" },
            { t: "62%", l: "18%", d: "2.4s" },
            { t: "44%", l: "70%", d: "0.6s" },
            { t: "78%", l: "55%", d: "1.8s" },
            { t: "20%", l: "82%", d: "3s" },
            { t: "55%", l: "38%", d: "2s" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/70 shadow-[0_0_12px_2px_oklch(0.76_0.13_250_/_0.6)] animate-pulse"
              style={{ top: p.t, left: p.l, animationDelay: p.d, animationDuration: "3.5s" }}
            />
          ))}
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-foreground/90 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            U.S. State, Local & Education Government IT
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.04] tracking-tight">
            <span className="text-gradient">Your Trusted U.S.</span>
            <br />
            <span className="text-gradient">State & Local</span>{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Government IT Partner
            </span>
          </h1>
          <p className="mt-7 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            PI Solutions and Consulting PVT Limited delivers Custom Application Development,
            Mobile, AI/ML, Data Analytics, and Cloud Migration for U.S. state agencies and
            prime contractors — engineered for compliance, scale, and citizen impact.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:translate-y-[-1px] hover:shadow-[0_10px_30px_-10px_oklch(0.72_0.18_150_/_0.6)] transition-all">
              View SLED Portfolio <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href="#partner" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 backdrop-blur-sm transition-all">
              Partner With Us
            </a>
          </div>

          {/* Compliance badges */}
          <div className="mt-10 flex flex-wrap gap-2">
            {[
              { icon: ShieldCheck, label: "SAM.gov" },
              { icon: CheckCircle2, label: "WCAG 2.2 Aware" },
              { icon: Shield, label: "CMMC Level 1" },
              { icon: FileCheck2, label: "NIST 800-53" },
            ].map((b) => (
              <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background/40 backdrop-blur-sm text-xs text-muted-foreground">
                <b.icon className="h-3.5 w-3.5 text-primary" /> {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block" aria-hidden />
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 inset-x-0">
        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="glass rounded-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
            {[
              { k: "20+", v: "U.S. State Projects" },
              { k: "10+", v: "Prime Contractors Served" },
              { k: "SAM.gov", v: "Compliance Ready" },
              { k: "541612 · 541519", v: "Primary NAICS" },
            ].map((s) => (
              <div key={s.v} className="p-5 hover:bg-white/[0.02] transition">
                <div className="font-display text-xl font-semibold text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">{eyebrow}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground text-lg">{sub}</p>}
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 section-alt border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="SLED Portfolio"
          title="U.S. State-Level Projects"
          sub="Verified project experience across U.S. state and local government."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Featured */}
          <article className="lg:col-span-2 glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/30 transition">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-primary/15 border border-primary/30 text-primary text-xs font-semibold">CO</span>
              <span className="px-2.5 py-1 rounded-md bg-accent/15 border border-accent/30 text-accent text-xs font-semibold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Completed
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <MapPin className="h-3.5 w-3.5" /> Colorado · 2026
            </div>
            <h3 className="text-2xl font-bold mb-2">City of Englewood, Colorado</h3>
            <p className="text-muted-foreground mb-6">Website Redesign and Development Services</p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm mb-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Contract Value</div>
                <div className="font-medium">$250,000 – $300,000</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Contracting Body</div>
                <div className="font-medium">City of Englewood Procurement Division</div>
              </div>
            </div>

            <p className="text-foreground/90 border-l-2 border-primary pl-4 italic mb-6">
              "Delivered a WCAG 2.2 AA compliant website serving 300,000 residents."
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["WordPress", "WCAG 2.2", "UX Design", "Accessibility", "Government CMS"].map(t => (
                <span key={t} className="px-2.5 py-1 rounded-md border border-border text-xs text-muted-foreground bg-white/[0.02]">{t}</span>
              ))}
            </div>

            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition text-sm font-medium">
              View Full Case Study <ChevronRight className="h-4 w-4" />
            </button>
          </article>

          {/* Placeholder cards */}
          {[1, 2].map((i) => (
            <article key={i} className="rounded-2xl p-8 border-2 border-dashed border-border bg-card/40 backdrop-blur flex flex-col items-center justify-center text-center min-h-[320px] hover:border-primary/30 transition">
              <div className="h-12 w-12 rounded-full glass flex items-center justify-center mb-4">
                <Lock className="h-5 w-5 text-muted-foreground" />
              </div>
              <h4 className="font-semibold mb-2">Confidential Engagement</h4>
              <p className="text-sm text-muted-foreground max-w-[220px]">
                Project Reference Available Upon Request
              </p>
              <span className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground/70">
                SLED · Active NDA
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Workflow, title: "IT Strategic Planning", desc: "Multi-year roadmaps aligned to agency mission and budget cycles." },
  { icon: Layers, title: "Government Digital Roadmaps", desc: "Phased modernization plans across legacy systems and citizen channels." },
  { icon: Gauge, title: "Agency Technology Assessments", desc: "End-to-end audits of architecture, governance, and operational risk." },
  { icon: Users, title: "State CIO Office Support", desc: "Embedded advisors for procurement, vendor strategy, and delivery oversight." },
  { icon: ShieldCheck, title: "IT Governance Consulting", desc: "Policy, compliance, and standards aligned to NIST and state mandates." },
  { icon: Brain, title: "AI-Powered Citizen Services", desc: "Conversational, predictive, and decision-support systems for agencies." },
  { icon: Database, title: "Data Modernization", desc: "Unified data platforms, lineage, and analytics for state operations." },
  { icon: Cloud, title: "Cloud Infrastructure Transformation", desc: "Secure migration to GovCloud, FedRAMP-aware, and hybrid environments." },
];

function Services() {
  return (
    <section id="services" className="relative py-28 px-6 border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Government Services"
          title="Built for State, Local & Education Modernization"
          sub="A consulting-led delivery model purpose-built for U.S. public sector outcomes."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group glass rounded-xl p-6 hover:translate-y-[-2px] hover:border-primary/30 transition-all">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Core capabilities band */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { icon: Code2, label: "Custom Apps" },
            { icon: Smartphone, label: "Mobile" },
            { icon: Brain, label: "AI / ML" },
            { icon: BarChart3, label: "Data Analytics" },
            { icon: Cloud, label: "Cloud Migration" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3 px-4 py-3 rounded-xl glass">
              <c.icon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const whys = [
  "Process Improvement Expertise", "Government Efficiency Alignment",
  "Accessibility-Focused Development", "AI & Automation Readiness",
  "Secure Cloud Migration", "Prime Contractor Collaboration",
  "Agile Government Delivery", "Compliance-Aware Engineering",
];

function WhyUs() {
  return (
    <section id="why" className="relative py-28 px-6 section-alt border-t border-border/60">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Why PI Solutions"
            title="Why Government Agencies Choose PI Solutions"
            sub="A trusted subcontractor model combining government delivery rigor with modern engineering."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {["918-46 Software", "918-24 IT Consulting", "918-00 Technology"].map(c => (
              <span key={c} className="px-3 py-1.5 rounded-md border border-border text-xs text-muted-foreground">NIGP {c}</span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {whys.map((w, i) => (
            <div key={w} className="glass rounded-xl px-5 py-4 flex items-start gap-3 hover:border-primary/30 transition">
              <div className="h-7 w-7 rounded-md bg-accent/15 border border-accent/30 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-medium pt-1">{w}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISection() {
  return (
    <section id="ai" className="relative py-28 px-6 border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="AI & Data Modernization"
          title="Responsible AI for the Public Sector"
          sub="Operational intelligence, citizen-grade experiences, and secure data platforms — engineered for government."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="glass rounded-2xl p-8">
            <Sparkles className="h-6 w-6 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-6">Capabilities</h3>
            <ul className="space-y-3">
              {[
                "AI-driven government modernization",
                "Citizen experience transformation",
                "Intelligent workflows & automation",
                "Predictive analytics for agencies",
                "Secure data platforms & lakehouses",
                "Responsible AI governance",
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Faux dashboard visual */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground">Citizen Service Index</div>
                <div className="font-display text-2xl font-bold mt-1">94.2%</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-md bg-accent/15 text-accent border border-accent/30">+12.4%</span>
            </div>
            <div className="grid grid-cols-12 gap-1.5 items-end h-32 mb-6">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm bg-gradient-to-t from-primary/40 to-primary"
                  style={{ height: `${20 + Math.abs(Math.sin(i / 2)) * 80}%` }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Agencies", v: "47" },
                { l: "Requests / mo", v: "2.1M" },
                { l: "Avg. resolution", v: "1.8h" },
              ].map(m => (
                <div key={m.l} className="rounded-lg border border-border p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
                  <div className="font-display font-semibold mt-1">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 pointer-events-none bg-grid opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  return (
    <section id="partner" className="relative py-28 px-6 section-alt border-t border-border/60">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/2 bg-grid opacity-20" />
          <div className="absolute -top-20 -right-20 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                Prime Contractor Partnership
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient leading-tight">
                Built for Prime Contractor Collaboration
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">
                A flexible subcontracting model engineered for U.S. prime contractors —
                blending onshore strategy with scalable offshore delivery.
              </p>
              <a href="mailto:partnerships@pisolutions.com" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition">
                Become a Partner <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="space-y-3">
              {[
                { i: Building2, t: "Flexible subcontracting model" },
                { i: Cpu, t: "Offshore + U.S. delivery capability" },
                { i: Gauge, t: "Cost optimization & rapid scale-up" },
                { i: Users, t: "Government-focused PMO support" },
                { i: FileCheck2, t: "Documentation & compliance readiness" },
              ].map(item => (
                <li key={item.t} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <item.i className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.t}</span>
                </li>
              ))}
            </ul>
          </div>
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
                <div className="font-display font-semibold">PI Solutions & Consulting</div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase">PVT Limited</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              U.S. State, Local & Education government IT consulting subcontractor.
              Trusted by prime contractors and state agencies for digital transformation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SAM.gov", "WCAG 2.2", "CMMC L1", "NIST 800-53"].map(b => (
                <span key={b} className="text-[10px] px-2.5 py-1 rounded-md border border-border text-muted-foreground">{b}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Codes</div>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">NAICS</span> 541612, 541519</li>
              <li><span className="text-muted-foreground">NIGP</span> 918-46 Software</li>
              <li><span className="text-muted-foreground">NIGP</span> 918-24 IT Consulting</li>
              <li><span className="text-muted-foreground">NIGP</span> 918-00 Technology</li>
              <li><span className="text-muted-foreground">SAM.gov UEI</span> Registration In Progress</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</div>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50" />
              <input type="email" placeholder="Agency / Organization Email" className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50" />
              <textarea placeholder="How can we partner?" rows={3} className="w-full px-4 py-2.5 rounded-lg bg-card/60 border border-border text-sm focus:outline-none focus:border-primary/50 resize-none" />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90">
                  <Mail className="h-4 w-4" /> Send
                </button>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-border hover:border-primary/40 transition">
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} PI Solutions and Consulting PVT Limited. All rights reserved.</div>
          <div>Trusted U.S. SLED Technology Partner</div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <WhyUs />
        <AISection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
}
