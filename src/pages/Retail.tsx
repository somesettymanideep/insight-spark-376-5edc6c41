import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerRetail from "@/assets/banner-retail.jpg";
import retailImg from "@/assets/retail-intelligence.jpg";
import wholesaleImg from "@/assets/wholesale-intelligence.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  ShoppingBag,
  Cog,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers,
  Package,
  UserPlus,
  Percent,
  Gauge,
  Network,
  Database,
  LineChart,
} from "lucide-react";

type Challenge = { Icon: React.ComponentType<{ size?: number }>; title: string; body: string };

function Section({
  eyebrow,
  EyebrowIcon,
  title,
  intro,
  image,
  imageAlt,
  reverse,
}: {
  eyebrow: string;
  EyebrowIcon: React.ComponentType<{ size?: number }>;
  title: string;
  intro: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`${reverse ? "lg:order-2" : ""} ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <EyebrowIcon size={14} /> {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            {title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">{intro}</p>
        </div>
        <div className={`relative ${reverse ? "lg:order-1" : ""} ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={image}
            alt={imageAlt}
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

function ChallengesGrid({ heading, sub, items }: { heading: string; sub: string; items: Challenge[] }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Key Challenges
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            {heading}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{sub}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((c, i) => (
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

function Expertise({
  heading,
  lead,
  body,
  points,
  ctaErpHref,
  ctaD365Href,
}: {
  heading: string;
  lead: string;
  body: React.ReactNode;
  points: string[];
  ctaErpHref?: string;
  ctaD365Href?: string;
}) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Cog size={14} /> Our Expertise
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
          {heading}
        </h2>
        <p className="mt-4 text-base font-medium text-foreground/90">{lead}</p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed text-pretty">{body}</p>
      </div>

      <ul className={`mt-10 max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-foreground/90 bg-card border border-border/60 rounded-xl p-4">
            <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {(ctaErpHref || ctaD365Href) && (
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {ctaErpHref && (
            <Link
              to={ctaErpHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <Database size={16} /> Explore SAP ERP services <ArrowRight size={16} />
            </Link>
          )}
          {ctaD365Href && (
            <Link
              to={ctaD365Href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold bg-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <LineChart size={16} /> Explore Dynamics 365 services <ArrowRight size={16} />
            </Link>
          )}
        </div>
      )}
    </section>
  );
}

export default function Retail() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerRetail}
          eyebrow="Industries · Retail & Wholesale"
          title="Revolutionizing the Customer Journey with Intelligent Commerce"
          description="From hyper-personalized retail experiences to high-velocity wholesale distribution — powered by AI and modern ERP."
        />

        {/* RETAIL */}
        <Section
          eyebrow="Retail"
          EyebrowIcon={ShoppingBag}
          title="Revolutionizing the Customer Journey with Intelligent Commerce"
          intro={
            <>
              In the era of instant gratification, retail success is defined by how well you know
              your customer. Today's retailers must bridge the gap between digital storefronts and
              physical aisles while managing complex, global inventories. At{" "}
              <strong className="text-foreground">Nextgenlytics</strong>, we empower retailers to
              deliver hyper-personalized experiences and high-efficiency operations. We help you
              transform raw consumer data into loyal, long-term relationships.
            </>
          }
          image={retailImg}
          imageAlt="Retail customer analytics dashboard"
        />

        <ChallengesGrid
          heading="Key challenges in modern retail"
          sub="The pressures shaping every retail brand — and the impact they have on operations."
          items={[
            {
              Icon: Layers,
              title: "Fragmented Omni-channel Experience",
              body: "Disconnects between online storefronts and physical locations lead to inaccurate stock levels and inconsistent customer service across channels.",
            },
            {
              Icon: Package,
              title: "Inventory Inaccuracy",
              body: "Poor demand visibility results in overstocking or stockouts, directly impacting margins and failing to meet consumer expectations in real-time.",
            },
            {
              Icon: UserPlus,
              title: "Lack of Personalization",
              body: "Generic marketing and a lack of a 360-degree customer view lead to lower engagement and reduced lifetime value in a highly competitive market.",
            },
          ]}
        />

        <Expertise
          heading="Building the foundation for intelligent commerce"
          lead="At Nextgenlytics, we ensure that your retail intelligence scales as fast as your brand."
          body="Nextgenlytics provides expert AI and ERP implementation for retail organizations managing multi-channel and high-volume environments. Whether you are a global fashion brand, a grocery chain, or a specialized boutique, we provide the specialized AI Agents and workflows to turn your transaction data into a competitive advantage."
          points={[
            "360° customer data and personalization engines",
            "Real-time inventory and omnichannel orchestration",
            "AI-driven demand forecasting and pricing",
            "Connected store, e-commerce, and fulfillment ops",
          ]}
          ctaErpHref="/services/sap-erp"
        />

        {/* WHOLESALE */}
        <Section
          reverse
          eyebrow="Wholesale & Distribution"
          EyebrowIcon={Network}
          title="Maximizing Margins through Intelligent Volume Management"
          intro={
            <>
              In the high-volume world of wholesale, success is measured in pennies and seconds.
              With global supply chains becoming more volatile and B2B buyers demanding a B2C-like
              digital experience, distributors must evolve. At{" "}
              <strong className="text-foreground">Nextgenlytics</strong>, we modernize wholesale
              operations by embedding AI. We help you optimize your inventory turnover, protect
              your margins, and build a resilient distribution network that thrives on precision.
            </>
          }
          image={wholesaleImg}
          imageAlt="Wholesale distribution warehouse operations"
        />

        <ChallengesGrid
          heading="Key challenges in modern wholesale"
          sub="What distributors face today — and how it shows up across operations."
          items={[
            {
              Icon: Percent,
              title: "Complex Margin Management",
              body: "Volatile market prices and complex supplier rebate structures make it difficult to maintain consistent profitability across high-volume transactions.",
            },
            {
              Icon: Gauge,
              title: "Inventory Velocity & Turnover",
              body: "Poor visibility into seasonal demand leads to excessive carrying costs or stockouts of critical high-demand items.",
            },
            {
              Icon: Network,
              title: "Fragmented B2B Relationships",
              body: "Manual order processing and a lack of digital self-service portals lead to higher operational costs and slower order-to-cash cycles.",
            },
          ]}
        />

        <Expertise
          heading="Building the foundation for high-velocity, resilient value chains"
          lead="At Nextgenlytics, we ensure that your wholesale intelligence is as robust as your warehouse."
          body="We bring together deep SAP S/4HANA and Microsoft Dynamics 365 expertise with a strong understanding of high-volume B2B environments. Our team combines functional excellence, operational insight, and proven experience with leading global distributors to ensure your transformation is seamless and scalable."
          points={[
            "Margin and rebate intelligence across volatile markets",
            "Inventory velocity and turnover optimization",
            "B2B self-service portals and order-to-cash automation",
            "Resilient, AI-augmented distribution networks",
          ]}
          ctaErpHref="/services/sap-erp"
          ctaD365Href="/services/dynamics-365"
        />
      </main>
      <Footer />
    </div>
  );
}
