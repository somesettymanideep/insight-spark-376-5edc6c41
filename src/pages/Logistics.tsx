import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerLogistics from "@/assets/banner-logistics.jpg";
import intelligenceImg from "@/assets/logistics-intelligence.jpg";
import expertiseImg from "@/assets/logistics-expertise.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Truck,
  Cog,
  Sparkles,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Route,
  Eye,
  Warehouse,
} from "lucide-react";

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Truck size={14} /> Logistics & Supply Chain
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Building Resilient, Real-Time Global Logistics Networks
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            In a world of constant disruption, static supply chains are a liability. Today's
            logistics leaders require total visibility, predictive agility, and a
            "frictionless" flow of goods. At <strong className="text-foreground">Nextgenlytics</strong>,
            we modernize your logistics operations by integrating advanced AI and real-time
            tracking into your Microsoft Dynamics 365 or SAP S/4HANA ecosystem. We help you
            move beyond traditional tracking to create an autonomous supply chain that
            anticipates delays before they occur.
          </p>
        </div>
        <div className={`relative ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={intelligenceImg}
            alt="Logistics control room with global shipment tracking"
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
      Icon: Route,
      title: "Inefficient Route & Fleet Utilization",
      body: "Rising fuel costs and manual routing lead to increased delivery times and lower asset utilization. Every empty mile traveled impacts profitability and sustainability goals.",
    },
    {
      Icon: Eye,
      title: "Lack of Real-Time Visibility",
      body: "Fragmented data from carriers and warehouses creates blind spots. Logistics leaders struggle to provide accurate ETAs or respond quickly to transit delays.",
    },
    {
      Icon: Warehouse,
      title: "Warehouse Throughput Bottlenecks",
      body: "Manual inventory tracking and poor slotting optimization slow down fulfillment, driving up labor costs and missed service-level agreements (SLAs).",
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
            Key challenges in modern logistics
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The pressures shaping every supply chain — and the impact they have on operations.
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
    "Specialized AI Agents & workflows for global logistics networks",
    "3PL, freight forwarder, and private fleet expertise",
    "Movement data turned into competitive advantage",
    "Logistics intelligence as mobile and scalable as your fleet",
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={expertiseImg}
            alt="Automated smart warehouse with AGV robots"
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
            Building the foundation for the autonomous supply chain
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
            At Nextgenlytics, we ensure that your logistics intelligence is as mobile as your fleet.
            We provide expert AI and ERP implementation for logistics and transportation
            organizations managing complex global networks. Whether you are a 3PL provider, a
            freight forwarder, or a private fleet operator, we deliver the specialized AI Agents
            and workflows to turn your movement data into a competitive advantage.
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
          b: "Transition legacy transportation modules to a cloud-native environment to enable end-to-end freight visibility and global financial synchronization.",
        },
        {
          h: "Optimize with BTP & BDC",
          b: "Leverage the SAP Business Technology Platform to build custom tracking portals and use BDC for high-volume migration of carrier and vendor master data.",
        },
        {
          h: "Insight with Analytics Cloud (SAC)",
          b: "Centralize shipping, warehouse, and financial data into a single pane of glass for real-time cost-to-serve analysis and executive decision-making.",
        },
      ],
    },
    {
      Icon: LineChart,
      tag: "Microsoft Dynamics 365",
      title: "Agile, AI-ready operations",
      items: [
        {
          h: "Agile Logistics with Business Central",
          b: "Implement streamlined warehouse management (WMS) and automated replenishment workflows tailored for mid-market distributors and 3PLs.",
        },
        {
          h: "Legacy AX Modernization",
          b: "Transform outdated Dynamics AX logistics modules into modern, AI-ready ecosystems to eliminate technical debt in your distribution network.",
        },
        {
          h: "End-to-End Managed Services",
          b: "Ensure continuous uptime for mission-critical logistics systems with dedicated support, keeping your fleet moving 24/7.",
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
            Specialized toolsets for supply chain transformation
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
            Talk to a logistics specialist
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Logistics() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerLogistics}
          eyebrow="Industries · Logistics & Supply Chain"
          title="Building Resilient, Real-Time Global Logistics Networks"
          description="AI and real-time tracking integrated into your Microsoft Dynamics 365 or SAP S/4HANA ecosystem for an autonomous supply chain."
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
