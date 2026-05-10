import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Calendar, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rackyweb Global Media" },
      { name: "description", content: "Get in touch with our editorial, partnerships, or marketplace teams." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container-luxe py-20 lg:py-28">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.3em] text-emerald">Contact</div>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl leading-[1.02] max-w-3xl">Let's talk.</h1>
        </Reveal>
      </section>

      <section className="container-luxe pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          {[
            { i: Mail, t: "Editorial", v: "press@rackyweb.com" },
            { i: Mail, t: "Partnerships", v: "partners@rackyweb.com" },
            { i: Phone, t: "Phone", v: "+1 (415) 555-0142" },
            { i: MapPin, t: "Headquarters", v: "Lagos · London · New York" },
          ].map((c) => (
            <div key={c.t} className="border-t border-foreground/15 pt-5 flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl gradient-ink text-gold inline-flex items-center justify-center"><c.i className="h-4 w-4" /></div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                <div className="font-display text-lg mt-1">{c.v}</div>
              </div>
            </div>
          ))}

          <div className="rounded-3xl gradient-ink text-white p-6 mt-8 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald/40 blur-3xl" />
            <Calendar className="h-5 w-5 text-gold relative" />
            <div className="mt-3 font-display text-xl relative">Book a 30-min call</div>
            <p className="mt-2 text-sm text-white/70 relative">Reserve a slot with our partnerships team.</p>
            <button className="mt-5 relative rounded-full bg-gold text-gold-foreground px-5 py-2.5 text-xs">Open calendar</button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-card hairline p-8 lg:p-10 shadow-soft">
            {sent ? (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-full bg-emerald/15 inline-flex items-center justify-center"><Check className="h-7 w-7 text-emerald" /></div>
                <h3 className="mt-6 font-display text-3xl">Message received.</h3>
                <p className="mt-2 text-muted-foreground">We'll reply within one business day.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                <h2 className="font-display text-3xl">Send us a note.</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input placeholder="Your name" className="hairline rounded-xl bg-background px-4 py-3 text-sm" />
                  <input placeholder="Email" type="email" className="hairline rounded-xl bg-background px-4 py-3 text-sm" />
                </div>
                <input placeholder="Subject" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
                <textarea rows={6} placeholder="Your message" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
                <button className="w-full rounded-full bg-ink text-ink-foreground py-4 text-sm font-medium">Send message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
