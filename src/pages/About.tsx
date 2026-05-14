import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import aboutBanner from "@/assets/banner-about.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Building2,
  Target,
  Compass,
  Globe2,
  ShieldCheck,
  Rocket,
  Users,
  Award,
  TrendingUp,
  Zap,
  CheckCircle2,
  MapPin,
} from "lucide-react";

/* -------------------------------------------------------------- */
/*  Company Overview                                              */
/* -------------------------------------------------------------- */
function CompanyOverview() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { value: "35+", label: "Specialists" },
    { value: "3", label: "Global hubs" },
    { value: "20+", label: "Years SI heritage" },
    { value: "100%", label: "Outcome-based" },
  ];
  return (
    <section id="overview" className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className={`lg:col-span-5 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Building2 size={14} /> Company Overview
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            An Amsterdam-founded enterprise consultancy, built by SI veterans.
          </h2>
        </div>
        <div className={`lg:col-span-7 space-y-5 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Nextgenlytics is a next-generation enterprise consulting and services firm
            specialising in <strong className="text-foreground">SAP, Microsoft, Data & AI,
            and Cloud</strong> transformations. We pair Tier-1 system integrator
            experience with our own delivery platform — <strong className="text-foreground">BlueGecko</strong> —
            to make enterprise programmes faster, leaner, and predictable.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            Headquartered at <strong className="text-foreground">B. Amsterdam</strong>, with delivery
            centres in <strong className="text-foreground">Hyderabad</strong> and <strong className="text-foreground">Lucknow</strong>,
            we operate as a single, accountable team — not an offshore subcontracting chain.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/60 bg-card p-4 text-center shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="text-2xl md:text-3xl font-bold font-heading text-primary">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Vision & Mission                                              */
/* -------------------------------------------------------------- */
function VisionMission() {
  const { ref, isVisible } = useScrollReveal();
  const cards = [
    {
      icon: Compass,
      tag: "Our Vision",
      title: "Be Europe's most trusted enterprise transformation partner.",
      body: "A consultancy where senior practitioners — not pyramids — deliver enterprise outcomes, powered by our own BlueGecko platform.",
      accent: "from-primary/10 to-primary/0",
    },
    {
      icon: Target,
      tag: "Our Mission",
      title: "Make enterprise migrations faster, leaner, and predictable.",
      body: "We compress timelines and de-risk transformation by combining decades of SI expertise with productised delivery accelerators.",
      accent: "from-accent/15 to-accent/0",
    },
  ];
  return (
    <section id="vision-mission" className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Target size={14} /> Vision & Mission
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            What we're building, and why it matters.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <article
              key={c.tag}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-8 md:p-10 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent} opacity-60`} aria-hidden />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <c.icon size={22} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">{c.tag}</p>
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-foreground font-heading text-balance">
                  {c.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Our Journey (Timeline)                                        */
/* -------------------------------------------------------------- */
function OurJourney() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const milestones = [
    { year: "2019", title: "Founding vision", body: "Hugo Cooijmans and co-founders shape the model: senior-led delivery, no pyramids." },
    { year: "2021", title: "BlueGecko platform", body: "Internal accelerators consolidated into a productised delivery platform." },
    { year: "2023", title: "Hyderabad hub", body: "First India delivery centre opens — onshore-orchestrated, never subcontracted." },
    { year: "2024", title: "Amsterdam HQ", body: "Headquarters established at B. Amsterdam to anchor European clients." },
    { year: "2025", title: "Lucknow expansion", body: "Second India hub opens, scaling specialist capacity across SAP, MS, Data & AI." },
    { year: "2026", title: "AI Agents practice", body: "Dedicated practice operationalising agentic systems for enterprise outcomes." },
  ];
  return (
    <section id="journey" className="container py-20 md:py-28" ref={ref}>
      <div className={`max-w-2xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Rocket size={14} /> Our Journey
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
          From founding insight to a productised delivery platform.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          A short timeline of the milestones that shaped Nextgenlytics into the firm it is today.
        </p>
      </div>

      <div className="relative mt-16">
        {/* Vertical spine (desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" aria-hidden />

        <ol className="space-y-10 md:space-y-16">
          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <li
                key={m.year}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent ring-4 ring-background shadow-md shadow-accent/30" />

                <div className={`${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider">
                    {m.year}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground font-heading">{m.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Global Presence                                               */
/* -------------------------------------------------------------- */
function GlobalPresence() {
  const { ref, isVisible } = useScrollReveal();
  const offices = [
    {
      city: "Amsterdam",
      country: "Netherlands",
      role: "Headquarters",
      address: "B. Amsterdam, Johan Huizingalaan 763A, 1066 VH",
      tag: "EU Client Engagement",
    },
    {
      city: "Hyderabad",
      country: "India",
      role: "Delivery Hub",
      address: "Specialist engineering & delivery teams",
      tag: "SAP · D365 · Cloud",
    },
    {
      city: "Lucknow",
      country: "India",
      role: "Delivery Hub",
      address: "Specialist engineering & AMS teams",
      tag: "Data & AI · AMS",
    },
  ];
  return (
    <section id="presence" className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Globe2 size={14} /> Global Presence
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One team, three hubs, one accountable delivery model.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Onshore engagement orchestration in Amsterdam, paired with senior delivery
            capacity across two Indian hubs — never subcontracted.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {offices.map((o, i) => (
            <article
              key={o.city}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {o.role}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-foreground font-heading">{o.city}</h3>
              <p className="text-sm font-medium text-primary">{o.country}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.address}</p>
              <div className="mt-5 pt-5 border-t border-border/60">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground/80 text-xs font-semibold">
                  {o.tag}
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Why Choose Nextgenlytics                                      */
/* -------------------------------------------------------------- */
function WhyChoose() {
  const { ref, isVisible } = useScrollReveal();
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Senior-led delivery",
      body: "Tier-1 SI veterans run engagements end-to-end. No pyramids, no surprise junior hand-offs.",
    },
    {
      icon: Zap,
      title: "BlueGecko platform",
      body: "Productised accelerators compress migration timelines and de-risk cutovers.",
    },
    {
      icon: Users,
      title: "One accountable team",
      body: "Onshore-orchestrated, never subcontracted. Single throat to choke across hubs.",
    },
    {
      icon: TrendingUp,
      title: "Outcome-based engagements",
      body: "Commercial models tied to measurable enterprise outcomes — not staff augmentation.",
    },
    {
      icon: Award,
      title: "Specialist depth",
      body: "Dedicated practices for SAP, Microsoft, Data & AI, Cloud and AMS — no generalists.",
    },
    {
      icon: CheckCircle2,
      title: "European delivery standards",
      body: "EU-grade governance, security, and engagement quality across all three hubs.",
    },
  ];
  return (
    <section id="why" className="container py-20 md:py-28" ref={ref}>
      <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Award size={14} /> Why Choose Nextgenlytics
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
          Six reasons enterprises trust us with their transformations.
        </h2>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {reasons.map((r, i) => (
          <article
            key={r.title}
            className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all">
              <r.icon size={22} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Page                                                          */
/* -------------------------------------------------------------- */
export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={aboutBanner}
          eyebrow="About Nextgenlytics"
          title="Built by the people who ran these programmes."
          description="Amsterdam-founded, globally delivered. We combine Tier-1 SI experience with our own BlueGecko platform to make enterprise migrations faster, leaner, and predictable."
        />

        <CompanyOverview />
        <VisionMission />
        <OurJourney />
        <GlobalPresence />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
}
