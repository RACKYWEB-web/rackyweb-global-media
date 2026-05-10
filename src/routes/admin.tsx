import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, FileText, Briefcase, DollarSign, Search, Bell, Settings, Home } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Rackyweb" }] }),
  component: AdminPage,
});

const ROWS = [
  ["Helio Labs","AI","Verified","$199","Active"],
  ["Northwind Climate","Climate","Verified","$24","Active"],
  ["Atlas Bank","Fintech","Pending","$199","Review"],
  ["Linea Studio","Design","Verified","$24","Active"],
  ["Mira Health","Health","Pending","$0","Trial"],
  ["Cinder Robotics","AI","Verified","$199","Active"],
];

const TRENDS = [30,42,38,55,50,68,62,80,72,90,85,105,98,120];

function AdminPage() {
  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-ink text-ink-foreground flex-col">
        <Link to="/" className="p-6 flex items-center gap-3 border-b border-white/10">
          <span className="h-9 w-9 rounded-xl gradient-gold text-ink inline-flex items-center justify-center font-display">R</span>
          <div className="leading-tight">
            <div className="text-sm font-display">RACKYWEB</div>
            <div className="text-[10px] uppercase tracking-widest text-gold/80">Admin</div>
          </div>
        </Link>
        <nav className="p-3 space-y-1 text-sm">
          {[
            [Home, "Overview", true],
            [Users, "Users", false],
            [Briefcase, "Listings", false],
            [FileText, "Articles", false],
            [DollarSign, "Billing", false],
            [Settings, "Settings", false],
          ].map(([I, l, active]: any) => (
            <a key={l} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"}`}>
              <I className="h-4 w-4" /> {l}
            </a>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <div className="rounded-2xl gradient-emerald p-4 text-sm">
            <div className="font-medium">System healthy</div>
            <div className="text-xs opacity-80 mt-1">All services nominal</div>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        {/* Topbar */}
        <div className="flex items-center gap-4 p-6 border-b border-border bg-background">
          <div className="flex-1 max-w-md flex items-center gap-2 hairline rounded-full px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search users, listings, articles…" className="bg-transparent text-sm w-full focus:outline-none" />
          </div>
          <button className="h-10 w-10 inline-flex items-center justify-center rounded-full hairline"><Bell className="h-4 w-4" /></button>
          <div className="h-10 w-10 rounded-full gradient-gold" />
        </div>

        <div className="p-6 lg:p-10 space-y-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Overview</div>
            <h1 className="mt-2 font-display text-4xl">Admin dashboard</h1>
          </div>

          {/* KPI */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { l: "Total users", v: "48,392", d: "+12%", I: Users },
              { l: "Active listings", v: "12,540", d: "+6%", I: Briefcase },
              { l: "Articles published", v: "1,284", d: "+3%", I: FileText },
              { l: "MRR", v: "$214,300", d: "+18%", I: DollarSign },
            ].map((k) => (
              <div key={k.l} className="rounded-2xl bg-card hairline p-5">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider">{k.l}</span>
                  <k.I className="h-4 w-4" />
                </div>
                <div className="mt-3 font-display text-3xl">{k.v}</div>
                <div className="mt-1 text-xs text-emerald">{k.d}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="lg:col-span-2 rounded-3xl bg-card hairline p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Revenue trend</div>
                  <div className="font-display text-2xl mt-1">$214,300 this month</div>
                </div>
                <div className="flex gap-1 text-xs">
                  {["7D","30D","12M"].map((p, i) => (
                    <button key={p} className={`px-3 py-1.5 rounded-full ${i===2?"bg-ink text-ink-foreground":"hairline"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 600 200" className="w-full h-48">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.78 0.14 82)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none" stroke="oklch(0.18 0.015 60)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"
                  points={TRENDS.map((v,i) => `${(i/(TRENDS.length-1))*600},${200 - (v/120)*180}`).join(" ")}
                />
                <polygon
                  fill="url(#g)"
                  points={`0,200 ${TRENDS.map((v,i) => `${(i/(TRENDS.length-1))*600},${200 - (v/120)*180}`).join(" ")} 600,200`}
                />
              </svg>
            </div>

            {/* Notifications */}
            <div className="rounded-3xl bg-card hairline p-6">
              <div className="font-display text-xl mb-4">Notifications</div>
              <ul className="space-y-4 text-sm">
                {[
                  ["3 listings awaiting verification","Just now"],
                  ["Sponsored campaign approved: Helio","12m ago"],
                  ["Server scaling event triggered","1h ago"],
                  ["Newsletter sent to 220K","3h ago"],
                ].map(([t,w]) => (
                  <li key={t} className="border-l-2 border-emerald pl-3">
                    <div>{t}</div>
                    <div className="text-xs text-muted-foreground">{w}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-3xl bg-card hairline overflow-hidden">
            <div className="flex items-center justify-between p-6">
              <div className="font-display text-xl">Recent listings</div>
              <button className="text-xs hairline rounded-full px-4 py-2">Export CSV</button>
            </div>
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-wider text-muted-foreground border-y border-border">
                <tr>
                  {["Business","Category","Status","Plan","State",""].map((h) => <th key={h} className="text-left py-3 px-6 font-normal">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-0 hover:bg-secondary/40 transition-colors">
                    <td className="py-4 px-6 font-medium">{r[0]}</td>
                    <td className="py-4 px-6 text-muted-foreground">{r[1]}</td>
                    <td className="py-4 px-6">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${r[2]==="Verified"?"bg-emerald/15 text-emerald":"bg-gold/15 text-foreground"}`}>{r[2]}</span>
                    </td>
                    <td className="py-4 px-6">{r[3]}</td>
                    <td className="py-4 px-6 text-muted-foreground">{r[4]}</td>
                    <td className="py-4 px-6 text-right"><button className="text-xs link-underline">Manage</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
