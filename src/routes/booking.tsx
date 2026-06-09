import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Calendar, Clock, Phone } from "lucide-react";
import { SPORTS } from "@/lib/sports";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Court — Triangle Sports Academy" },
      { name: "description", content: "Submit a court booking inquiry. Our team will call you back to confirm." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", sport: "Badminton", date: "", time: "", duration: "1", message: "",
  });

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll('section')) as HTMLElement[];
    sections.forEach((s, i) => {
      s.classList.add('reveal-hidden');
      s.dataset.index = String(i);
      const cards = Array.from(s.querySelectorAll('.card-lift')) as HTMLElement[];
      cards.forEach((c, j) => {
        c.classList.add('reveal-hidden');
        c.dataset.index = String(i * 10 + j);
      });
    });

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          if (!el.classList.contains('reveal-up')) {
            el.classList.remove('reveal-hidden');
            el.classList.add('reveal-up');
            const idx = Number(el.dataset.index || 0);
            el.style.animationDelay = `${idx * 60}ms`;
          }
          obs.unobserve(el);
        }
      });
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    const targets = Array.from(root.querySelectorAll('.reveal-hidden')) as HTMLElement[];
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) {
      alert("Please enter your name and a valid 10-digit mobile number.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div ref={rootRef}>
        <section className="min-h-[80vh] flex items-center mx-auto max-w-3xl px-5 lg:px-8 py-24">
          <div className="w-full glass-strong rounded-3xl p-10 text-center border reveal-scale">
            <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-accent to-highlight inline-flex items-center justify-center shadow-accent-glow">
              <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="mt-5 text-3xl sm:text-4xl font-display font-bold">Booking inquiry received!</h1>
            <p className="mt-3 text-muted-foreground">We will contact you shortly to confirm your booking. For urgent slots, call us directly.</p>
            <a href="tel:09500186817" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow"><Phone className="h-4 w-4" /> Call 095001 86817</a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={rootRef}>
      <section className="pt-20 pb-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Court booking</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-display font-extrabold text-balance">Reserve your <span className="gradient-text">slot</span>.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Tell us when you'd like to play. Our team will call you back to confirm your booking — no online payment needed.</p>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 grid lg:grid-cols-3 gap-6">
        <form onSubmit={onSubmit} className="lg:col-span-2 glass-strong rounded-3xl p-7 sm:p-9 border space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" required>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={80} required className="input" placeholder="Your full name" />
            </Field>
            <Field label="Mobile Number" required>
              <input value={form.phone} onChange={(e) => update("phone", e.target.value)} required pattern="[0-9 ]{10,12}" className="input" placeholder="10-digit mobile" />
            </Field>
            <Field label="Sport">
              <select value={form.sport} onChange={(e) => update("sport", e.target.value)} className="input">
                {SPORTS.map((s) => <option key={s.slug}>{s.name}</option>)}
              </select>
            </Field>
            <Field label="Duration">
              <select value={form.duration} onChange={(e) => update("duration", e.target.value)} className="input">
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
              </select>
            </Field>
            <Field label="Date" required>
              <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} required className="input" />
            </Field>
            <Field label="Preferred Timing" required>
              <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} required className="input" />
            </Field>
          </div>
          <Field label="Message">
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={500} rows={4} className="input resize-none" placeholder="Anything else we should know?" />
          </Field>
          <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-transform">
            Submit Booking Inquiry
          </button>
          <style>{`.input{width:100%;background:oklch(1 0 0 / 0.05);border:1px solid oklch(1 0 0 / 0.12);border-radius:10px;padding:12px 14px;color:var(--color-foreground);font-size:14px;outline:none;transition:border-color .2s, box-shadow .2s}.input:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px oklch(0.65 0.18 250 / 0.2)}`}</style>
        </form>

        <aside className="space-y-4">
          <Info icon={Calendar} title="Open Daily" body="Every day from 5:00 AM – 11:00 PM" />
          <Info icon={Clock} title="Flexible Slots" body="Book by the hour — 1 hr or 2 hr blocks" />
          <Info icon={Phone} title="Quick Confirmation" body="We'll call you within minutes to confirm" />
          <div className="rounded-2xl p-6 border" style={{ background: "var(--gradient-primary)" }}>
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Need help now?</div>
            <div className="mt-2 text-2xl font-display font-bold text-primary-foreground">095001 86817</div>
            <a href="tel:09500186817" className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-background/20 backdrop-blur text-primary-foreground font-semibold hover:bg-background/30 transition">Call now</a>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-accent"> *</span>}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Info({ icon: Icon, title, body }: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }) {
  return (
    <div className="glass rounded-2xl p-5 border flex gap-4">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-highlight inline-flex items-center justify-center shadow-glow shrink-0">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{body}</div>
      </div>
    </div>
  );
}
