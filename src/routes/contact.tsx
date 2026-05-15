import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Navigation, Clock, CheckCircle2 } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Triangle Sports Academy, Salem" },
      { name: "description", content: "Visit us at Uththirappan Kaadu, Perumall Kovil Main St, Salem. Call 095001 86817." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      alert("Please enter your name and a valid 10-digit phone.");
      return;
    }
    setSent(true);
  };

  return (
    <>
      <section className="pt-20 pb-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Contact</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-display font-extrabold text-balance">Let's <span className="gradient-text">connect</span>.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Have a question? Drop us a message, give us a call, or visit the academy.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 grid lg:grid-cols-2 gap-6">
        {/* Form */}
        <div className="glass-strong rounded-3xl p-7 sm:p-9 border">
          {sent ? (
            <div className="text-center py-10 reveal-scale">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-accent to-highlight inline-flex items-center justify-center shadow-accent-glow">
                <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="mt-5 text-2xl font-display font-bold">Message sent!</h2>
              <p className="mt-2 text-muted-foreground">We will reach out to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="text-2xl font-display font-bold">Send us a message</h2>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={80} required className="ipt mt-1.5" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Phone</span>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required pattern="[0-9 ]{10,12}" className="ipt mt-1.5" placeholder="10-digit mobile" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={5} required className="ipt mt-1.5 resize-none" placeholder="How can we help?" />
              </label>
              <button type="submit" className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">Send Message</button>
              <style>{`.ipt{display:block;width:100%;background:oklch(1 0 0 / 0.05);border:1px solid oklch(1 0 0 / 0.12);border-radius:10px;padding:12px 14px;color:var(--color-foreground);font-size:14px;outline:none;transition:border-color .2s, box-shadow .2s}.ipt:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px oklch(0.65 0.18 250 / 0.2)}`}</style>
            </form>
          )}
        </div>

        {/* Right side */}
        <div className="space-y-5">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-glow">
            <img src={gallery1} alt="Academy" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl p-4">
              <div className="font-display font-bold text-lg">Triangle Sports Academy</div>
              <div className="text-xs text-muted-foreground mt-1">Uththirappan Kaadu, Perumall Kovil Main St, Salem 636010</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href="tel:09500186817" className="card-lift glass rounded-2xl p-5 border flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-highlight inline-flex items-center justify-center shadow-glow"><Phone className="h-5 w-5 text-primary-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">Call</div><div className="font-semibold">095001 86817</div></div>
            </a>
            <a href="https://wa.me/919500186817" target="_blank" rel="noreferrer" className="card-lift glass rounded-2xl p-5 border flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[oklch(0.72_0.18_150)] inline-flex items-center justify-center shadow-accent-glow"><MessageCircle className="h-5 w-5 text-white" /></div>
              <div><div className="text-xs text-muted-foreground">WhatsApp</div><div className="font-semibold">Chat with us</div></div>
            </a>
            <a href="https://maps.google.com/?q=Triangle+Sports+Academy+Salem+636010" target="_blank" rel="noreferrer" className="card-lift glass rounded-2xl p-5 border flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-highlight inline-flex items-center justify-center shadow-accent-glow"><Navigation className="h-5 w-5 text-accent-foreground" /></div>
              <div><div className="text-xs text-muted-foreground">Directions</div><div className="font-semibold">Open in Maps</div></div>
            </a>
            <div className="glass rounded-2xl p-5 border flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-muted inline-flex items-center justify-center"><Clock className="h-5 w-5 text-highlight" /></div>
              <div><div className="text-xs text-muted-foreground">Hours</div><div className="font-semibold">5 AM – 11 PM · Daily</div></div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border h-72">
            <iframe
              title="Triangle Sports Academy location"
              src="https://www.google.com/maps?q=Perumall+Kovil+Main+St,+Salem,+Tamil+Nadu+636010&output=embed"
              width="100%" height="100%" style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            Uththirappan Kaadu, Perumall Kovil Main St, Salem, Tamil Nadu 636010
          </div>
        </div>
      </section>
    </>
  );
}
