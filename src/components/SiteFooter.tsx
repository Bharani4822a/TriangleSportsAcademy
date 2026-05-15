import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border overflow-hidden">
      <div className="absolute inset-0 stadium-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-highlight shadow-glow inline-flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2L2 20h20L12 2zm0 5l6 11H6l6-11z" />
              </svg>
            </span>
            <div>
              <div className="font-display font-bold">Triangle</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Sports Academy</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Salem's premium indoor sports arena. Train, play and achieve in a positive, professional environment.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/activities" className="hover:text-primary">Activities</Link></li>
            <li><Link to="/booking" className="hover:text-primary">Court Booking</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Visit Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />Uththirappan Kaadu, Perumall Kovil Main St, Salem, Tamil Nadu 636010</li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /><a href="tel:09500186817" className="hover:text-primary">095001 86817</a></li>
            <li className="flex gap-2.5"><Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />Open Daily · 5:00 AM – 11:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Follow</h4>
          <div className="flex gap-2">
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-lg glass inline-flex items-center justify-center hover:text-primary"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-lg glass inline-flex items-center justify-center hover:text-primary"><Facebook className="h-4 w-4" /></a>
          </div>
          <Link to="/booking" className="mt-6 inline-flex px-4 py-2.5 rounded-md bg-gradient-to-r from-accent to-highlight text-accent-foreground text-sm font-semibold shadow-accent-glow hover:scale-[1.03] transition-transform">
            Book Your Slot
          </Link>
        </div>
      </div>
      <div className="relative border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Triangle Sports Academy · Salem, Tamil Nadu
      </div>
    </footer>
  );
}
