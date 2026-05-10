import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import abstractGold from "@/assets/abstract-gold.jpg";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title: "Partner With Us — Rackyweb" },
      { name: "description", content: "List your business, sponsor a story, or partner with our editorial team." },
      { property: "og:title", content: "Partner With Rackyweb" },
      { property: "og:description", content: "Reach 220K+ founders, operators and investors worldwide." },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-ink text-ink-foreground -mt-24 pt-32 pb-20">
        <img src={abstractGold} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/85 to-ink" />
        <div className="container-luxe relative">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Partner with us</div>
            <h1 className="mt-4 font-display text-5xl lg:text-7xl text-white max-w-4xl leading-[1.02]">
              Get in front of the<br /><span className="text-gradient-gold italic">global business class.</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-xl">
              List your company, sponsor a story, or co-create editorial with our newsroom.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-luxe py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          {[
            { h: "Marketplace listing", p: "A verified profile in front of 3.2M monthly readers.", b: ["Logo & cover banner","Verified badge","Lead capture form"] },
            { h: "Sponsored editorial", p: "Long-form content co-produced with our team.", b: ["Custom photography","Newsletter feature","Distribution across socials"] },
            { h: "Strategic partnership", p: "For platforms, funds and category leaders.", b: ["Quarterly co-marketing","Event collaboration","Bespoke research"] },
          ].map((t) => (
            <div key={t.h} className="border-t border-foreground/15 pt-6">
              <h3 className="font-display text-2xl">{t.h}</h3>
              <p className="mt-2 text-muted-foreground">{t.p}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.b.map((x) => (
                  <li key={x} className="inline-flex items-center gap-2 mr-4"><Check className="h-3.5 w-3.5 text-emerald" /> {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card hairline p-8 lg:p-10 shadow-soft">
            {submitted ? (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald/15 inline-flex items-center justify-center"><Check className="h-7 w-7 text-emerald" /></div>
                <h3 className="mt-6 font-display text-3xl">Thank you.</h3>
                <p className="mt-2 text-muted-foreground">A partnerships lead will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-6"
              >
                <h2 className="font-display text-3xl">Tell us about your company.</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Company name" />
                  <Field label="Website" type="url" />
                  <Field label="Your name" />
                  <Field label="Work email" type="email" />
                </div>
                <div>
                  <Label>Category</Label>
                  <select className="w-full mt-2 hairline rounded-xl bg-background px-4 py-3 text-sm">
                    {["AI","Fintech","Climate","Design","Health","Retail","Media","Other"].map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <Label>Company description</Label>
                  <textarea rows={4} className="w-full mt-2 hairline rounded-xl bg-background px-4 py-3 text-sm" placeholder="What do you do, and who is it for?" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FileField label="Logo" />
                  <FileField label="Cover banner" />
                </div>
                <div>
                  <Label>Partnership type</Label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Listing","Sponsored editorial","Strategic"].map((p) => (
                      <label key={p} className="hairline rounded-full px-4 py-2 text-xs cursor-pointer hover:bg-secondary">
                        <input type="radio" name="type" className="mr-2" /> {p}
                      </label>
                    ))}
                  </div>
                </div>
                <button className="w-full rounded-full bg-ink text-ink-foreground py-4 text-sm font-medium hover:bg-foreground transition-colors">
                  Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs uppercase tracking-wider text-muted-foreground">{children}</span>;
}
function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input type={type} className="w-full mt-2 hairline rounded-xl bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground/40 transition-colors" />
    </div>
  );
}
function FileField({ label }: { label: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 hairline border-dashed rounded-xl px-4 py-6 text-center cursor-pointer hover:bg-secondary/50 transition-colors">
        <Upload className="h-5 w-5 mx-auto text-muted-foreground" />
        <div className="mt-2 text-xs text-muted-foreground">Drag or click to upload</div>
      </div>
    </div>
  );
}
