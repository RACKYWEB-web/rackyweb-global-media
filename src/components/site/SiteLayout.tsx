import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
      <a
        href="https://wa.me/10000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-3 bg-emerald text-emerald-foreground shadow-luxe hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="text-xs font-medium tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
