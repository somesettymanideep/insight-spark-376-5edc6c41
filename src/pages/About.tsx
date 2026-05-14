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
      number: "01",
      title: "Be Europe's most trusted enterprise transformation partner.",
      body: "A consultancy where senior practitioners — not pyramids — deliver enterprise outcomes, powered by our own BlueGecko platform.",
      pillars: ["Senior-led delivery", "Productised platform", "European trust"],
      proof: [
        { value: "100%", label: "Senior-led engagements" },
        { value: "3", label: "Global delivery hubs" },
        { value: "20+", label: "Years SI heritage" },
        { value: "9.4/10", label: "Client trust score" },
      ],
      tone: "primary" as const,
    },
    {
      icon: Target,
      tag: "Our Mission",
      number: "02",
      title: "Make enterprise migrations faster, leaner, and predictable.",
      body: "We compress timelines and de-risk transformation by combining decades of SI expertise with productised delivery accelerators.",
      pillars: ["Compress timelines", "De-risk cutovers", "Predictable outcomes"],
      proof: [
        { value: "50%", label: "Faster migrations" },
        { value: "35%", label: "Lower programme cost" },
        { value: "<9 mo", label: "Avg. D365 go-live" },
        { value: "98%", label: "On-time cutovers" },
      ],
      tone: "accent" as const,
    },
  ];
  return (
    <section id="vision-mission" className="relative section-alt py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />
      <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" aria-hidden />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-accent/15 blur-3xl -z-10" aria-hidden />

      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Target size={14} /> Vision & Mission
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            What we're building, and why it matters.
          </h2>
          <div className="mt-5 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((c, i) => {
            const isAccent = c.tone === "accent";
            return (
              <article
                key={c.tag}
                className={`group relative ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 180}ms` }}
              >
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${
                    isAccent ? "from-accent/40 via-accent/10 to-primary/20" : "from-primary/40 via-primary/10 to-accent/20"
                  } opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                  aria-hidden
                />
                <div className="relative h-full rounded-3xl border border-border/70 bg-card overflow-hidden shadow-lg shadow-primary/5 group-hover:-translate-y-1.5 transition-transform duration-500">
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${
                      isAccent ? "from-accent via-accent/70 to-primary" : "from-primary via-primary/70 to-accent"
                    }`}
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none select-none absolute -top-6 right-4 font-heading font-black text-[120px] md:text-[160px] leading-none tracking-tighter text-transparent"
                    style={{
                      WebkitTextStroke: `1.5px hsl(var(--${isAccent ? "accent" : "primary"}) / 0.18)`,
                    }}
                    aria-hidden
                  >
                    {c.number}
                  </span>
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center gap-4">
                      <div
                        className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-lg ${
                          isAccent
                            ? "bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-accent/30"
                            : "bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-primary/30"
                        } rotate-3 group-hover:rotate-0 transition-transform duration-500`}
                      >
                        <c.icon size={24} strokeWidth={2.2} />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-[0.2em] ${
                            isAccent ? "text-accent" : "text-primary"
                          }`}
                        >
                          {c.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">Chapter {c.number}</span>
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl md:text-2xl font-bold text-foreground font-heading text-balance leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {c.body}
                    </p>

                    {/* Proof points */}
                    <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {c.proof.map((p) => (
                        <div
                          key={p.label}
                          className={`relative rounded-xl border p-3 text-center transition-colors ${
                            isAccent
                              ? "border-accent/20 bg-accent/5 hover:bg-accent/10"
                              : "border-primary/15 bg-primary/5 hover:bg-primary/10"
                          }`}
                        >
                          <dt
                            className={`font-heading font-bold text-lg md:text-xl leading-none ${
                              isAccent ? "text-accent" : "text-primary"
                            }`}
                          >
                            {p.value}
                          </dt>
                          <dd className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground leading-tight">
                            {p.label}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent" />
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.pillars.map((p) => (
                        <li
                          key={p}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                            isAccent
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : "border-primary/20 bg-primary/5 text-primary"
                          }`}
                        >
                          <CheckCircle2 size={12} strokeWidth={2.5} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
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
    { year: "2019", title: "Founding vision", body: "Hugo Cooijmans and co-founders shape the model: senior-led delivery, no pyramids.", icon: Rocket },
    { year: "2021", title: "BlueGecko platform", body: "Internal accelerators consolidated into a productised delivery platform.", icon: Zap },
    { year: "2023", title: "Hyderabad hub", body: "First India delivery centre opens — onshore-orchestrated, never subcontracted.", icon: Building2 },
    { year: "2024", title: "Amsterdam HQ", body: "Headquarters established at B. Amsterdam to anchor European clients.", icon: MapPin },
    { year: "2025", title: "Lucknow expansion", body: "Second India hub opens, scaling specialist capacity across SAP, MS, Data & AI.", icon: Globe2 },
    { year: "2026", title: "AI Agents practice", body: "Dedicated practice operationalising agentic systems for enterprise outcomes.", icon: Award },
  ];
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-background to-background" aria-hidden />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10" aria-hidden />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10" aria-hidden />

      <div className="container">
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

        <div className="relative mt-20">
          {/* Vertical spine */}
          <div
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/10 via-primary/40 to-accent/40"
            aria-hidden
          />

          <ol className="space-y-12 md:space-y-20">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              const Icon = m.icon;
              return (
                <li
                  key={m.year}
                  className={`relative pl-20 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center ${
                    isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {/* Icon node on spine */}
                  <span
                    className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl shadow-primary/30 ring-4 ring-background rotate-3 hover:rotate-0 transition-transform duration-300"
                    aria-hidden
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </span>

                  {/* Spacer column on desktop for alternating layout */}
                  {!left && <div className="hidden md:block" />}

                  {/* Card */}
                  <div className={`group relative ${left ? "md:pr-10" : "md:pl-10"}`}>
                    {/* Connector arrow (desktop only) */}
                    <span
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-px bg-gradient-to-r ${
                        left ? "right-0 from-transparent to-primary/40" : "left-0 from-primary/40 to-transparent"
                      }`}
                      aria-hidden
                    />
                    <div
                      className={`relative rounded-2xl border border-border bg-card p-6 md:p-7 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ${
                        left ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`flex items-baseline gap-3 ${
                          left ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent leading-none">
                          {m.year}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-widest">
                          Milestone
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-foreground font-heading">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed text-sm md:text-base">
                        {m.body}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for left-aligned cards on desktop */}
                  {left && <div className="hidden md:block" />}
                </li>
              );
            })}
          </ol>
        </div>
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
