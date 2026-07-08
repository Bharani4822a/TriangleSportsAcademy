import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-arena.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import yuvarajImg from "@/assets/yuvaraj.jpeg";
import hariImg from "@/assets/hari.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Triangle Sports Academy, Salem" },
      { name: "description", content: "Salem's premium indoor sports academy. Our story, vision, mission and the facilities we've built for the community." },
    ],
  }),
  component: AboutPage,
});

const counters = [
  { v: "6+", l: "Sports under one roof" },
  { v: "1000+", l: "Active members" },
  { v: "10+", l: "Coaches & trainers" },
  { v: "365", l: "Days a year" },
];

function AboutPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Select all sections except the first (hero) so hero keeps its inline reveals
    const allSections = Array.from(root.querySelectorAll('section')) as HTMLElement[];
    const sections = allSections.slice(1);

    sections.forEach((s, i) => {
      s.classList.add('reveal-hidden');
      s.dataset.index = String(i);
      // also hide inner card-lift elements if present
      const cards = Array.from(s.querySelectorAll('.card-lift')) as HTMLElement[];
      cards.forEach((c, j) => {
        c.classList.add('reveal-hidden');
        c.dataset.index = String(i * 10 + j);
      });
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            if (!el.classList.contains('reveal-up') && !el.classList.contains('reveal-up-fast')) {
              el.classList.remove('reveal-hidden');
              const idx = Number(el.dataset.index || 0);
              if (el.classList.contains('coach-card')) {
                el.classList.add('reveal-up-fast');
                el.style.animationDelay = `${idx * 30}ms`;
              } else {
                el.classList.add('reveal-up');
                el.style.animationDelay = `${idx * 60}ms`;
              }
            }
            obs.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );

    const targets = Array.from(root.querySelectorAll('.reveal-hidden')) as HTMLElement[];
    targets.forEach((t) => obs.observe(t));

    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef}>
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.04 260 / 0.4), oklch(0.18 0.04 260 / 0.95))" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold reveal-up">Our story</div>
          <h1 className="reveal-up reveal-delay-1 mt-3 text-5xl sm:text-7xl font-display font-extrabold">A premium home for <span className="gradient-text">sport</span>.</h1>
          <p className="reveal-up reveal-delay-2 mt-4 text-lg text-muted-foreground max-w-2xl">Triangle Sports Academy was built to give Salem the indoor arena it deserved — international standard courts, modern facilities and a positive community.</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">More than a club. <span className="gradient-text">A movement.</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Located in the heart of Salem, our academy brings together six sports under one roof. From competitive badminton and modern fitness to mindful yoga and strategic chess — we've designed every corner for performance, comfort and community.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Whether you walk in for an hourly court, a coaching session or a daily workout — you'll find clean spaces, friendly staff and like-minded people who share your love for the game.
          </p>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-glow">
          <img src={gallery1} alt="Inside the arena" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="relative py-20 border-y border-border">
        <div className="absolute inset-0 stadium-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {counters.map((c) => (
            <div key={c.l} className="glass-strong rounded-2xl p-6 text-center card-lift border">
              <div className="text-4xl sm:text-5xl font-display font-extrabold gradient-text">{c.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24 grid md:grid-cols-3 gap-5">
        {[
          { i: Target, t: "Mission", d: "Provide Salem with world-class indoor sports facilities and a positive environment for every age and skill." },
          { i: Eye, t: "Vision", d: "Be the most loved sports academy in Tamil Nadu — known for quality, community and consistency." },
          { i: Heart, t: "Values", d: "Respect, discipline, friendliness and a deep belief that sport makes lives better." },
        ].map((b) => (
          <div key={b.t} className="card-lift glass rounded-2xl p-7 border">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-highlight inline-flex items-center justify-center shadow-glow">
              <b.i className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-2xl font-display font-bold">{b.t}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-24">
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-center mb-16">Meet Our <span className="gradient-text">Leadership & Team</span></h2>
        
        {/* Founder Section - Large */}
        <div className="glass-strong border rounded-3xl p-8 lg:p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="text-sm uppercase tracking-widest text-highlight font-semibold mb-3">Founder</div>
              <h3 className="text-4xl font-display font-bold mb-4">Yuvaraj Manikandan C</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a profound passion for sports and community building, Yuvaraj envisioned Triangle Sports Academy as a premier destination for athletes of all levels. His dedication to excellence and holistic development has shaped the academy into Salem's most trusted indoor sports facility. Under his leadership, the academy has fostered numerous talents and provided a positive, professional environment for the sporting community.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">Visionary Leader</span>
                <span className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight">Sports Enthusiast</span>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[320px] lg:h-[400px] rounded-3xl overflow-hidden shadow-glow relative">
                <img 
                  src={yuvarajImg} 
                  alt="Yuvaraj Manikandan C" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coaches Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-display font-bold">Our <span className="gradient-text">Coaches</span></h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Expert guidance from seasoned professionals dedicated to elevating your game.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Coach 1 */}
          <div className="card-lift coach-card glass rounded-3xl p-8 border text-center">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-glow mb-6 relative">
              <img 
                src={yuvarajImg} 
                alt="Yuvaraj Manikandan C" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
            </div>
            <h4 className="text-2xl font-display font-bold">Yuvaraj Manikandan C</h4>
            <div className="text-highlight font-medium mt-1 mb-3 uppercase tracking-wider text-sm">Head Coach</div>
            <p className="text-sm text-muted-foreground leading-relaxed">Leading our training programs with years of expertise and a focus on fundamental excellence.</p>
          </div>

          {/* Coach 2 */}
          <div className="card-lift coach-card glass rounded-3xl p-8 border text-center">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-glow mb-6 relative">
              <img 
                src={hariImg} 
                alt="Hariharan P" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
            </div>
            <h4 className="text-2xl font-display font-bold">Hariharan P </h4>
            <div className="text-highlight font-medium mt-1 mb-3 uppercase tracking-wider text-sm">Head Coach</div>
            <p className="text-sm text-muted-foreground leading-relaxed">Specializing in advanced techniques and personalized coaching to help players reach their peak.</p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="rounded-3xl glass-strong p-10 text-center border">
          <Trophy className="h-10 w-10 mx-auto text-highlight" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold">Why Triangle Sports Academy</h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">Premium courts, modern gym, professional lighting, friendly staff, flexible coaching — and a positive community that makes you want to come back tomorrow.</p>
          <Link to="/booking" className="mt-7 inline-flex px-6 py-3.5 rounded-lg bg-gradient-to-r from-primary to-highlight text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform">Book your first session</Link>
        </div>
      </section>
    </div>
  );
}
