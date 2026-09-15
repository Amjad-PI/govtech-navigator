import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import logoIcon from "@/assets/pi-logo-Hd-crop.jpg";
import {
  ArrowRight, FileCheck2, Search, Settings, Package, ShieldCheck, Database,
  Layers, Linkedin, Phone, Clock, Building2, Calendar, Mail, FileText, CheckCircle2, Handshake, Ticket, MessageSquare, BarChart3, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/casestudies/ticketing-video-surveillance")({
  component: EnterpriseITTicketing,
  head: () => ({
    meta: [
      { title: "Case Study: Enterprise IT Ticketing — PIScaleX | U.S. SLED Government Contracting" },
      { name: "description", content: "A scalable ITSM and omnichannel customer support platform that centralizes customer conversations, streamlines support operations, and provides real-time operational visibility." },
      { property: "og:title", content: "Case Studies — PIScaleX | Enterprise IT Ticketing" },
      { property: "og:description", content: "LCPS RFP 25-26-08P pre-bid intelligence: architecture, compliance, and competitive pricing for prime contractors." },
      { property: "og:url", content: "/casestudies/ticketing-video-surveillance" },
    ],
    links: [{ rel: "canonical", href: "/casestudies/ticketing-video-surveillance" }],
  }),
});

const navItems = [
  { label: "Services", href: "/rfp-services" },
  { label: "Why Us", href: "/#why" },
  { label: "Capability", href: "/capability" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Partner", href: "/#partner" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={logoIcon} alt="PIScaleX" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-foreground transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="hidden md:inline">📞 +1 (703) 666-7959</span>
          <a href="/#partner" className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition">
            Partner With Us <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border/60 bg-background/70 text-foreground hover:bg-white/[0.05] transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden absolute top-full inset-x-0 border-b border-border/60 bg-background backdrop-blur-xl p-4 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.03] transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
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
    <section className="relative min-h-[70vh] flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1628]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.08]" />
        <div className="absolute top-1/4 left-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <FileCheck2 className="h-3.5 w-3.5 text-primary" /> Case Study
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] text-gradient">
            Ticketing & Customer Support Management System
          </h1>
          <p className="mt-6 text-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Centralizing Customer Support, Improving Agent Productivity, and Creating a Single Source of Truth
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            A scalable ITSM and omnichannel customer support platform designed to centralize customer interactions, streamline support operations, and provide real-time operational visibility.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
              <Calendar className="h-4 w-4" /> Schedule a Consultation
            </a>
            <a href="https://piscalex.us/capability" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
              <Handshake className="h-4 w-4" /> View Capability Statement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROJECT OVERVIEW ─────────────── */
function ProjectOverview() {
  const capabilities = [
    {
      icon: Ticket,
      title: "Unified Ticket Management",
      desc: "Single source of truth for customer queries, assignments, workflows, and support activities.",
    },
    {
      icon: MessageSquare,
      title: "Omnichannel Support",
      desc: "Centralized conversations from email and website, ready for future channels such as WhatsApp and social media.",
    },
    {
      icon: BarChart3,
      title: "Real-Time & Historical Analytics",
      desc: "Dashboards and customizable reports covering ticket volumes, SLA compliance, workloads, and agent activity.",
    },
    {
      icon: Building2,
      title: "Multi-Site & Multi-Department Support",
      desc: "Flexible queues, workflows, permissions, and data access across departments.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access & Accessibility",
      desc: "Role-based permissions, SSO, and accessibility aligned with WCAG 2.1 AA.",
    },
    {
      icon: Database,
      title: "Migration & Implementation",
      desc: "Data migration, implementation planning, user training, deployment, and ongoing support.",
    },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Project Overview"
          title="A Unified Platform for Customer Support Operations"
          sub="A growing technology company specializing in video surveillance software and video monitoring intelligence needed a scalable customer support platform to manage increasing customer interactions across multiple channels."
        />
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
          The objective was to create a unified ITSM and omnichannel support platform that could centralize customer conversations, improve agent productivity, provide real-time operational visibility, and scale with the organization's growing customer base.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PRE-BID SERVICES ─────────────── */
function TheChallenge() {
  const items = [
    "Disconnected customer conversations across multiple channels",
    "Limited visibility into customer request history",
    "Difficulty tracking agent activity and support effort",
    "Inconsistent assignment and workflow management",
    "Limited real-time visibility into ticket volumes and workloads",
    "Increasing demand for scalable customer support operations",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SectionHeader
            eyebrow="The Challenge"
            title="Fragmented Support Operations at Scale"
            sub="As customer operations expanded, support interactions became increasingly fragmented across communication channels."
          />
          <div className="glass rounded-2xl p-7">
            <p className="text-muted-foreground leading-relaxed mb-6">The organization needed to address:</p>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Our Approach"
          title="Designing Around a Single Source of Truth"
          sub="We analyzed the organization's support processes, communication channels, user roles, workflows, reporting needs, and scalability requirements."
        />
        <div className="mt-8 glass rounded-2xl p-7 md:p-10 max-w-4xl">
          <p className="text-muted-foreground leading-relaxed">
            We then designed a centralized ITSM and omnichannel support environment around a single source of truth, connecting customer conversations, ticket workflows, assignments, reporting, knowledge management, and operational data within one platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function TheOutcome() {
  const improvements = [
    "Supported 100,000+ customer conversations within the centralized platform.",
    "Unified email and website interactions into a single support environment.",
    "Enabled 20+ agents to manage conversations, assignments, workflows, and customer history from one interface.",
    "Improved visibility into ticket volumes, workloads, SLA performance, and agent activity through real-time and historical reporting.",
    "Integrated a knowledge base to provide customers with 24/7 self-service access to common answers and resources.",
    "Established a scalable foundation for additional communication channels and future growth.",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Outcome"
          title="A Centralized Hub for Customer Support"
          sub="The resulting platform became a centralized hub for customer support operations, bringing previously fragmented conversations and support activities into one manageable environment."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {improvements.map((item) => (
            <div key={item} className="flex items-start gap-3 glass rounded-xl p-5 text-foreground/90">
              <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryMethodology() {
  const steps = [
    { title: "Discovery & Requirements", desc: "Analyzed business processes, support channels, user roles, workflows, reporting requirements, and scalability needs." },
    { title: "Solution Architecture", desc: "Designed the centralized ITSM and omnichannel architecture around a single source of truth, scalable workflows, integrations, and role-based access." },
    { title: "Integration", desc: "Integrate email, website and other customer communication channels." },
    { title: "Configuration & Development", desc: "Configured ticketing channels, queues, permissions, dashboards, reports, and knowledge base capabilities." },
    { title: "Testing & Accessibility", desc: "Validated workflows, integrations, permissions, reporting, SSO, and accessibility requirements aligned with WCAG 2.1 AA." },
    { title: "Training & Deployment", desc: "Provided implementation support, user training, deployment planning, and transition assistance for the support team." },
    { title: "Ongoing Support & Optimization", desc: "Used operational data, user feedback, and performance insights to continuously improve workflows and support processes." },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Delivery Methodology"
          title="A Structured, Outcome-Driven Approach"
          sub="From requirements analysis through deployment and continuous optimization."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="glass rounded-2xl p-7 hover:bg-white/[0.05] transition">
              <div className="flex items-start gap-5">
                <div className="h-10 w-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-primary text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyHighlights() {
  const tags = [
    "ITSM & Ticketing",
    "Omnichannel Support",
    "API Integration",
    "Real-Time Dashboards",
    "Historical Analytics",
    "SLA Management",
    "Knowledge Base",
    "Role-Based Access",
    "SSO",
    "WCAG 2.1 AA",
    "Data Migration",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Technology & Capability Highlights" title="Capabilities That Power the Platform" />
        <div className="mt-10 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full glass text-sm text-foreground/90 border border-white/[0.08]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyResults() {
  const stats = [
    { value: "100K+", label: "Customer Conversations Supported" },
    { value: "20+", label: "Agents Enabled" },
    { value: "Omnichannel", label: "Unified Ticket Management" },
    { value: "24/7", label: "Customer Self-Service Through Knowledge Base" },
    { value: "One Platform", label: "Unified Customer Support & Operational Visibility" },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Key Results" title="Measurable Outcomes" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-7 text-center hover:-translate-y-1 transition">
              <div className="font-display text-4xl font-semibold text-gradient mb-3">{s.value}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
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
        <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
          <Handshake className="h-3.5 w-3.5 text-primary" /> Start the Conversation
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gradient leading-tight">
          Looking to Modernize Customer Support Operations?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you need to centralize customer support, modernize ITSM operations, integrate multiple channels, or improve operational visibility, our team can help design and deliver a scalable solution aligned with your business needs.
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
        <ProjectOverview />
        <TheChallenge />
        <OurApproach />
        <TheOutcome />
        <DeliveryMethodology />
        <TechnologyHighlights />
        <KeyResults />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}