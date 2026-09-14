import { createFileRoute, Link } from "@tanstack/react-router";
import logoIcon from "@/assets/pi-logo-Hd-crop.jpg";
import {
  ArrowRight, Shield, Lock, CheckCircle2, Building2, Cpu, Cloud, BarChart3,
  Smartphone, Brain, Database, Users, FileCheck2, Layers, Linkedin, Phone,
  Calendar, Target, TrendingUp, Briefcase, Award, Globe2, FileText, ShieldCheck,
  Sparkles, ScrollText, Lightbulb, Handshake, Search, GraduationCap, Clock,
  Mail, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/rfp-services")({
  component: RfpServicesPage,
  head: () => ({
    meta: [
      { title: "RFP Services — PIScaleX | U.S. SLED Government Procurement Support" },
      { name: "description", content: "End-to-end support for U.S. SLED government contracting. Opportunity evaluation, proposal development, compliance support, and post-award execution." },
      { property: "og:title", content: "RFP Services — PIScaleX | U.S. SLED Government Procurement Support" },
      { property: "og:description", content: "End-to-end support for U.S. SLED government contracting." },
      { property: "og:url", content: "/rfp-services" },
    ],
    links: [{ rel: "canonical", href: "/rfp-services" }],
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
          <Link to="/rfp-services" className="text-foreground font-medium">Services</Link>
          <Link to="/" hash="why" className="hover:text-foreground transition">Why Us</Link>
          <Link to="/capability" className="hover:text-foreground transition">Capability</Link>
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
    { value: "10+", label: "Years Enterprise IT Delivery" },
    { value: "3-Day", label: "Avg. Post-Award Mobilization" },
    { value: "100%", label: "Compliance-Driven Approach" },
  ];
  return (
    <section className="relative min-h-[88vh] flex items-center pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1628]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.08]" />
        <div className="absolute top-1/4 left-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> End-to-End SERVICES · U.S. SLED
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] text-gradient">
            From opportunity evaluation to post-award execution
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            PIScaleX provides structured support across every stage of the procurement and delivery lifecycle.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            One trusted partner for IT consulting, software development, skilled staff augmentation, and reliable technology delivery.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
              <Calendar className="h-4 w-4" /> Schedule a Consultation
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
              <Handshake className="h-4 w-4" /> Discuss an Opportunity
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl p-4">
                <div className="font-display text-2xl font-semibold text-foreground">{m.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── COMPLIANCE & STANDARDS ─────────────── */
function ComplianceStandards() {
  const items = [
    {
      title: "WCAG 2.2 AA",
      desc: "Accessible digital experiences designed to support modern web accessibility requirements.",
      tag: "Design Standard",
      icon: FileCheck2,
    },
    {
      title: "HIPAA Aware",
      desc: "Delivery practices designed with healthcare data privacy and security considerations in mind.",
      tag: "Aware",
      icon: Shield,
    },
    {
      title: "GDPR Compliant",
      desc: "Privacy-aware development practices supporting data protection and responsible information handling.",
      tag: "Aware",
      icon: Lock,
    },
    {
      title: "CMMC Level 1",
      desc: "Security practices aligned with foundational CMMC requirements.",
      tag: "In Progress",
      icon: ShieldCheck,
    },
    {
      title: "NIST 800-53",
      desc: "Security controls and delivery practices mapped to the NIST 800-53 framework.",
      tag: "Aligned",
      icon: ScrollText,
    },
    {
      title: "Section 508",
      desc: "Accessible solutions designed to support U.S. federal accessibility requirements.",
      tag: "Design Standard",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-4">
          <span className="h-1 w-6 bg-primary rounded-full" />
          Compliance & Standards
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient leading-tight">
          Built for Secure, Accessible<br />Government Delivery
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Our solutions align with recognized security, privacy, and accessibility standards to help primes and public-sector organizations deliver with greater confidence.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] uppercase tracking-wider font-medium">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── MARKET POSITIONING ─────────────── */
function MarketPositioning() {
  const cards = [
    {
      badge: "NAICS 541511 · NIGP 920-40",
      title: "Application Development",
      desc: "Build and modernize citizen-facing and mission-critical applications, including portals, case management, permitting, and justice platforms.",
      tags: ["State CIOs", "Courts & Justice", "Permit Offices"],
      icon: Cpu,
    },
    {
      badge: "NAICS 541512 · NIGP 920-64",
      title: "Systems Integration",
      desc: "Connect enterprise platforms, modernize legacy environments, and support ERP, middleware, and data integration initiatives.",
      tags: ["ERP", "Middleware", "Data Migration"],
      icon: Layers,
    },
    {
      badge: "NAICS 518210 · NIGP 920-78",
      title: "Cloud Migration Support",
      desc: "Support cloud transformation through migration, re-platforming, cloud engineering, and DevSecOps delivery.",
      tags: ["AWS / Azure GovCloud", "Managed Services"],
      icon: Cloud,
    },
    {
      badge: "NAICS 561320 · NIGP 961-24",
      title: "IT Staff Augmentation",
      desc: "Provide scalable technical resources that complement prime-led teams across development, QA, data, cloud, and application support.",
      tags: ["Booz Allen", "SAIC", "Leidos", "Peraton"],
      icon: Users,
    },
    {
      badge: "NAICS 541513 · NIGP 920-66",
      title: "Managed IT Operations",
      desc: "Support day-to-day technology operations through help desk, application support, NOC services, monitoring, and SLA-focused delivery.",
      tags: ["County IT", "School Districts", "Utility Districts"],
      icon: Building2,
    },
    {
      badge: "NAICS 611420 · NIGP 920-91",
      title: "Government IT Training & Change Management",
      desc: "Support technology adoption with user training, instructional content, knowledge transfer, and change management for modernization programs.",
      tags: ["Local Governments", "State HR Agencies"],
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary/90 mb-4">
          <span className="h-1 w-6 bg-primary rounded-full" />
          Market Positioning
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-gradient leading-tight">
          Where Prime Contractors<br />Need Delivery Capacity.
        </h2>
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          Explore six high-demand SLED technology service areas where PIScaleX can support prime contractors with scalable remote delivery, technical expertise, and cost-efficient execution.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.title} className="glass rounded-2xl p-6 flex flex-col">
              <div className="inline-flex items-center px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-[10px] uppercase tracking-wider text-primary mb-4">
                {card.badge}
              </div>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center">
                  <card.icon className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl">{card.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full border border-border bg-white/[0.03] text-[10px] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── RFP SERVICES ─────────────────── */
function RfpServices() {
  const columns = [
    {
      title: "Opportunity & Capture Strategy",
      icon: Search,
      desc: "Build a stronger foundation before investing in a bid.",
      items: [
        "Opportunity Assessment & Qualification",
        "Solicitation Review & Requirements Analysis",
        "Bid / No-Bid Decision Support",
        "Capability Statement Development",
        "Past Performance Positioning",
        "Teaming & Partner Ecosystem Development",
        "Subcontractor & SDB Partner Identification",
        "Pre-Proposal Coordination & Q&A Management",
      ],
    },
    {
      title: "Proposal Development & Compliance",
      icon: FileText,
      desc: "Develop compliant, competitive, and evaluation-focused responses.",
      items: [
        "Proposal Planning & Authoring",
        "Compliance Tracking & Response Mapping",
        "Technical Solution Narratives",
        "Pricing Support & Evaluation Alignment",
        "Past Performance Story Development",
        "Key Personnel & Resume Customization",
        "Quality Assurance Reviews",
        "Pink, Red, and Gold Team Evaluations",
      ],
    },
    {
      title: "Award Transition & Delivery Readiness",
      icon: Award,
      desc: "Accelerate the path from contract award to successful execution.",
      items: [
        "Contract Transition Support",
        "Onboarding & Mobilization Planning",
        "Program & Delivery Coordination",
        "Performance Measurement & Reporting",
        "Regulatory and Contract Compliance Support",
        "Change Management & Contract Modifications",
        "Renewal & Extension Support",
        "Knowledge Transfer & Contract Closeout",
      ],
    },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Services"
          title="Comprehensive Procurement Support"
          sub="Strategic guidance and execution support across every phase of the government contracting lifecycle."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div key={col.title} className="glass rounded-2xl p-6 flex flex-col">
              <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-4">
                <col.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">{col.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{col.desc}</p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-3xl p-10 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-gradient leading-tight">
              Support at Every Stage of the Procurement Lifecycle
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you&apos;re evaluating an opportunity, preparing a proposal, or transitioning into delivery, PIScaleX provides the expertise and operational support needed to move forward with confidence.
            </p>
            <CtaInline label="Talk to an RFP Specialist" href="#contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── WHY PISCALEX ─────────────────── */
function WhyPIScaleX() {
  const cards = [
    { icon: Calendar, t: "10+ Years Enterprise IT Delivery", d: "Supporting complex technology initiatives through structured execution and operational excellence." },
    { icon: Clock, t: "3-Day Average Post-Award Mobilization", d: "Rapid onboarding and deployment support to help teams meet critical timelines." },
    { icon: ShieldCheck, t: "Compliance-Focused Approach", d: "Processes designed around documentation quality, compliance requirements, and procurement best practices." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why PIScaleX"
          title="Why Organizations Choose PIScaleX"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.t} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/[0.05] transition">
              <div className="h-10 w-10 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="font-display font-semibold text-lg">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <CtaInline label="Schedule a Strategy Call" href="#contact" />
      </div>
    </section>
  );
}

/* ─────────────── NDA COMMITMENT ─────────────── */
function NdaCommitment() {
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
              Confidentiality & NDA Commitment
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              All client engagements, proposal support activities, procurement advisory services, and bid intelligence efforts are performed under strict Non-Disclosure Agreements (NDAs).
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We maintain confidentiality throughout the procurement lifecycle and safeguard sensitive proposal, evaluation, and contract-related information.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5 text-primary" /> NDA Protected
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-accent" /> Confidentiality Assured
              </span>
            </div>
            <CtaInline label="Discuss a Confidential Opportunity" href="#contact" />
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
          <Handshake className="h-3.5 w-3.5 text-primary" /> Start the Conversation
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gradient leading-tight">
          Need Support Across the Delivery Lifecycle?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Scale Your SLED Delivery with Confidence. PIScaleX provides software consulting, staff augmentation, and end-to-end technology delivery and support for government technology partners and primes.
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
              U.S. State, Local & Education government RFP and IT outsourcing partner. Trusted by prime
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


function RfpServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <ComplianceStandards />
        <MarketPositioning />
        {/* <RfpServices /> */}
        <WhyPIScaleX />
        <NdaCommitment />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}