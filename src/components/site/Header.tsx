import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/pricing", label: "Pricing" },
  { to: "/partner", label: "Partner" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between rounded-full px-5 lg:px-7 py-3 transition-all duration-500 ${
            scrolled ? "glass-light shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl gradient-ink text-gold font-display text-lg shadow-glow-gold">
              R
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] tracking-tight">RACKYWEB</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Global Media
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-foreground/75 hover:text-foreground transition-colors link-underline"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/login"
              className="text-sm px-4 py-2 rounded-full text-foreground/80 hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="text-sm px-5 py-2.5 rounded-full bg-ink text-ink-foreground hover:bg-foreground transition-colors"
            >
              Get started
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass-light"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 rounded-3xl glass-light p-5 shadow-luxe">
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-xl text-sm hover:bg-muted"
                >
                  {n.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-sm bg-ink text-ink-foreground text-center"
              >
                Get started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
