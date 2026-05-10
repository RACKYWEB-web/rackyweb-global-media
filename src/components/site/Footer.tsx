import { Link } from "@tanstack/react-router";
import { Globe, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink text-ink-foreground overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-emerald/10 blur-3xl" />
      <div className="container-luxe relative py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl gradient-gold text-ink font-display text-lg">
                R
              </span>
              <div className="leading-tight">
                <div className="font-display text-lg">RACKYWEB GLOBAL MEDIA</div>
                <div className="text-xs uppercase tracking-[0.3em] text-gold/80">
                  Where Business Meets Innovation
                </div>
              </div>
            </div>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              An international newsroom and marketplace for the founders,
              operators and investors shaping the next decade of business.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram, Youtube, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full hairline hover:bg-white/5 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {[
              { h: "Editorial", l: [["Home","/"],["Blog","/blog"],["Article","/article"]] },
              { h: "Marketplace", l: [["Browse","/marketplace"],["List business","/partner"],["Pricing","/pricing"]] },
              { h: "Company", l: [["About","/about"],["Partner","/partner"],["Contact","/contact"]] },
              { h: "Account", l: [["Sign in","/login"],["Sign up","/signup"],["Dashboard","/dashboard"]] },
            ].map((col) => (
              <div key={col.h}>
                <div className="text-gold uppercase tracking-[0.25em] text-[11px] mb-4">{col.h}</div>
                <ul className="space-y-3">
                  {col.l.map(([label, to]) => (
                    <li key={to}>
                      <Link to={to} className="text-white/70 hover:text-white transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Rackyweb Global Media. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Press</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
