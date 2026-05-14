import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ScrollToTop from "@/components/ScrollToTop";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="pt-24 md:pt-28">
        <section className="container py-12 md:py-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            About Nextgenlytics
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground font-heading text-balance">
            Built by the people who ran these programmes.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            Amsterdam-founded, globally delivered. We combine Tier-1 SI experience with our own BlueGecko platform to make enterprise migrations faster, leaner, and predictable.
          </p>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
