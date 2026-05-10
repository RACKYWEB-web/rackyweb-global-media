import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Globe2, Sparkles, TrendingUp, Star, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroCity from "@/assets/hero-city.jpg";
import abstractGold from "@/assets/abstract-gold.jpg";
import teamCollab from "@/assets/team-collab.jpg";
import blogFinance from "@/assets/blog-finance.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogDeal from "@/assets/blog-deal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rackyweb Global Media — Where Business Meets Innovation" },
      {
        name: "description",
        content:
          "Premium business journalism, founder stories and a global startup marketplace. Discover the companies and ideas shaping the next decade.",
      },
      { property: "og:title", content: "Rackyweb Global Media" },
      { property: "og:description", content: "Where Business Meets Innovation." },
      { property: "og:image", content: heroCity },
    ],
  }),
  component: HomePage,
});

const TICKER = [
  "FORBES", "BLOOMBERG", "TECHCRUNCH", "WIRED", "REUTERS",
  "FAST COMPANY", "FINANCIAL TIMES", "WSJ", "ECONOMIST", "BUSINESS INSIDER",
];

const FEATURED = [
  {
    cat: "Markets",
    title: "The quiet rise of emerging-market unicorns",
    excerpt: "Capital is leaving Silicon Valley faster than anyone expected. Here is where it is landing.",
    img: blogFinance,
    read: "8 min read",
  },
  {
    cat: "AI & Tech",
    title: "How frontier models are reshaping the boardroom",
    excerpt: "From M&A diligence to talent strategy, AI is now a C-suite operating system.",
    img: blogAi,
    read: "11 min read",
  },
  {
    cat: "Deals",
    title: "Inside the year's most consequential acquisitions",
    excerpt: "A long read on the four deals that quietly redrew industry maps in 2026.",
    img: blogDeal,
    read: "14 min read",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-ink text-ink-foreground -mt-24 pt-24">
        <img
          src={heroCity}
          alt="Global financial city skyline at golden hour"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

        <div className="container-luxe relative pb-24 lg:pb-32">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full hairline-gold px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold/90 backdrop-blur">
                <Sparkles className="h-3 w-3" /> Issue 047 · Global Edition
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white">
                Where Business
                <br />
                Meets <span className="text-gradient-gold italic">Innovation.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
                A global newsroom, a curated marketplace, and a private network for
                the founders and investors building what's next.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/marketplace"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-7 py-4 text-sm font-medium hover:shadow-glow-gold transition-shadow"
                >
                  Explore the marketplace
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full hairline border-white/20 px-7 py-4 text-sm text-white/90 hover:bg-white/5 transition-colors"
                >
                  Read the latest
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-border bg-background py-6 overflow-hidden">
        <div className="flex marquee gap-16 whitespace-nowrap text-xs tracking-[0.4em] text-muted-foreground">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-16">
              {t}
              <span className="text-gold">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container-luxe py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.3em] text-emerald font-medium">By the numbers</div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05]">
                A platform trusted across 84 countries.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            {[
              { n: 12500, s: "+", label: "Verified businesses" },
              { n: 84, s: "", label: "Countries reached" },
              { n: 3200000, s: "+", label: "Monthly readers" },
              { n: 1.2, s: "B", label: "In partnerships facilitated", prefix: "$" },
            ].map((s) => (
              <Reveal key={s.label} delay={120}>
                <div className="border-t border-foreground/15 pt-6">
                  <div className="font-display text-4xl lg:text-5xl">
                    {s.prefix === "$" ? (
                      <Counter to={s.n as number} prefix="$" suffix={s.s} />
                    ) : (
                      <Counter to={s.n as number} suffix={s.s} />
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EDITORIAL */}
      <section className="bg-secondary/40 py-24 lg:py-32">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-emerald font-medium">The Editorial</div>
              <h2 className="mt-3 font-display text-4xl lg:text-5xl">This week's most read.</h2>
            </div>
            <Link to="/blog" className="text-sm link-underline">View all stories →</Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {FEATURED.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <Link to="/article" className="group block hover-lift rounded-3xl bg-card overflow-hidden hairline">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="text-emerald font-medium">{p.cat}</span>
                      <span>·</span>
                      <span>{p.read}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-snug">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE TEASER (DARK) */}
      <section className="relative bg-ink text-ink-foreground py-28 overflow-hidden">
        <img src={abstractGold} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
        <div className="container-luxe relative">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Global Marketplace</div>
                <h2 className="mt-4 font-display text-4xl lg:text-5xl text-white">
                  List your company. Be discovered by the world.
                </h2>
                <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
                  Verified profiles, sponsored placements, and a serious editorial
                  audience. Built for ambitious operators.
                </p>
                <div className="mt-8 flex gap-3">
                  <Link to="/partner" className="rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm hover:shadow-glow-gold transition-shadow">
                    List your business
                  </Link>
                  <Link to="/marketplace" className="rounded-full hairline border-white/20 px-6 py-3 text-sm text-white hover:bg-white/5">
                    Browse listings
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "Helio Labs", c: "AI Infrastructure", v: true },
                  { n: "Northwind", c: "Climate Tech", v: true },
                  { n: "Atlas Bank", c: "Fintech", v: false },
                  { n: "Linea Studio", c: "Design Agency", v: true },
                ].map((b, i) => (
                  <Reveal key={b.n} delay={i * 100}>
                    <div className="glass rounded-2xl p-5 hover-lift">
                      <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-xl gradient-gold" />
                        {b.v && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-gold">
                            <BadgeCheck className="h-3.5 w-3.5" /> Verified
                          </span>
                        )}
                      </div>
                      <div className="mt-4 font-display text-lg text-white">{b.n}</div>
                      <div className="text-xs text-white/60 mt-1">{b.c}</div>
                      <div className="mt-4 flex items-center gap-1 text-gold">
                        {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-luxe py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Coverage</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">Across every sector that matters.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {["Startups","AI & Tech","Finance","Climate","Markets","Leadership","Design","Media","Crypto","Health","Retail","Policy"].map((c, i) => (
            <Reveal key={c} delay={i * 40}>
              <div className="hairline rounded-2xl p-5 text-center hover:bg-secondary/60 transition-colors cursor-pointer">
                <div className="font-display text-base">{c}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-secondary/40 py-24">
        <div className="container-luxe grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img src={teamCollab} alt="Team collaborating" className="rounded-3xl shadow-luxe w-full object-cover aspect-[4/5]" loading="lazy" />
          </div>
          <div className="lg:col-span-7">
            <Quote className="h-10 w-10 text-gold" />
            <p className="mt-6 font-display text-3xl lg:text-4xl leading-snug">
              "Rackyweb is the only place where I get serious editorial coverage
              and qualified investor introductions in the same breath. It's
              become the operating layer for our growth team."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full gradient-emerald" />
              <div>
                <div className="font-medium">Amaru Lin</div>
                <div className="text-xs text-muted-foreground">CEO, Northwind Climate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] gradient-ink p-10 lg:p-16 text-white">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-emerald/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold">
                <Globe2 className="h-3.5 w-3.5" /> The Global Briefing
              </div>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl">
                Three stories. One inbox. Every Tuesday.
              </h2>
              <p className="mt-4 text-white/70 max-w-lg">
                Join 220,000 founders and investors who start their week with our
                hand-picked briefing.
              </p>
            </div>
            <form className="lg:col-span-5 flex gap-2 glass rounded-full p-1.5">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button className="rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="relative mt-10 flex items-center gap-6 text-xs text-white/50">
            <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald" /> Trending in 84 countries</div>
            <div>No spam. Unsubscribe anytime.</div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
