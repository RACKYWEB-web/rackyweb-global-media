import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Rackyweb" },
      { name: "description", content: "Simple plans for readers, founders and growth teams." },
      { property: "og:title", content: "Pricing — Rackyweb" },
      { property: "og:description", content: "Simple, transparent pricing for every kind of operator." },
    ],
  }),
  component: PricingPage,
});

const PLANS = [
  { n: "Reader", p: "Free", d: "Stay informed.", b: ["3 free articles / month","Weekly newsletter","Save articles"], cta: "Sign up" },
  { n: "Founder", p: "$24", per: "/mo", d: "For operators building seriously.", b: ["Unlimited articles","Verified marketplace listing","Lead capture","Member events"], cta: "Start free trial", popular: true },
  { n: "Growth", p: "$199", per: "/mo", d: "For ambitious teams.", b: ["Everything in Founder","Sponsored placements","Custom analytics","Priority support","API access"], cta: "Talk to sales" },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="container-luxe py-20 lg:py-28 text-center max-w-3xl mx-auto">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Pricing</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl leading-[1.02]">Simple. Transparent. Global.</h1>
          <p className="mt-6 text-lg text-muted-foreground">One platform, three plans. Cancel anytime.</p>
        </Reveal>
      </section>

      <section className="container-luxe pb-24 grid md:grid-cols-3 gap-6">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.n} delay={i * 100}>
            <div className={`relative h-full rounded-3xl p-8 hover-lift ${plan.popular ? "gradient-ink text-white shadow-luxe" : "bg-card hairline"}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-gold text-ink text-[10px] uppercase tracking-[0.25em] px-3 py-1">Most popular</div>
              )}
              <div className="text-xs uppercase tracking-[0.3em] opacity-70">{plan.n}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">{plan.p}</span>
                {plan.per && <span className="opacity-60 text-sm">{plan.per}</span>}
              </div>
              <p className={`mt-3 text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>{plan.d}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.b.map((f) => (
                  <li key={f} className="inline-flex items-start gap-2"><Check className={`h-4 w-4 mt-0.5 ${plan.popular ? "text-gold" : "text-emerald"}`} /> {f}</li>
                ))}
              </ul>
              <Link
                to={plan.cta === "Talk to sales" ? "/contact" : "/signup"}
                className={`mt-10 block text-center rounded-full py-3.5 text-sm font-medium transition-colors ${
                  plan.popular ? "bg-gold text-gold-foreground hover:shadow-glow-gold" : "bg-ink text-ink-foreground hover:bg-foreground"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-luxe pb-24">
        <h2 className="font-display text-3xl mb-8">Frequently asked.</h2>
        <div className="divide-y divide-border">
          {[
            ["Can I cancel anytime?","Yes. Plans are month-to-month and you can cancel from your dashboard."],
            ["Do you offer enterprise pricing?","Yes — get in touch via the Growth plan or contact sales."],
            ["Is the marketplace listing verified?","Every Founder and Growth listing passes our verification process."],
            ["Do you offer team accounts?","Growth plans include up to 10 seats. Larger teams: contact sales."],
          ].map(([q,a]) => (
            <details key={q} className="py-6 group">
              <summary className="flex items-center justify-between cursor-pointer font-display text-lg">
                {q}
                <span className="text-2xl text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
