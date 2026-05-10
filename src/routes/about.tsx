import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import founder from "@/assets/founder-1.jpg";
import team from "@/assets/team-collab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rackyweb Global Media" },
      { name: "description", content: "We are a global business newsroom and marketplace built for the next generation of founders, operators and investors." },
      { property: "og:title", content: "About Rackyweb Global Media" },
      { property: "og:description", content: "Editorial standards. Global ambition. A platform for serious business." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container-luxe py-24 lg:py-32">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">About</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl max-w-4xl leading-[1.02]">
            Editorial standards.
            <br /><span className="text-gradient-gold italic">Global ambition.</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Rackyweb Global Media is a modern newsroom and marketplace founded in
            2019 with one belief: that serious business reporting and the
            communities it serves should live in the same place.
          </p>
        </Reveal>
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <img src={team} alt="Our team" className="rounded-3xl shadow-luxe w-full" loading="lazy" />
        </div>
        <div className="lg:col-span-5 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            What started as a single Lagos-based newsletter has become a global
            platform read in 84 countries — covering the founders, capital and
            ideas redrawing the economic map.
          </p>
          <p>
            Our journalism is independent. Our marketplace is verified. And our
            community is the most ambitious operating class on the internet.
          </p>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground py-24">
        <div className="container-luxe grid grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { n: 220, s: "K+", l: "Newsletter subscribers" },
            { n: 84, s: "", l: "Countries covered" },
            { n: 12500, s: "+", l: "Verified businesses" },
            { n: 47, s: "", l: "Editors and contributors" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl lg:text-5xl text-gold">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <h2 className="font-display text-4xl lg:text-5xl">Our principles.</h2>
          </Reveal>
          <div className="space-y-10">
            {[
              { h: "Independence first.", p: "Editorial decisions sit firmly outside commercial." },
              { h: "Global by default.", p: "We cover business as it actually exists — borderless." },
              { h: "Quality over volume.", p: "Three considered stories beat thirty hot takes." },
              { h: "Verified by design.", p: "Every business on our marketplace passes our checks." },
            ].map((p, i) => (
              <Reveal key={p.h} delay={i * 100}>
                <div className="border-t border-foreground/15 pt-6">
                  <h3 className="font-display text-2xl">{p.h}</h3>
                  <p className="mt-2 text-muted-foreground">{p.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-luxe">
          <h2 className="font-display text-4xl lg:text-5xl mb-12">Leadership.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "Maya Okonkwo", r: "Founder & Editor-in-Chief", i: founder },
              { n: "David Chen", r: "Head of Marketplace", i: team },
              { n: "Sara Lindqvist", r: "Editorial Director", i: founder },
              { n: "Rashid Patel", r: "Chief Technology Officer", i: team },
            ].map((p) => (
              <div key={p.n} className="rounded-3xl bg-card overflow-hidden hairline hover-lift">
                <img src={p.i} alt={p.n} className="aspect-[4/5] w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <div className="font-display text-lg">{p.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
