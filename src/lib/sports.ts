export const SPORTS = [
  {
    slug: "badminton",
    name: "Badminton",
    tagline: "International standard synthetic courts",
    image: "badminton",
    blurb:
      "Premium indoor badminton courts with international standard synthetic mat flooring, glare-free pro lighting and full ventilation.",
    details: [
      "Synthetic mat courts with line markings",
      "Pro overhead LED lighting (no glare)",
      "Beginner, intermediate & advanced coaching",
      "Singles & doubles match play",
    ],
  },
  {
    slug: "gym",
    name: "Gym",
    tagline: "Modern strength & cardio floor",
    image: "gym",
    blurb:
      "Fully equipped strength and cardio gym with experienced trainers — designed for fat loss, muscle building and overall fitness.",
    details: [
      "Cardio: treadmills, cycles, ellipticals",
      "Free weights & resistance machines",
      "Personalised workout plans",
      "Flexible timings, family-friendly",
    ],
  },
  {
    slug: "chess",
    name: "Chess",
    tagline: "Sharpen your mind",
    image: "chess",
    blurb:
      "A calm, focused chess room for casual play, friendly tournaments and structured coaching for kids and adults.",
    details: [
      "Beginner to tournament-level coaching",
      "Weekend friendly competitions",
      "Standard tournament boards & clocks",
      "Strategy & opening theory sessions",
    ],
  },
  {
    slug: "carrom",
    name: "Carrom",
    tagline: "Classic indoor fun",
    image: "carrom",
    blurb:
      "Tournament-grade carrom boards in a relaxed setting — perfect for friends, families and casual leagues.",
    details: [
      "Premium polished carrom boards",
      "Friendly weekend matches",
      "All age groups welcome",
      "Coaching on technique & strikes",
    ],
  },
  {
    slug: "table-tennis",
    name: "Table Tennis",
    tagline: "Fast. Sharp. Skillful.",
    image: "tt",
    blurb:
      "Pro-level table tennis tables with proper lighting and floor — train reflexes and master the spin.",
    details: [
      "ITTF-style match tables",
      "Coaching for technique & footwork",
      "Open practice slots daily",
      "Junior & adult batches",
    ],
  },
  {
    slug: "yoga",
    name: "Yoga",
    tagline: "Balance body & breath",
    image: "yoga",
    blurb:
      "Calm, well-ventilated yoga studio with certified instructors — morning & evening sessions for all levels.",
    details: [
      "Hatha, Vinyasa & breathwork",
      "Morning & evening batches",
      "Beginners welcome",
      "Stress relief & flexibility focus",
    ],
  },
] as const;

export type Sport = (typeof SPORTS)[number];
