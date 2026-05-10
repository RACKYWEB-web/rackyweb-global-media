import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, TrendingUp, Eye, Heart, MessageSquare, MoreHorizontal, ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import founder from "@/assets/founder-1.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Rackyweb" }, { name: "description", content: "Your personal Rackyweb workspace." }] }),
  component: DashboardPage,
});

const BARS = [42, 56, 38, 72, 64, 88, 70, 92, 78, 96, 84, 110];

function DashboardPage() {
  return (
    <SiteLayout>
      <section className="container-luxe py-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Welcome back</div>
            <h1 className="mt-2 font-display text-4xl lg:text-5xl">Good morning, Maya.</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center h-11 w-11 rounded-full hairline hover:bg-secondary"><Bell className="h-4 w-4" /></button>
            <img src={founder} alt="Maya" className="h-11 w-11 rounded-full object-cover hairline" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Stats */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {[
              { l: "Profile views", v: "48,392", d: "+12.4%", i: Eye },
              { l: "Engagement", v: "8.7%", d: "+2.1%", i: Heart },
              { l: "Inbound leads", v: "236", d: "+18%", i: MessageSquare },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card hairline p-5">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider">{s.l}</span>
                  <s.i className="h-4 w-4" />
                </div>
                <div className="mt-3 font-display text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-emerald inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" /> {s.d}</div>
              </div>
            ))}

            {/* Chart */}
            <div className="sm:col-span-3 rounded-3xl bg-card hairline p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Audience growth</div>
                  <div className="font-display text-2xl mt-1">Last 12 months</div>
                </div>
                <button className="text-xs hairline px-3 py-1.5 rounded-full">Export</button>
              </div>
              <div className="flex items-end gap-2 h-40">
                {BARS.map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md gradient-ink relative group" style={{ height: `${h}%` }}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-ink text-ink-foreground px-2 py-1 rounded">
                      {h * 124}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                {["J","F","M","A","M","J","J","A","S","O","N","D"].map((m,i) => <span key={i}>{m}</span>)}
              </div>
            </div>

            {/* Listings */}
            <div className="sm:col-span-3 rounded-3xl bg-card hairline p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="font-display text-xl">Your listings</div>
                <Link to="/marketplace" className="text-xs link-underline">View all</Link>
              </div>
              <div className="divide-y divide-border">
                {["Helio Labs","Northwind Climate","Linea Studio"].map((n,i) => (
                  <div key={n} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl gradient-gold" />
                      <div>
                        <div className="text-sm font-medium">{n}</div>
                        <div className="text-xs text-muted-foreground">{1200 + i*340} views this week</div>
                      </div>
                    </div>
                    <button className="h-8 w-8 inline-flex items-center justify-center rounded-full hover:bg-secondary"><MoreHorizontal className="h-4 w-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl gradient-ink text-white p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold/30 blur-3xl" />
              <div className="text-xs uppercase tracking-[0.3em] text-gold relative">Pro plan</div>
              <div className="mt-3 font-display text-2xl relative">Unlock sponsored placements.</div>
              <Link to="/pricing" className="mt-5 relative inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-xs">
                Upgrade <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-3xl bg-card hairline p-6">
              <div className="font-display text-xl mb-4">Activity</div>
              <ul className="space-y-4 text-sm">
                {[
                  ["New lead from Atlas Bank","2m ago","emerald"],
                  ["Article saved by 14 readers","18m ago","gold"],
                  ["Profile featured in newsletter","1h ago","ink"],
                  ["Renewal in 7 days","Today","muted"],
                ].map(([t,when,c]) => (
                  <li key={t} className="flex gap-3">
                    <span className={`mt-1.5 h-2 w-2 rounded-full ${c==="emerald"?"bg-emerald":c==="gold"?"bg-gold":c==="ink"?"bg-ink":"bg-muted-foreground"}`} />
                    <div className="flex-1">
                      <div>{t}</div>
                      <div className="text-xs text-muted-foreground">{when}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
