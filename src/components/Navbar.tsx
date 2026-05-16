import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.jpeg";
import { Menu, X, ChevronDown, ArrowRight, Factory, Cog, FileText, Database, BarChart3, LifeBuoy, Truck, ShoppingBag, HeartPulse, Landmark, Users, Zap } from "lucide-react";

const solutionsMenu = [
  {
    title: "SAP Solutions",
    desc: "Modernize your ERP backbone with SAP-led transformation.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
  {
    title: "Microsoft Solutions",
    desc: "Unlock productivity and intelligence across the Microsoft stack.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
  {
    title: "AI Solutions",
    desc: "Operationalize AI to drive measurable business value.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
  {
    title: "Data Engineering",
    desc: "Build scalable data foundations for analytics and AI.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
  {
    title: "AMS Services",
    desc: "Keep critical platforms running at enterprise standard.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
  {
    title: "Cloud Solutions",
    desc: "Migrate, modernize and optimize across hybrid cloud.",
    items: ["Problem Solved", "Business Outcome", "Technologies", "Industry Relevance"],
  },
];

const insightsMenu = [
  { label: "Thought Leadership", icon: "✍️" },
  { label: "Blogs", icon: "📝" },
  { label: "Whitepapers", icon: "📃" },
  { label: "Reports", icon: "📊" },
  { label: "Webinars", icon: "🎥" },
  { label: "Events", icon: "📅" },
  { label: "Product Updates", icon: "🔄" },
  { label: "Research", icon: "🔬" },
];

const aboutMenu: { label: string; icon: string; href: string }[] = [
  { label: "About Nextgenlytics", icon: "🏢", href: "/about" },
  { label: "Our Team", icon: "👥", href: "/team" },
];

const productsMenu = [
  { label: "BlueGecko Platform", icon: "★" },
  { label: "Falcon Mapping", icon: "◈" },
  { label: "Code Cheetah", icon: "⌨" },
  { label: "Owl Sight", icon: "◉" },
  { label: "Orca Migrate", icon: "↔" },
  { label: "AI Agents", icon: "🤖" },
  { label: "Business Metrics", icon: "📈" },
];

const clientWorkMenu = [
  { label: "Manufacturing SAP Transformation", Icon: Factory },
  { label: "D365 AMS Engagement", Icon: Cog },
  { label: "Invoice Automation", Icon: FileText },
  { label: "AI Data Migration", Icon: Database },
  { label: "Analytics Transformation", Icon: BarChart3 },
  { label: "Managed Services Programs", Icon: LifeBuoy },
];

const industriesMenu = [
  { label: "Manufacturing", desc: "Smart factories and connected operations.", Icon: Factory, href: "/industries/manufacturing" },
  { label: "Logistics & Supply Chain", desc: "End-to-end visibility and resilience.", Icon: Truck, href: "/industries/logistics" },
  { label: "Retail & Wholesale", desc: "Omnichannel commerce and demand insight.", Icon: ShoppingBag, href: "/industries/retail" },
  { label: "Healthcare", desc: "Patient-centric data and compliance.", Icon: HeartPulse, href: "/industries/healthcare" },
  { label: "Financial Services", desc: "Secure, real-time financial intelligence.", Icon: Landmark, href: "/industries/financial-services" },
  { label: "Staffing", desc: "Workforce analytics and talent operations.", Icon: Users, href: "/industries/staffing" },
  { label: "Energy & Utilities", desc: "Sustainable, data-driven grid operations.", Icon: Zap, href: "/industries/energy" },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#solutions", hasMenu: "solutions" as const },
  { label: "Products", href: "#products", hasMenu: "products" as const },
  { label: "Industries", href: "#industries", hasMenu: "industries" as const },
  { label: "Client Work", href: "#cases", hasMenu: "clientWork" as const },
  { label: "Insights", href: "#insights", hasMenu: "insights" as const },
  { label: "About", href: "#about", hasMenu: "about" as const },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

type MenuKey = "solutions" | "insights" | "about" | "products" | "clientWork" | "industries" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenuKey, setOpenMenuKey] = useState<MenuKey>(null);
  const [mobileMenuKey, setMobileMenuKey] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isSubPage = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenuKey(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenuKey(null), 120);
  };
  const closeNow = () => setOpenMenuKey(null);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSubPage
          ? "bg-card shadow-[0_1px_3px_hsl(var(--border))]"
          : scrolled
          ? "bg-card/95 backdrop-blur-md shadow-[0_1px_3px_hsl(var(--border))]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="NextGenLytics" className="h-14 md:h-16 rounded" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) =>
            l.hasMenu ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => openMenu(l.hasMenu as MenuKey)}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() =>
                    setOpenMenuKey((v) => (v === l.hasMenu ? null : (l.hasMenu as MenuKey)))
                  }
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                  aria-expanded={openMenuKey === l.hasMenu}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openMenuKey === l.hasMenu ? "rotate-180" : ""}`}
                  />
                </button>

                {openMenuKey === "solutions" && l.hasMenu === "solutions" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(1100px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-6 animate-fade-in"
                    onMouseEnter={() => openMenu("solutions")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {solutionsMenu.map((s) => (
                        <div
                          key={s.title}
                          className="group rounded-xl border border-border/60 p-5 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-background"
                        >
                          <a
                            href="#solutions"
                            onClick={closeNow}
                            className="flex items-center gap-2 text-base font-bold text-foreground group-hover:text-primary"
                          >
                            {s.title}
                            <ArrowRight size={14} className="text-accent" />
                          </a>
                          <p className="text-xs text-muted-foreground mt-1.5 mb-3 leading-relaxed">
                            {s.desc}
                          </p>
                          <ul className="border-t border-border/60 divide-y divide-border/60">
                            {s.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#solutions"
                                  onClick={closeNow}
                                  className="flex items-center justify-between py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                >
                                  {item}
                                  <ArrowRight size={12} className="opacity-60" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "insights" && l.hasMenu === "insights" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(720px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("insights")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {insightsMenu.map((i) => (
                        <a
                          key={i.label}
                          href="#insights"
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="text-2xl">{i.icon}</span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                            {i.label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "about" && l.hasMenu === "about" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(360px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("about")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {aboutMenu.map((i) => (
                        <a
                          key={i.label}
                          href={i.href}
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="text-2xl">{i.icon}</span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                            {i.label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "products" && l.hasMenu === "products" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(720px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("products")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {productsMenu.map((i) => (
                        <a
                          key={i.label}
                          href="#products"
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="text-2xl">{i.icon}</span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                            {i.label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "clientWork" && l.hasMenu === "clientWork" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(820px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("clientWork")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 grid-rows-3 grid-flow-col gap-2">
                      {clientWorkMenu.map(({ label, Icon }) => (
                        <a
                          key={label}
                          href="#cases"
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={18} />
                          </span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1 whitespace-nowrap">
                            {label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "industries" && l.hasMenu === "industries" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(880px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("industries")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2">
                      {industriesMenu.map(({ label, desc, Icon, href }) => (
                        <a
                          key={label}
                          href={href ?? "#industries"}
                          onClick={closeNow}
                          className="flex items-start gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={18} />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-semibold text-foreground group-hover:text-primary whitespace-nowrap">
                              {label}
                            </span>
                            <span className="block text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                              {desc}
                            </span>
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70 mt-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97] transition-all duration-200"
          >
            Book a Demo
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) =>
              l.hasMenu ? (
                <div key={l.label}>
                  <button
                    onClick={() =>
                      setMobileMenuKey((v) => (v === l.hasMenu ? null : (l.hasMenu as MenuKey)))
                    }
                    className="w-full flex items-center justify-between text-sm font-medium text-foreground/80 py-2"
                  >
                    {l.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileMenuKey === l.hasMenu ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileMenuKey === "solutions" && l.hasMenu === "solutions" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2 space-y-3">
                      {solutionsMenu.map((s) => (
                        <div key={s.title}>
                          <p className="text-sm font-bold text-foreground mt-2">{s.title}</p>
                          <ul className="mt-1">
                            {s.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#solutions"
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileMenuKey(null);
                                  }}
                                  className="block py-1.5 text-sm text-foreground/70"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {mobileMenuKey === "insights" && l.hasMenu === "insights" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {insightsMenu.map((i) => (
                          <li key={i.label}>
                            <a
                              href="#insights"
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <span>{i.icon}</span>
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "about" && l.hasMenu === "about" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {aboutMenu.map((i) => (
                          <li key={i.label}>
                            <a
                              href={i.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <span>{i.icon}</span>
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "products" && l.hasMenu === "products" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {productsMenu.map((i) => (
                          <li key={i.label}>
                            <a
                              href="#products"
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <span>{i.icon}</span>
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "clientWork" && l.hasMenu === "clientWork" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {clientWorkMenu.map(({ label, Icon }) => (
                          <li key={label}>
                            <a
                              href="#cases"
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <Icon size={16} className="text-primary" />
                              <span>{label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "industries" && l.hasMenu === "industries" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {industriesMenu.map(({ label, desc, Icon, href }) => (
                          <li key={label}>
                            <a
                              href={href ?? "#industries"}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-start gap-2 py-2 text-sm text-foreground/80"
                            >
                              <Icon size={16} className="text-primary mt-0.5" />
                              <span className="flex-1">
                                <span className="block font-medium">{label}</span>
                                <span className="block text-xs text-muted-foreground">{desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground/70 py-2"
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-primary text-primary-foreground text-center"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
