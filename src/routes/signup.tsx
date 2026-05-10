import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import abstractGold from "@/assets/abstract-gold.jpg";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Rackyweb" }] }),
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 order-2 lg:order-1">
        <form className="w-full max-w-sm space-y-5">
          <div>
            <h2 className="font-display text-4xl">Create your account</h2>
            <p className="text-sm text-muted-foreground mt-1">Free for readers. Free trial for businesses.</p>
          </div>
          <button type="button" className="w-full rounded-xl hairline py-3 text-sm hover:bg-secondary">Continue with Google</button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="flex-1 h-px bg-border" /> or <div className="flex-1 h-px bg-border" /></div>
          <input placeholder="Full name" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
          <input placeholder="Work email" type="email" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
          <input placeholder="Password" type="password" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
          <button className="w-full rounded-full bg-ink text-ink-foreground py-3.5 text-sm font-medium inline-flex items-center justify-center gap-2">
            Create account <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Already a member? <Link to="/login" className="text-foreground link-underline">Sign in</Link>
          </p>
        </form>
      </div>

      <div className="hidden lg:block relative bg-ink overflow-hidden order-1 lg:order-2">
        <img src={abstractGold} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-bl from-ink via-ink/80 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-12 text-white">
          <Link to="/" className="font-display text-xl">RACKYWEB</Link>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">What you get</div>
            <ul className="mt-6 space-y-4 text-lg">
              {["Access to the full editorial archive","Verified marketplace profile","Weekly Global Briefing newsletter","Member-only events"].map((b) => (
                <li key={b} className="inline-flex items-center gap-3"><Check className="h-4 w-4 text-emerald" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
