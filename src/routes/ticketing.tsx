import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Database,
  FileCheck2,
  Handshake,
  Headset,
  Landmark,
  Layers,
  Mail,
  MessageSquare,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/ticketing")({
  component: TicketingCaseStudyPage,
  head: () => ({
    meta: [
      { title: "Ticketing & Customer Support Management System — PIScaleX" },
      { name: "description", content: "A scalable ITSM and omnichannel customer support platform that centralizes customer conversations, streamlines support operations, and provides real-time operational visibility." },
      { property: "og:title", content: "Ticketing & Customer Support Management System — PIScaleX" },
      { property: "og:description", content: "Centralizing customer support, improving agent productivity, and creating a single source of truth for a growing technology organization." },
      { property: "og:url", content: "/ticketing" },
    ],
    links: [{ rel: "canonical", href: "/ticketing" }],
  }),
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur-xl bg-background/70">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-sm">PI</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-semibold text-sm">PI Solutions</div>
            <div className="text-[10px] text-muted-foreground tracking-wider uppercase">& Consulting</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" hash="services" className="hover:text-foreground transition">Services</Link>
          <Link to="/" hash="projects" className="hover:text-foreground transition">SLED Portfolio</Link>
          <Link to="/" hash="why" className="hover:text-foreground transition">Why PI</Link>
          <Link to="/" hash="ai" className="hover:text-foreground transition">AI & Data</Link>
          <Link to="/capability" className="hover:text-foreground transition">Capability</Link>
          <Link to="/rfp-services" className="hover:text-foreground transition">RFP Services</Link>
          <Link to="/case-studies" className="text-foreground font-medium">Case Studies</Link>
          <Link to="/districtwide-data" className="hover:text-foreground transition">Districtwide Data</Link>
          <Link to="/" hash="partner" className="hover:text-foreground transition">Partner</Link>
        </nav>
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

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} PI Solutions and Consulting PVT Limited · Case Study
    </footer>
  );
}

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
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-5 hover:text-primary transition">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
          </Link>
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
            <a href="mailto:info@piscalex.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
              <Calendar className="h-4 w-4" /> Schedule a Consultation
            </a>
            <a href="mailto:info@piscalex.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
              <Handshake className="h-4 w-4" /> Request Project References
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    { title: "Integration & Data Migration", desc: "Integrated customer communication channels and planned migration of relevant data from SchoolDude into the new platform." },
    { title: "Configuration & Development", desc: "Configured ticketing workflows, queues, permissions, dashboards, reports, knowledge base capabilities, and asset management functions." },
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
    { value: "25K–35K", label: "Endpoints Supported for Asset Lifecycle Management" },
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
          <a href="mailto:info@piscalex.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
            <Calendar className="h-4 w-4" /> Schedule a Consultation
          </a>
          <Link to="/case-studies" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
            <Layers className="h-4 w-4" /> View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

function TicketingCaseStudyPage() {
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
