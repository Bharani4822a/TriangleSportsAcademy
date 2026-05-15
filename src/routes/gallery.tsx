import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import badmintonImg from "@/assets/sport-badminton.jpg";
import gymImg from "@/assets/sport-gym.jpg";
import chessImg from "@/assets/sport-chess.jpg";
import carromImg from "@/assets/sport-carrom.jpg";
import ttImg from "@/assets/sport-tt.jpg";
import yogaImg from "@/assets/sport-yoga.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Triangle Sports Academy" },
      { name: "description", content: "Inside our indoor courts, gym and yoga studio." },
    ],
  }),
  component: GalleryPage,
});

const items = [
  { src: gallery1, cat: "Facilities", span: "row-span-2" },
  { src: badmintonImg, cat: "Badminton", span: "" },
  { src: gymImg, cat: "Gym", span: "" },
  { src: gallery2, cat: "Badminton", span: "row-span-2" },
  { src: yogaImg, cat: "Yoga", span: "" },
  { src: gallery3, cat: "Yoga", span: "" },
  { src: ttImg, cat: "Table Tennis", span: "" },
  { src: chessImg, cat: "Chess", span: "" },
  { src: carromImg, cat: "Carrom", span: "" },
];

const cats = ["All", "Badminton", "Gym", "Yoga", "Chess", "Carrom", "Table Tennis", "Facilities"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <section className="pt-20 pb-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs uppercase tracking-[0.25em] text-highlight font-semibold">Gallery</div>
        <h1 className="mt-3 text-5xl sm:text-6xl font-display font-extrabold text-balance">Inside the <span className="gradient-text">arena</span>.</h1>
        <div className="mt-7 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                filter === c
                  ? "bg-gradient-to-r from-primary to-highlight text-primary-foreground border-transparent shadow-glow"
                  : "glass border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full glass-strong text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">{it.cat}</div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur flex items-center justify-center p-4 reveal-scale" onClick={() => setOpen(null)}>
          <img src={open} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-glow" />
        </div>
      )}
    </>
  );
}
