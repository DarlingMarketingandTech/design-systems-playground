import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, CircuitBoard } from "lucide-react";

import { site } from "@/data/mock";

export function GlobalFrame({ children }: { children: ReactNode }) {
  return (
    <div className="technical-grid min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-sky-300/30 bg-sky-300/10 text-sky-200">
              <CircuitBoard className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-zinc-50">
                {site.name}
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                {site.eyebrow}
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-zinc-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="min-h-[calc(100vh-4rem)]">{children}</div>
      <footer className="border-t border-white/10 bg-zinc-950/70">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              {site.eyebrow}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              {site.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {site.footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-sky-300/40 hover:text-sky-100"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
