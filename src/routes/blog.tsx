import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import blogFinance from "@/assets/blog-finance.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogDeal from "@/assets/blog-deal.jpg";
import team from "@/assets/team-collab.jpg";
import abstractGold from "@/assets/abstract-gold.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Blog — Rackyweb Global Media" },
      { name: "description", content: "Original journalism, founder interviews, and analysis from across the global startup economy." },
      { property: "og:title", content: "The Blog — Rackyweb" },
      { property: "og:description", content: "Original journalism for the global business class." },
    ],
  }),
  component: BlogPage,
});

const CATEGORIES = ["All", "Markets", "AI & Tech", "Startups", "Leadership", "Climate", "Finance"];

const POSTS = [
  { cat: "Markets", title: "The quiet rise of emerging-market unicorns", excerpt: "Capital is leaving Silicon Valley. Here's where it's landing.", img: blogFinance, read: "8 min", author: "Maya Okonkwo", date: "May 8, 2026" },
  { cat: "AI & Tech", title: "How frontier models are reshaping the boardroom", excerpt: "AI is now a C-suite operating system.", img: blogAi, read: "11 min", author: "David Chen", date: "May 5, 2026" },
  { cat: "Startups", title: "Inside the year's most consequential acquisitions", excerpt: "The four deals that quietly redrew industry maps.", img: blogDeal, read: "14 min", author: "Sara Lindqvist", date: "May 2, 2026" },
  { cat: "Leadership", title: "What founders get wrong about hiring at Series B", excerpt: "An honest field guide from twelve veteran operators.", img: team, read: "9 min", author: "Rashid Patel", date: "Apr 28, 2026" },
  { cat: "Climate", title: "The $40B climate fund quietly reshaping Europe", excerpt: "A long read on the consortium nobody saw coming.", img: abstractGold, read: "13 min", author: "Maya Okonkwo", date: "Apr 24, 2026" },
  { cat: "Finance", title: "Private credit just had its loudest quarter ever", excerpt: "The new shadow banks are not so shadowy anymore.", img: blogFinance, read: "10 min", author: "David Chen", date: "Apr 20, 2026" },
];

function BlogPage() {
  const [active, setActive] = useState("All");
  const [q, setQ] = useState("");
  const filtered = POSTS.filter(
    (p) => (active === "All" || p.cat === active) && p.title.toLowerCase().includes(q.toLowerCase()),
  );
  const featured = POSTS[0];

  return (
    <SiteLayout>
      <section className="container-luxe py-20 lg:py-28">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Editorial</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl leading-[1.02] max-w-4xl">
            The Blog.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Original journalism, founder interviews, and analysis from across the
            global startup economy.
          </p>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="container-luxe pb-16">
        <Link to="/article" className="group grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 overflow-hidden rounded-3xl">
            <img src={featured.img} alt={featured.title} className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.25em] text-emerald">Featured · {featured.cat}</div>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.05]">{featured.title}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              <span>{featured.author}</span>
              <span>·</span>
              <span>{featured.date}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.read}</span>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium link-underline">
              Read the story <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      </section>

      {/* Filters */}
      <section className="container-luxe py-10 sticky top-20 z-30">
        <div className="glass-light rounded-full p-2 flex flex-wrap items-center gap-2 shadow-soft">
          <div className="flex items-center gap-2 px-4 flex-1 min-w-[200px]">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              className="bg-transparent text-sm w-full focus:outline-none py-2"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs transition-colors ${
                  active === c ? "bg-ink text-ink-foreground" : "hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-luxe pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.title + i} delay={i * 60}>
              <Link to="/article" className="group block rounded-3xl bg-card hairline overflow-hidden hover-lift h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-emerald">{p.cat}</div>
                  <h3 className="mt-3 font-display text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.author}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-muted-foreground">No stories match your search.</div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
