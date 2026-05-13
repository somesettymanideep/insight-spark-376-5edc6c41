import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowLeft, CalendarCheck, MonitorPlay } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

type Mode = "consultation" | "demo";

const COMPANY_EMAIL = "Info@nextgenlytics.com";
const COMPANY_LOCATION = "B. Amsterdam, Johan Huizingalaan 763A, 1066 VH, Amsterdam";

export default function Contact() {
  const [mode, setMode] = useState<Mode>("consultation");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredDate: "",
    product: "BlueGecko Platform",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Missing details", description: "Please fill in name and email." });
      return;
    }
    const subject =
      mode === "consultation"
        ? `Book Consultation – ${form.name} (${form.company || "—"})`
        : `Request Demo – ${form.product} – ${form.name}`;
    const lines =
      mode === "consultation"
        ? [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Company: ${form.company}`,
            `Phone: ${form.phone}`,
            `Preferred date: ${form.preferredDate}`,
            ``,
            `Message:`,
            form.message,
          ]
        : [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Company: ${form.company}`,
            `Phone: ${form.phone}`,
            `Product of interest: ${form.product}`,
            ``,
            `Message:`,
            form.message,
          ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast({ title: "Opening your email client", description: "We'll get back to you within one business day." });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-28 md:pt-32 pb-20">
        <div className="container max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="mt-6 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
            {/* Left: info */}
            <aside className="space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent">
                  Get in touch
                </span>
                <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Let's talk about your next move.
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Whether you need a strategic consultation or want to see our products in action,
                  we're here to help. Pick the option that fits, and our team will respond within
                  one business day.
                </p>
              </div>

              <div className="space-y-5 rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="mt-1 block font-semibold text-foreground hover:text-primary transition-colors break-all"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office</p>
                    <p className="mt-1 font-semibold text-foreground leading-relaxed">
                      {COMPANY_LOCATION}
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: form card */}
            <section className="rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 p-6 md:p-10">
              {/* Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-full bg-muted">
                <button
                  type="button"
                  onClick={() => setMode("consultation")}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    mode === "consultation"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setMode("demo")}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    mode === "demo"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MonitorPlay className="w-4 h-4" />
                  Request Demo
                </button>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {mode === "consultation" ? "Book a free consultation" : "Request a product demo"}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {mode === "consultation"
                    ? "Tell us about your goals and we'll set up a 30-minute discovery call."
                    : "See our platform in action with a tailored walkthrough by our solutions team."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+31 …" />
                  </div>
                </div>

                {mode === "consultation" ? (
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred date</Label>
                    <Input id="preferredDate" type="date" value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="product">Product of interest</Label>
                    <select
                      id="product"
                      value={form.product}
                      onChange={(e) => update("product", e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option>BlueGecko Platform</option>
                      <option>Falcon Mapping</option>
                      <option>Code Cheetah</option>
                      <option>Owl Sight</option>
                      <option>Orca Migrate</option>
                      <option>AI Agents</option>
                      <option>Business Metrics</option>
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {mode === "consultation" ? "What would you like to discuss?" : "What would you like to see?"}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={
                      mode === "consultation"
                        ? "Briefly describe your challenge or goals…"
                        : "Tell us which use cases or features you'd like to explore…"
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97] transition-all duration-200"
                >
                  {mode === "consultation" ? "Book Consultation" : "Request Demo"} →
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by NextGenLytics about your enquiry.
                </p>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
