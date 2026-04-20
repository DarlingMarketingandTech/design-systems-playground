import { ArrowUpRight, Boxes } from "lucide-react";

import { hubs, tools } from "@/data/mock";

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16">
      <section className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
          {hubs.tools.eyebrow}
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50">
          {hubs.tools.title}
        </h1>
        <p className="mt-5 text-base leading-7 text-zinc-400">{hubs.tools.summary}</p>
      </section>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => (
          <article
            key={tool.name}
            className="glass-panel group relative min-h-80 overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/45"
          >
            <div className="absolute inset-0 opacity-0 shadow-[inset_0_0_60px_rgb(56_189_248_/_0.08)] transition group-hover:opacity-100" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Boxes className="h-5 w-5 text-sky-100" />
                  <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                    {tool.status}
                  </span>
                </div>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {tool.category}
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50">
                  {tool.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{tool.description}</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-mono text-sm text-sky-100">{tool.metric}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-sky-300/30 px-4 py-3 text-sm text-sky-100 transition hover:bg-sky-300/10"
                >
                  {tool.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
