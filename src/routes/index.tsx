import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Sparkles, ShieldCheck, Users, Lightbulb, Clock, Trophy, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-arena.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import badmintonImg from "@/assets/sport-badminton.jpg";
import gymImg from "@/assets/sport-gym.jpg";
import chessImg from "@/assets/sport-chess.jpg";
import carromImg from "@/assets/sport-carrom.jpg";
import ttImg from "@/assets/sport-tt.jpg";
import yogaImg from "@/assets/sport-yoga.jpg";
import { Particles } from "@/components/Particles";
import { SPORTS } from "@/lib/sports";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triangle Sports Academy — Premium Indoor Sports in Salem" },
      { name: "description", content: "Train, Play, Achieve at Triangle Sports Academy — Salem's premium indoor sports arena. Badminton, Gym, Chess, Carrom, TT & Yoga." },
    ],
  }),
  component: HomePage,
});

const sportImages: Record<string, string> = {
  badminton: badmintonImg, gym: gymImg, chess: chessImg, carrom: carromImg, tt: ttImg, yoga: yogaImg,
};

const stats = [
  { v: "6", l: "Sports" },
  { v: "1000+", l: "Active Members" },
  { v: "5★", l: "Avg. Rating" },
  { v: "18hr", l: "Open Daily" },
];

const reasons = [
  { icon: ShieldCheck, t: "International Standard Courts", d: "Synthetic mat flooring with proper line markings, true to tournament play." },
  { icon: Lightbulb, t: "Pro Stadium Lighting", d: "Glare-free overhead LED illumination across every court." },
  { icon: Users, t: "Positive Community", d: "Like-minded players, coaches and families in a friendly environment." },
  { icon: Clock, t: "Flexible Timings", d: "Open 5 AM – 11 PM. Book by the hour, train when it suits you." },
  { icon: Trophy, t: "Coaching Support", d: "From beginner to advanced — our coaches meet you where you are." },
  { icon: Sparkles, t: "Premium Facilities", d: "Clean, well-ventilated indoor arena designed for performance." },
];

const testimonials = [
  { n: "Karthik R.", r: "Wonderful experience and environment. The courts are top-notch and the staff is super friendly.", s: "Badminton Member" },
  { n: "Priya S.", r: "Positive environment and like-minded people. Best place to train consistently.", s: "Gym Member" },
  { n: "Arun M.", r: "The lighting and indoor courts are easily the best in Salem. Booking is also smooth.", s: "Weekend Player" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Indoor sports arena" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
        <Particles count={22} />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="reveal-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-highlight">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Salem · Tamil Nadu
            </div>
            <h1 className="reveal-up reveal-delay-1 mt-6 font-display font-extrabold text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
              Triangle <span className="gradient-text">Sports</span>
              <br />Academy
            </h1>
            <p className="reveal-up reveal-delay-2 mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              <span className="text-foreground font-semibold">Train · Play · Achieve.</span> Salem's premium indoor sports arena — built for performance, designed for the community.
            </p>
            <div className="reveal-up reveal-delay-3 mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform">
                Book Court <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/activities" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg glass-strong font-semibold hover:border-primary/40 transition-colors">
                Explore Activities
              </Link>
              <a href="tel:09500186817" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border font-semibold hover:bg-muted/40 transition-colors">
                <Phone className="h-4 w-4" /> Contact Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="reveal-scale reveal-delay-3 glass-strong rounded-2xl p-6 shadow-glow">
              <div className="text-xs uppercase tracking-[0.2em] text-highlight">Today</div>
              <div className="mt-2 text-2xl font-display font-bold">Open Now · 5 AM – 11 PM</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.l} className="rounded-xl bg-muted/30 p-4">
                    <div className="text-2xl font-display font-bold gradient-text">{s.v}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <Link to="/booking" className="mt-5 inline-flex w-full justify-center items-center gap-2 px-4 py-2.5 rounded-md bg-gradient-to-r from-accent to-highlight text-accent-foreground font-semibold">
                Book Your Slot
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* SPORTS GRID */}
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">What we offer</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Sports Activities</h2>
          </div>
          <Link to="/activities" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPORTS.map((s, i) => (
            <Link
              key={s.slug}
              to="/activities"
              hash={s.slug}
              className="card-lift group relative overflow-hidden rounded-2xl glass border"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={sportImages[s.image]} alt={s.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass-strong text-[10px] uppercase tracking-wider text-highlight">{s.tagline}</div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-display font-bold">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/30 transition" />
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 stadium-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-glow)" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Why choose us</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Built for performance.<br />Made for community.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div key={r.t} className="card-lift glass rounded-2xl p-6 border">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-highlight inline-flex items-center justify-center shadow-glow">
                  <r.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-display font-bold">{r.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURT BOOKING HIGHLIGHT */}
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-glow">
            <img src={gallery1} alt="Indoor courts" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            <div className="absolute bottom-5 left-5 glass-strong rounded-xl px-4 py-3">
              <div className="text-[10px] uppercase tracking-[0.2em] text-highlight">Live now</div>
              <div className="text-sm font-semibold">Hourly slots available today</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Court Booking</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Reserve a court.<br />Play at your time.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Book by the hour with flexible timings. Submit your inquiry and our team will call you to confirm your slot — quick, simple, no payment online.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["Hourly bookings — 1 hr or 2 hr slots", "Open 5:00 AM to 11:00 PM, every day", "Quick phone confirmation", "Group & individual bookings"].map((x) => (
                <li key={x} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />{x}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/booking" className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform">Book Your Slot</Link>
              <a href="tel:09500186817" className="px-6 py-3.5 rounded-lg glass-strong font-semibold inline-flex items-center gap-2"><Phone className="h-4 w-4" /> 095001 86817</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 stadium-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Players love it</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">From our community</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.n} className="card-lift relative glass-strong rounded-2xl p-6 border">
                <Quote className="h-6 w-6 text-primary/60" />
                <p className="mt-3 text-sm leading-relaxed">{t.r}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.s}</div>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Inside the arena</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-display font-bold">Gallery</h2>
          </div>
          <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[gallery1, badmintonImg, gymImg, gallery2, yogaImg, gallery3, ttImg, chessImg].map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
              <img src={src} alt="Arena" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.18 0.04 260 / 0.85), oklch(0.65 0.18 250 / 0.7))" }} />
            <Particles count={14} />
            <div className="relative px-6 sm:px-12 py-20 text-center">
              <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-balance">Ready to <span className="gradient-text">train</span> with us?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Walk in, call us, or send a quick WhatsApp — we'll set you up.</p>
              <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <a href="tel:09500186817" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href="https://wa.me/919500186817" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[oklch(0.72_0.18_150)] text-white font-semibold shadow-accent-glow hover:scale-[1.03] transition-transform">
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
