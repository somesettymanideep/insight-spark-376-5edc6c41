import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerCareers from "@/assets/banner-careers.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Heart,
  Rocket,
  GraduationCap,
  Globe2,
  Code2,
  Database,
} from "lucide-react";

const jobs = [
  {
    id: "sap-s4-consultant",
    title: "Senior SAP S/4HANA Consultant",
    department: "SAP Practice",
    location: "Amsterdam, NL · Hybrid",
    type: "Full-time",
    experience: "6+ years",
    Icon: Database,
    summary:
      "Lead end-to-end S/4HANA transformations for tier-1 European enterprises. Translate business outcomes into clean-core architectures across Finance, Supply Chain, and Manufacturing modules.",
    responsibilities: [
      "Own functional & technical design across S/4HANA core modules",
      "Run discovery workshops with C-suite and process owners",
      "Define migration roadmaps (Brownfield, Greenfield, Selective)",
      "Mentor offshore delivery pods on SAP BTP & Fiori extensions",
    ],
    requirements: [
      "6+ years implementing SAP ECC or S/4HANA in production",
      "Deep expertise in at least two modules (FI/CO, MM, SD, PP)",
      "Hands-on with SAP BTP, CAP, or Fiori extensibility patterns",
      "Excellent client-facing communication in English (Dutch a plus)",
    ],
  },
  {
    id: "ai-data-engineer",
    title: "AI & Data Engineering Lead",
    department: "Data & AI Practice",
    location: "Hyderabad, IN · Hybrid",
    type: "Full-time",
    experience: "5+ years",
    Icon: Code2,
    summary:
      "Architect production-grade AI agents and lakehouse pipelines on our BlueGecko platform. Ship measurable business value through LLM-powered workflows for SAP & Microsoft customers.",
    responsibilities: [
      "Design agentic AI workflows on Azure OpenAI, Databricks, and LangGraph",
      "Build ELT/streaming pipelines on Delta Lake & Fabric",
      "Embed governance, evals, and observability into every release",
      "Partner with SAP & MS practices on data product roadmaps",
    ],
    requirements: [
      "5+ years building data platforms in Python & SQL at scale",
      "Production experience with LLMs, RAG, and vector stores",
      "Strong grasp of Azure Data Services or Databricks",
      "Track record shipping ML/AI to enterprise customers",
    ],
  },
];

const benefits = [
  {
    Icon: Rocket,
    title: "Senior-led work",
    body: "Every engagement is led by senior operators — no learning on the client's dime.",
  },
  {
    Icon: GraduationCap,
    title: "Continuous learning",
    body: "Annual certification budget across SAP, Microsoft, Databricks, and AWS.",
  },
  {
    Icon: Globe2,
    title: "Global exposure",
    body: "Work across Dutch, EU, and North American tier-1 enterprise programmes.",
  },
  {
    Icon: Heart,
    title: "People-first culture",
    body: "Flexible hybrid model, generous leave, and family-first scheduling.",
  },
];

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <Sparkles size={14} /> Careers at Nextgenlytics
        </span>
        <h2
          className={`mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight ${
            isVisible ? "animate-reveal-up delay-100" : "opacity-0"
          }`}
        >
          Build the next generation of enterprise intelligence
        </h2>
        <p
          className={`mt-5 text-lg text-muted-foreground leading-relaxed text-pretty ${
            isVisible ? "animate-reveal-up delay-200" : "opacity-0"
          }`}
        >
          We're a founder-led consultancy of SAP, Microsoft, and AI specialists shipping outcomes
          for European and global enterprises. If you love clean architecture, sharp delivery, and
          working alongside operators who've done it before — we'd like to meet you.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className={`group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <b.Icon size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground font-heading">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OpenRoles() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Briefcase size={14} /> Open Roles
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Two seats. Both senior. Both shipping from day one.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Hand-picked openings across our SAP and Data & AI practices.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {jobs.map((job, i) => (
            <article
              key={job.id}
              className={`group relative bg-card rounded-2xl border border-border/60 overflow-hidden shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <job.Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {job.department}
                    </p>
                    <h3 className="mt-1 text-xl md:text-2xl font-bold text-foreground font-heading leading-tight">
                      {job.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-secondary px-3 py-1.5 rounded-full">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-secondary px-3 py-1.5 rounded-full">
                    <Clock size={12} /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-secondary px-3 py-1.5 rounded-full">
                    <Users size={12} /> {job.experience}
                  </span>
                </div>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{job.summary}</p>

                <div className="mt-6 grid gap-5">
                  <div>
                    <h4 className="text-sm font-bold text-foreground font-heading">
                      What you'll do
                    </h4>
                    <ul className="mt-2.5 space-y-2">
                      {job.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground font-heading">
                      What we're looking for
                    </h4>
                    <ul className="mt-2.5 space-y-2">
                      {job.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/85">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-border/60">
                  <span className="text-xs text-muted-foreground">
                    Send your CV to <span className="font-semibold text-foreground">careers@nextgenlytics.com</span>
                  </span>
                  <a
                    href={`mailto:careers@nextgenlytics.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Apply now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm text-muted-foreground">
            Don't see your role?{" "}
            <a
              href="mailto:careers@nextgenlytics.com?subject=Open Application"
              className="font-semibold text-primary hover:underline"
            >
              Send us an open application →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerCareers}
          eyebrow="Careers"
          title="Join a senior-led team building enterprise AI"
          description="Help us bring SAP, Microsoft, and AI together for tier-1 customers across Europe and beyond."
        />
        <Intro />
        <OpenRoles />
      </main>
      <Footer />
    </div>
  );
}
