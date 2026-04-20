import Link from "next/link";
import { ArrowRight, Boxes, CircuitBoard, Gauge, Workflow } from "lucide-react";

import { DataConduit } from "@/components/ui/data-conduit";
import { hubs, site } from "@/data/mock";
import { SystemCore3D } from "@/components/visual/system-core-3d";

export default function Home() {
  const entries = [
    { href: "/problems", icon: Gauge, ...hubs.problems },
    { href: "/proof", icon: CircuitBoard, ...hubs.proof },
    { href: "/process", icon: Workflow, ...hubs.process },
    { href: "/tools", icon: Boxes, ...hubs.tools },
  ];

  return (
    <main className="w-full overflow-hidden">
      <section className="relative mx-auto min-h-[calc(100svh-4rem)] w-full max-w-7xl px-5 py-16 md:py-24">
        <SystemCore3D className="left-auto right-[-18%] top-0 hidden w-[66%] opacity-80 md:block" />
        <div className="relative z-10 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
            {site.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50 md:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            {site.description}
          </p>
        </div>
        <div className="relative z-10 mt-14 max-w-5xl">
          <DataConduit />
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-7xl gap-4 px-5 pb-16 md:grid-cols-2">
        {entries.map((entry) => {
          const Icon = entry.icon;
          return (
            <Link
              key={entry.href}
              href={entry.href}
              className="glass-panel group min-h-72 rounded-lg p-6 transition hover:-translate-y-1 hover:border-sky-300/35"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <Icon className="h-5 w-5 text-sky-100" />
                  <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    {entry.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
                    {entry.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {entry.summary}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-sky-100">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
