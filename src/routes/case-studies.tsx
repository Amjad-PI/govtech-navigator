import { createFileRoute, Link } from "@tanstack/react-router";
import logoIcon from "@/assets/pi-logo-Hd-crop.jpg";
import {
  ArrowRight, Building2, GraduationCap, Cloud, Database,
  Phone, CheckCircle2, Calendar, Handshake, Mail, Landmark, Linkedin, Clock, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies — PIScaleX | Public Sector Delivery Experience" },
      { name: "description", content: "Representative public-sector delivery experience across state agencies, local governments, K-12 districts, higher education, and health organizations." },
      { property: "og:title", content: "Case Studies — PIScaleX | Public Sector Delivery Experience" },
      { property: "og:description", content: "Public-sector modernization, cloud, data, and citizen services engagements across SLED and health sectors." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
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
          <Link to="/rfp-services" className="hover:text-foreground transition">RFP Services</Link>
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

/* ──────────────────────── HERO ──────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1628]" />
        <div className="absolute inset-0 bg-grid animate-grid opacity-[0.08]" />
        <div className="absolute top-1/4 left-[-10%] h-[560px] w-[560px] rounded-full bg-primary/20 blur-[160px] animate-pulse-glow" />
        <div className="absolute bottom-[-15%] right-[-8%] h-[480px] w-[480px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
            <Landmark className="h-3.5 w-3.5 text-primary" /> Public Sector Delivery
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] text-gradient">
            Selected Public Sector Engagements
          </h1>
          <p className="mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Representative delivery experience across state agencies, local governments, K-12 districts, higher education institutions, and public-sector organizations.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Detailed project references, methodologies, and performance validations are available upon request and subject to applicable Non-Disclosure Agreements (NDAs).
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:info@piscalex.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
              <Calendar className="h-4 w-4" /> Request Project References
            </a>
            <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
              <Handshake className="h-4 w-4" /> Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── CASE STUDIES ─────────────────── */
function CaseStudies() {
  const studies = [
    {
      sector: "State Agency",
      icon: Building2,
      link: "#",
      title: "Statewide Citizen Services Portal Modernization",
      desc: "Modernized a legacy citizen services platform into a cloud-native digital experience supporting millions of residents while improving accessibility, performance, and service delivery.",
      outcomes: [
        "62% reduction in page load times",
        "Zero-downtime production transition",
        "Section 508 accessibility compliance achieved",
      ],
    },
    {
      sector: "K-12 Education",
      icon: GraduationCap,
      link: "/casestudies/districtwide-data-kansas",
      title: "District-Wide Data Dashboard Solution",
      desc: "Develop a centralized districtwide analytics platform to replace fragmented reporting across siloed systems.",
      outcomes: [
        "Serving ~21,000 students across Pre-K through Grade 12",
        "Real-time operational dashboards",
        "FERPA-aligned data governance framework",
      ],
    },
    {
      sector: "Higher Education",
      icon: GraduationCap,
      link: "#",
      title: "ERP & Financial Aid Process Optimization",
      desc: "Enhanced enterprise financial operations and automated aid-disbursement workflows to improve operational efficiency and user adoption.",
      outcomes: [
        "48-hour implementation turnaround",
        "92% staff adoption within 30 days",
        "$600K recovered through process optimization",
      ],
    },
    {
      sector: "Municipal Government",
      icon: Phone,
      link: "#",
      title: "311 Contact Center & Citizen Engagement Modernization",
      desc: "Implemented a multilingual citizen engagement platform combining contact center operations, self-service capabilities, and case management.",
      outcomes: [
        "Average handling time reduced to 2.4 minutes",
        "99.7% SLA compliance achieved",
        "Full bilingual service coverage",
      ],
    },
    {
      sector: "State Health Agency",
      icon: Database,
      link: "#",
      title: "Public Health Data Warehouse & Predictive Analytics",
      desc: "Developed a secure analytics platform supporting statewide reporting, operational intelligence, and predictive modeling initiatives.",
      outcomes: [
        "Reporting latency reduced from days to hours",
        "12 machine learning models deployed",
        "StateRAMP-ready architecture",
      ],
    },
    {
      sector: "Community College System",
      icon: Cloud,
      link: "#",
      title: "Cloud Migration & Managed Operations",
      desc: "Modernized infrastructure and migrated critical workloads to the cloud while establishing a co-managed operations model.",
      outcomes: [
        "38% infrastructure cost reduction",
        "71% improvement in incident resolution times",
        "Zero Priority-1 incidents during year one",
      ],
    },
  ];

  return (
    <section className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Featured Engagements"
          title="Examples of Modernization, Cloud, Data, and Transformation"
          sub="Modernization, cloud, data, citizen services, and enterprise transformation initiatives across the public sector."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {studies.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-7 flex flex-col hover:-translate-y-1 hover:bg-white/[0.05] transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.sector}</div>
                  <h3 className="font-display font-semibold text-lg leading-tight">{s.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-5 space-y-2">
                {s.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{o}</span>
                  </div>
                ))}
              </div>
              <a
                href={s.link}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition text-sm font-medium max-w-[250px] ml-4 mt-4" >
                View Full Case Study <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 glass px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
          <Handshake className="h-3.5 w-3.5 text-primary" /> Start the Conversation
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-gradient leading-tight">
          Looking for Relevant Public Sector Experience?
        </h2>
        <p className="mt-5 text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you are evaluating a modernization initiative, pursuing a government opportunity, or seeking a qualified delivery partner, our team can share relevant experience and discuss how we can support your objectives.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://calendly.com/amjad-pi-pisolglobal/ussled" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium hover:opacity-90 transition shadow-lg shadow-accent/20">
            <Calendar className="h-4 w-4" /> Schedule a Consultation
          </a>
          <a href="mailto:info@piscalex.us" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-white/5 transition">
            <Mail className="h-4 w-4" /> Request Project References
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

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}