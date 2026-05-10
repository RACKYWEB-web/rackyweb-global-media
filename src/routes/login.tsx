import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import abstractGold from "@/assets/abstract-gold.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Rackyweb" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block relative bg-ink overflow-hidden">
        <img src={abstractGold} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/80 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-12 text-white">
          <Link to="/" className="font-display text-xl">RACKYWEB</Link>
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">Welcome back</div>
            <h1 className="mt-4 font-display text-5xl leading-tight">The world's most ambitious newsroom and marketplace.</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <form className="w-full max-w-sm space-y-5">
          <div>
            <h2 className="font-display text-4xl">Sign in</h2>
            <p className="text-sm text-muted-foreground mt-1">Welcome back to Rackyweb.</p>
          </div>
          <button type="button" className="w-full rounded-xl hairline py-3 text-sm hover:bg-secondary">Continue with Google</button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground"><div className="flex-1 h-px bg-border" /> or <div className="flex-1 h-px bg-border" /></div>
          <input placeholder="Email" type="email" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
          <input placeholder="Password" type="password" className="w-full hairline rounded-xl bg-background px-4 py-3 text-sm" />
          <button className="w-full rounded-full bg-ink text-ink-foreground py-3.5 text-sm font-medium inline-flex items-center justify-center gap-2">
            Sign in <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            New here? <Link to="/signup" className="text-foreground link-underline">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
