import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hugoImg from "@/assets/hugo-cooijmans.jpg";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Hugo Cooijmans",
    role: "Co-Founder & SAP Lead",
    location: "Amsterdam, NL",
    bio: "Founding figure of the Dutch SAP SI ecosystem. Decades of SAP programme leadership across major NL enterprises. The credibility that opens doors.",
    image: hugoImg,
  },
  {
    name: "Co-Founder",
    role: "Co-Founder & Data/AI Lead",
    location: "Amsterdam, NL",
    bio: "Two decades architecting data platforms and AI systems at Tier-1 system integrators. Drives the BlueGecko product vision and delivery model.",
    image: null,
  },
  {
    name: "Delivery Lead",
    role: "Head of Delivery — India",
    location: "Hyderabad, IN",
    bio: "Runs onshore-offshore engagement orchestration. Ensures European delivery standards across our Hyderabad and Lucknow specialist teams.",
    image: null,
  },
  {
    name: "Microsoft Practice Lead",
    role: "D365 & Azure Lead",
    location: "Amsterdam, NL",
    bio: "Microsoft stack veteran covering Dynamics 365, Power Platform, and Azure data services for enterprise transformations.",
    image: null,
  },
  {
    name: "AI Practice Lead",
    role: "Applied AI & Agents Lead",
    location: "Amsterdam, NL",
    bio: "Leads our AI Agents portfolio — operationalising LLM and agentic systems for measurable enterprise outcomes.",
    image: null,
  },
  {
    name: "Cloud Practice Lead",
    role: "Cloud & AMS Lead",
    location: "Hyderabad, IN",
    bio: "Hybrid cloud migration, modernisation and 24/7 application managed services across SAP, Microsoft and data platforms.",
    image: null,
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
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/20 text-primary font-heading text-5xl font-bold">
      {initials}
    </div>
  );
}

export default function Team() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24 md:pt-28">
        <section className="container py-12 md:py-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Team
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground font-heading text-balance">
            The specialists behind Nextgenlytics
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            35+ practitioners across Amsterdam, Hyderabad, and Lucknow — combining
            Tier-1 SI experience with deep product engineering on BlueGecko.
          </p>
        </section>

        <section className="container pb-20 md:pb-28" ref={ref}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((m, idx) => (
              <article
                key={m.name + idx}
                className={`group bg-card rounded-2xl border border-border/60 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <Initials name={m.name} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground font-heading">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{m.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {m.location}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {m.bio}
                  </p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border/60">
                    <a
                      href="#"
                      aria-label={`${m.name} on LinkedIn`}
                      className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="mailto:Info@nextgenlytics.com"
                      aria-label={`Email ${m.name}`}
                      className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
