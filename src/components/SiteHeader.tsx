import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/activities", label: "Activities" },
  { to: "/booking", label: "Book Court" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="glass-strong border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-highlight shadow-glow">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-primary-foreground" fill="currentColor">
                <path d="M12 2L2 20h20L12 2zm0 5l6 11H6l6-11z" />
              </svg>
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-base tracking-tight">Triangle</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Sports Academy</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:09500186817"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-primary to-highlight text-primary-foreground text-sm font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Call Now
            </a>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted/50"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <nav className="px-5 py-3 flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 text-sm font-medium ${
                    path === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
