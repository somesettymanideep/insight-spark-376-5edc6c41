interface PageBannerProps {
  image: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function PageBanner({
  image,
  eyebrow,
  title,
  description,
  align = "center",
}: PageBannerProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
        {/* Brand color overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      {/* Subtle decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative container py-20 md:py-28">
        <div className={`max-w-3xl ${alignment} animate-reveal-up`}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 backdrop-blur text-primary-foreground text-xs font-semibold uppercase tracking-widest border border-accent/40">
            {eyebrow}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-primary-foreground font-heading text-balance leading-tight drop-shadow-sm">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 leading-relaxed text-pretty">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" aria-hidden />
    </section>
  );
}
