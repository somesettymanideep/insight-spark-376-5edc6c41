import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerHealthcare from "@/assets/banner-healthcare.jpg";
import intelligenceImg from "@/assets/healthcare-intelligence.jpg";
import expertiseImg from "@/assets/healthcare-expertise.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  HeartPulse,
  Cog,
  Sparkles,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Clock,
  UserCheck,
  ScrollText,
} from "lucide-react";

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <HeartPulse size={14} /> Healthcare
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            AI & ERP Solutions for Professional Staffing Services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            In the professional staffing industry, the primary asset is time. The faster you can
            identify, vet, and deploy the right talent, the more competitive your firm becomes. At{" "}
            <strong className="text-foreground">Nextgenlytics</strong>, we modernize staffing
            operations by integrating AI-driven talent orchestration into your SAP BTP or
            Microsoft Dynamics 365 environment. We help you move beyond manual resume screening
            to a proactive, "Agentic" model where data identifies the perfect match before the
            client even realizes the need.
          </p>
        </div>
        <div className={`relative ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={intelligenceImg}
            alt="Healthcare intelligence dashboard"
            loading="lazy"
            width={1280}
            height={896}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function KeyChallenges() {
  const { ref, isVisible } = useScrollReveal();
  const challenges = [
    {
      Icon: Clock,
      title: "High Time-to-Fill Cycles",
      body: "Manual screening and fragmented candidate databases lead to missed opportunities and slow placement speeds in a competitive market.",
    },
    {
      Icon: UserCheck,
      title: "Underutilized Bench Management",
      body: "Lack of real-time visibility into consultant availability results in unbillable bench time and lost revenue potential.",
    },
    {
      Icon: ScrollText,
      title: "Complex Compliance & Payroll",
      body: "Managing diverse contract types, cross-border compliance, and multi-currency payroll creates significant administrative friction and audit risks.",
    },
  ];
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Key Challenges
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Key challenges in professional staffing
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The pressures shaping every staffing firm — and the impact they have on operations.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((c, i) => (
            <article
              key={c.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurExpertise() {
  const { ref, isVisible } = useScrollReveal();
  const points = [
    "Specialized AI Agents & workflows for high-volume talent pools",
    "IT, Healthcare, and Executive Search domain expertise",
    "Human capital data turned into a competitive advantage",
    "Staffing intelligence as dynamic as the global workforce",
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={expertiseImg}
            alt="Healthcare professionals collaborating"
            loading="lazy"
            width={1280}
            height={896}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
        <div className={`order-1 lg:order-2 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cog size={14} /> Our Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Building the foundation for seamless, enterprise-grade talent integration
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
            At Nextgenlytics, we ensure that your staffing intelligence is as dynamic as the
            global workforce. Nextgenlytics provides expert AI and ERP implementation for staffing
            agencies and professional service firms managing high-volume talent pools. Whether you
            specialize in IT, Healthcare, or Executive Search, we provide the specialized AI
            Agents and workflows to turn your human capital data into a competitive advantage.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PracticeAreas() {
  const { ref, isVisible } = useScrollReveal();
  const practices = [
    {
      Icon: Database,
      tag: "SAP Practice",
      title: "Industrial-grade ERP, modernised",
      items: [
        {
          h: "Modernize with SAP S/4HANA & RISE",
          b: "Transition legacy HCM and project resourcing modules to a cloud-native environment for unified talent, finance, and project visibility.",
        },
        {
          h: "Optimize with BTP & BDC",
          b: "Leverage SAP Business Technology Platform to build candidate portals and use BDC for high-volume migration of consultant and client master data.",
        },
        {
          h: "Insight with Analytics Cloud (SAC)",
          b: "Centralize bench, billing, and placement data into a single pane of glass for real-time utilization analysis and executive decision-making.",
        },
      ],
    },
    {
      Icon: LineChart,
      tag: "Microsoft Dynamics 365",
      title: "Agile, AI-ready operations",
      items: [
        {
          h: "Agile Staffing with Business Central",
          b: "Implement streamlined contractor onboarding and automated timesheet workflows tailored for mid-market staffing firms and consultancies.",
        },
        {
          h: "Legacy AX Modernization",
          b: "Transform outdated Dynamics AX HR and project modules into modern, AI-ready ecosystems to eliminate technical debt across talent operations.",
        },
        {
          h: "End-to-End Managed Services",
          b: "Ensure continuous uptime and performance optimization with dedicated support for your entire Microsoft ERP and talent stack.",
        },
      ],
    },
  ];
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cog size={14} /> Technology Practice Areas
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Specialized toolsets for healthcare transformation
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Modernization and managed services across the SAP and Microsoft ecosystems.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {practices.map((p, i) => (
            <article
              key={p.tag}
              className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</p>
                  <h3 className="text-xl font-bold text-foreground font-heading">{p.title}</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-5">
                {p.items.map((it) => (
                  <li key={it.h} className="border-l-2 border-accent/60 pl-4">
                    <h4 className="text-sm font-semibold text-foreground">{it.h}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.b}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Talk to a healthcare specialist
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerHealthcare}
          eyebrow="Industries · Healthcare"
          title="AI & ERP Solutions for Professional Staffing Services"
          description="AI-driven talent orchestration integrated into your SAP BTP or Microsoft Dynamics 365 environment for an Agentic staffing model."
        />
        <Intro />
        <KeyChallenges />
        <OurExpertise />
        <PracticeAreas />
      </main>
      <Footer />
    </div>
  );
}
