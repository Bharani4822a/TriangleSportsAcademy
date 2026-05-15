import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { SPORTS } from "@/lib/sports";
import badmintonImg from "@/assets/sport-badminton.jpg";
import gymImg from "@/assets/sport-gym.jpg";
import chessImg from "@/assets/sport-chess.jpg";
import carromImg from "@/assets/sport-carrom.jpg";
import ttImg from "@/assets/sport-tt.jpg";
import yogaImg from "@/assets/sport-yoga.jpg";

const sportImages: Record<string, string> = {
  badminton: badmintonImg, gym: gymImg, chess: chessImg, carrom: carromImg, tt: ttImg, yoga: yogaImg,
};

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Sports Activities — Triangle Sports Academy" },
      { name: "description", content: "Badminton, Gym, Chess, Carrom, Table Tennis & Yoga — coaching and open play in Salem." },
    ],
  }),
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <>
      <section className="relative pt-24 pb-12 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Our activities</div>
        <h1 className="mt-3 text-5xl sm:text-7xl font-display font-extrabold text-balance">Six sports.<br /><span className="gradient-text">One premium arena.</span></h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">From competitive badminton to mindful yoga — pick your sport and start training with us today.</p>
      </section>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-24 space-y-10">
        {SPORTS.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden card-lift border border-border">
              <img src={sportImages[s.image]} alt={s.name} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-[10px] uppercase tracking-[0.2em] text-highlight">{s.tagline}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">{`0${i + 1}`} · Activity</div>
              <h2 className="mt-2 text-4xl sm:text-5xl font-display font-bold">{s.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.blurb}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 text-sm">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent shrink-0" />{d}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:09500186817" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform">
                  <Phone className="h-4 w-4" /> Call for Coaching
                </a>
                <a href={`https://wa.me/919500186817?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20${encodeURIComponent(s.name)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[oklch(0.72_0.18_150)] text-white font-semibold shadow-accent-glow hover:scale-[1.03] transition-transform">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
