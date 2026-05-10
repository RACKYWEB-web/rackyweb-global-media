import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Heart, Share2, Bookmark, Twitter, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import blogFinance from "@/assets/blog-finance.jpg";
import founder from "@/assets/founder-1.jpg";

export const Route = createFileRoute("/article")({
  head: () => ({
    meta: [
      { title: "The quiet rise of emerging-market unicorns — Rackyweb" },
      { name: "description", content: "Capital is leaving Silicon Valley faster than anyone expected. Here is where it is landing." },
      { property: "og:title", content: "The quiet rise of emerging-market unicorns" },
      { property: "og:description", content: "Capital is leaving Silicon Valley faster than anyone expected." },
      { property: "og:image", content: blogFinance },
    ],
  }),
  component: ArticlePage,
});

const COMMENTS = [
  { n: "Daniel R.", t: "Excellent piece — the SEA chart alone is worth the read.", w: "2h ago" },
  { n: "Priya M.", t: "Would love a follow-up on Latin American capital flows.", w: "5h ago" },
  { n: "Tomás K.", t: "Sharing this with my partners. Brilliant work.", w: "1d ago" },
];

function ArticlePage() {
  const [text, setText] = useState("");
  return (
    <SiteLayout>
      <article className="container-luxe py-16 lg:py-24 max-w-3xl">
        <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Markets · 8 min read</div>
        <h1 className="mt-4 font-display text-4xl lg:text-6xl leading-[1.05]">
          The quiet rise of emerging-market unicorns.
        </h1>
        <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
          Capital is leaving Silicon Valley faster than anyone expected. Here is where it is landing — and why the next decade of company building will look very different.
        </p>

        <div className="mt-10 flex items-center justify-between border-y border-border py-5">
          <div className="flex items-center gap-3">
            <img src={founder} alt="Maya" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <div className="text-sm font-medium">Maya Okonkwo</div>
              <div className="text-xs text-muted-foreground">May 8, 2026 · <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> 8 min</span></div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[Heart, Bookmark, Share2].map((I, i) => (
              <button key={i} className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-secondary"><I className="h-4 w-4" /></button>
            ))}
          </div>
        </div>

        <img src={blogFinance} alt="Markets" className="mt-10 rounded-3xl w-full shadow-luxe" />

        <div className="mt-12 prose-luxe space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>For most of the last decade, the unicorn club was almost a North American export — built on West-coast capital, hiring out of Mountain View, and shipping out of San Francisco. That story is quietly changing.</p>
          <p className="text-2xl font-display leading-snug border-l-2 border-gold pl-6 italic text-foreground">"The map of company building has been redrawn in two years, and most boards haven't noticed yet."</p>
          <p>According to private data shared with Rackyweb, the share of new unicorns minted in São Paulo, Lagos, Jakarta and Riyadh has more than tripled since 2022. Capital that once defaulted to Sand Hill is increasingly looking for asymmetry it can no longer find at home.</p>
          <h2 className="font-display text-3xl mt-12">Why now</h2>
          <p>Three forces are converging: cheaper foundation models, a generation of repatriated operators, and sovereign capital that is finally writing growth-stage checks. Together they have removed two of the three classical barriers to building a global company outside the United States.</p>
          <p>The third — distribution — is being solved by platforms like ours, but that is a story for another long read.</p>
        </div>

        {/* Reactions */}
        <div className="mt-14 flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-8">
          <button className="inline-flex items-center gap-2 hover:text-foreground"><Heart className="h-4 w-4" /> 1.2K</button>
          <button className="inline-flex items-center gap-2 hover:text-foreground"><Bookmark className="h-4 w-4" /> Save</button>
          <div className="ml-auto flex items-center gap-1">
            <button className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-secondary"><Twitter className="h-4 w-4" /></button>
            <button className="h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-secondary"><Linkedin className="h-4 w-4" /></button>
          </div>
        </div>

        {/* Comments */}
        <section className="mt-16">
          <h3 className="font-display text-2xl">Comments ({COMMENTS.length})</h3>
          <div className="mt-6 rounded-2xl bg-card hairline p-5">
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={3} placeholder="Share your perspective…" className="w-full bg-transparent text-sm focus:outline-none resize-none" />
            <div className="flex justify-end">
              <button className="rounded-full bg-ink text-ink-foreground px-5 py-2 text-xs">Post comment</button>
            </div>
          </div>
          <div className="mt-8 space-y-6">
            {COMMENTS.map((c) => (
              <div key={c.n} className="flex gap-4">
                <div className="h-10 w-10 rounded-full gradient-emerald shrink-0" />
                <div>
                  <div className="text-sm"><span className="font-medium">{c.n}</span> <span className="text-xs text-muted-foreground ml-2">{c.w}</span></div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.t}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Link to="/blog" className="mt-16 inline-block text-sm link-underline">← Back to all stories</Link>
      </article>
    </SiteLayout>
  );
}
