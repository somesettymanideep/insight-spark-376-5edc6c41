import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import teamBanner from "@/assets/banner-team.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hugoImg from "@/assets/hugo-cooijmans.jpg";
import cofounderImg from "@/assets/team-cofounder.jpg";
import deliveryImg from "@/assets/team-delivery.jpg";
import microsoftImg from "@/assets/team-microsoft.jpg";
import aiImg from "@/assets/team-ai.jpg";
import cloudImg from "@/assets/team-cloud.jpg";
import sapImg from "@/assets/team-sap.jpg";
import { Linkedin, Mail, MapPin } from "lucide-react";

const founder = {
  name: "Hugo Cooijmans",
  role: "Co-Founder & SAP Lead",
  location: "Amsterdam, NL",
  bio: "Founding figure of the Dutch SAP SI ecosystem. Decades of SAP programme leadership across major NL enterprises — the credibility that opens doors and the operator instinct that closes deals.",
  image: hugoImg,
  highlights: [
    "30+ yrs SAP programme leadership",
    "Dutch SAP SI ecosystem pioneer",
    "Tier-1 enterprise references",
  ],
};

const team = [
  {
    name: "Co-Founder",
    role: "Co-Founder & Data / AI Lead",
    location: "Amsterdam, NL",
    bio: "Two decades architecting data platforms and AI systems at Tier-1 SIs. Drives the BlueGecko product vision and delivery model.",
    image: cofounderImg,
  },
  {
    name: "Delivery Lead",
    role: "Head of Delivery — India",
    location: "Hyderabad, IN",
    bio: "Runs onshore-offshore engagement orchestration. Ensures European delivery standards across Hyderabad and Lucknow specialist teams.",
    image: deliveryImg,
  },
  {
    name: "Microsoft Practice Lead",
    role: "D365 & Azure Lead",
    location: "Amsterdam, NL",
    bio: "Microsoft stack veteran across Dynamics 365, Power Platform, and Azure data services for enterprise transformations.",
    image: microsoftImg,
  },
  {
    name: "AI Practice Lead",
    role: "Applied AI & Agents Lead",
    location: "Amsterdam, NL",
    bio: "Leads our AI Agents portfolio — operationalising LLM and agentic systems for measurable enterprise outcomes.",
    image: aiImg,
  },
  {
    name: "Cloud Practice Lead",
    role: "Cloud & AMS Lead",
    location: "Hyderabad, IN",
    bio: "Hybrid cloud migration, modernisation, and 24/7 application managed services across SAP, Microsoft, and data platforms.",
    image: cloudImg,
  },
  {
    name: "SAP Architecture Lead",
    role: "S/4HANA Architect",
    location: "Lucknow, IN",
    bio: "End-to-end S/4HANA architecture, brownfield conversion, and clean-core delivery for regulated industries.",
    image: sapImg,
  },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 text-primary font-heading text-5xl font-bold">
      {initials}
    </div>
  );
}

function TeamCard({ m }: { m: (typeof team)[number] }) {
  return (
    <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border/60 shadow-md shadow-primary/5 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40">
      {/* Image with gradient overlay & floating name plate */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {m.image ? (
          <img
            src={m.image}
            alt={m.name}
            loading="lazy"
            width={768}
            height={768}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          />
        ) : (
          <Initials name={m.name} />
        )}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-primary border border-border/60 shadow-sm">
          <MapPin size={10} /> {m.location}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground font-heading">{m.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-primary">{m.role}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{m.bio}</p>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-4 flex items-center justify-between">
          <a
            href="mailto:Info@nextgenlytics.com"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group/cta"
          >
            Connect
            <span className="transition-transform group-hover/cta:translate-x-0.5">→</span>
          </a>
          <div className="flex items-center gap-1.5">
            <a
              href="#"
              aria-label={`${m.name} on LinkedIn`}
              className="p-2 rounded-full bg-muted/60 text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:Info@nextgenlytics.com"
              aria-label={`Email ${m.name}`}
              className="p-2 rounded-full bg-muted/60 text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}

export default function Team() {
  const { ref: founderRef, isVisible: founderVisible } = useScrollReveal();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);

  // Pause animation on hover for accessibility
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onEnter = () => (el.style.animationPlayState = "paused");
    const onLeave = () => (el.style.animationPlayState = "running");
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Duplicate the team list for a seamless infinite marquee
  const marquee = [...team, ...team];

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={teamBanner}
          eyebrow="Our Team"
          title="The specialists behind Nextgenlytics"
          description="35+ practitioners across Amsterdam, Hyderabad, and Lucknow — combining Tier-1 SI experience with deep product engineering on BlueGecko."
        />

        {/* Founder spotlight */}
        <section className="container pb-16 md:pb-24" ref={founderRef}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div
              className={`relative h-full lg:col-span-5 ${founderVisible ? "animate-reveal-up" : "opacity-0"}`}
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent blur-2xl" aria-hidden />
              <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-border/60 shadow-2xl shadow-primary/10 group">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent p-6">
                  <p className="text-primary-foreground/90 text-xs uppercase tracking-widest font-semibold">
                    Founder Spotlight
                  </p>
                  <p className="text-primary-foreground font-heading text-2xl font-bold mt-1">
                    {founder.name}
                  </p>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 flex flex-col justify-center ${founderVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Co-Founder
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
                {founder.name}
              </h2>
              <p className="mt-2 text-base font-semibold text-primary">{founder.role}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1">
                <MapPin size={12} /> {founder.location}
              </p>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
                {founder.bio}
              </p>
              <ul className="mt-6 space-y-2">
                {founder.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="mailto:Info@nextgenlytics.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail size={16} /> Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the team — slow infinite marquee */}
        <section className="pb-24 md:pb-32" ref={carouselRef}>
          <div className="container mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div className={`max-w-xl ${carouselVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Practice Leads
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-foreground font-heading">
                The team building and running it with us
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">Hover to pause →</p>
          </div>

          <div
            className={`relative overflow-hidden group ${
              carouselVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {/* Edge fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

            <div ref={trackRef} className="flex gap-6 md:gap-8 w-max animate-marquee will-change-transform py-4">
              {marquee.map((m, idx) => (
                <div key={m.name + idx} className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0">
                  <TeamCard m={m} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
