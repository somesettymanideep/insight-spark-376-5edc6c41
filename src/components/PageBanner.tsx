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
        {/* Black overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/80" />
        
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

      <div className="relative container py-12 md:py-16">
        <div className={`max-w-2xl ${alignment} animate-reveal-up`}>
          <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/20 backdrop-blur text-primary-foreground text-[10px] font-semibold uppercase tracking-widest border border-accent/40">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-2xl md:text-4xl font-bold text-primary-foreground font-heading text-balance leading-tight drop-shadow-sm">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed text-pretty">
              {description}
            </p>
          )}
        </div>
      </div>

    </section>
  );
}
