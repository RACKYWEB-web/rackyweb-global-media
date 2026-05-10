import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, Search, Star, MapPin, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Rackyweb Global Media" },
      { name: "description", content: "Discover thousands of verified businesses, startups and agencies from across the world." },
      { property: "og:title", content: "Global Business Marketplace" },
      { property: "og:description", content: "Verified founders, sponsored listings, serious capital." },
    ],
  }),
  component: MarketplacePage,
});

const CATS = ["All", "AI", "Fintech", "Climate", "Design", "Health", "Retail", "Media"];

const BUSINESSES = [
  { n: "Helio Labs", c: "AI", loc: "San Francisco", desc: "Foundation models for industrial automation.", v: true, s: true, r: 4.9 },
  { n: "Northwind Climate", c: "Climate", loc: "Stockholm", desc: "Scaling carbon removal across the North Sea.", v: true, s: false, r: 4.8 },
  { n: "Atlas Bank", c: "Fintech", loc: "Singapore", desc: "Cross-border banking for emerging-market SMBs.", v: true, s: true, r: 4.7 },
  { n: "Linea Studio", c: "Design", loc: "Paris", desc: "Brand and product design for ambitious operators.", v: true, s: false, r: 5.0 },
  { n: "Mira Health", c: "Health", loc: "Lagos", desc: "Telemedicine network across West Africa.", v: false, s: false, r: 4.6 },
  { n: "Kova Retail", c: "Retail", loc: "São Paulo", desc: "Omnichannel commerce OS for Latin America.", v: true, s: false, r: 4.5 },
  { n: "Orbital Media", c: "Media", loc: "Berlin", desc: "Independent newsroom for the European tech beat.", v: true, s: false, r: 4.7 },
  { n: "Cinder Robotics", c: "AI", loc: "Tokyo", desc: "Humanoid robotics for warehouse logistics.", v: true, s: true, r: 4.9 },
  { n: "Verde Capital", c: "Fintech", loc: "Mexico City", desc: "Private credit for green infrastructure.", v: true, s: false, r: 4.6 },
];

function MarketplacePage() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const list = BUSINESSES.filter(
    (b) => (active === "All" || b.c === active) && (b.n.toLowerCase().includes(q.toLowerCase()) || b.desc.toLowerCase().includes(q.toLowerCase())),
  );

  return (
    <SiteLayout>
      <section className="container-luxe py-20 lg:py-28">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Marketplace</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl leading-[1.02] max-w-4xl">
            Twelve thousand businesses.
            <br /><span className="text-gradient-gold italic">One platform.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Discover verified startups, agencies and operators from 84 countries.
          </p>
        </Reveal>

        <div className="mt-10 flex items-center gap-2 glass-light rounded-full p-2 shadow-soft max-w-2xl">
          <Search className="h-4 w-4 text-muted-foreground ml-3" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, sector, or keyword…"
            className="flex-1 bg-transparent text-sm py-2 focus:outline-none"
          />
          <Link to="/partner" className="rounded-full bg-ink text-ink-foreground text-xs px-4 py-2.5">List your business</Link>
        </div>
      </section>

      <section className="container-luxe pb-8">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-xs transition-colors ${
                active === c ? "bg-ink text-ink-foreground" : "hairline hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((b, i) => (
            <Reveal key={b.n} delay={i * 50}>
              <div className="rounded-3xl bg-card hairline p-6 hover-lift relative overflow-hidden h-full">
                {b.s && (
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full gradient-gold text-ink text-[10px] uppercase tracking-wider px-2.5 py-1">
                    <Sparkles className="h-3 w-3" /> Sponsored
                  </div>
                )}
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl gradient-ink flex items-center justify-center text-gold font-display text-xl">
                    {b.n.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-display text-lg leading-tight">{b.n}</div>
                      {b.v && <BadgeCheck className="h-4 w-4 text-emerald" />}
                    </div>
                    <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {b.loc}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-emerald">{b.c}</span>
                  <span className="inline-flex items-center gap-1 text-xs">
                    <Star className="h-3.5 w-3.5 text-gold fill-gold" /> {b.r}
                  </span>
                </div>
                <button className="mt-6 w-full rounded-full hairline py-2.5 text-xs hover:bg-secondary transition-colors">
                  View profile
                </button>
              </div>
            </Reveal>
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">No businesses match your filters.</div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
