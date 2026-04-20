import { DataConduit } from "@/components/ui/DataConduit";
import { HomeBentoCard } from "@/components/ui/HomeBentoCard";
import type { HomeBentoIcon } from "@/components/ui/HomeBentoCard";
import { SystemCore3D } from "@/components/ui/SystemCore3D";
import { hubs, site } from "@/data/mock";

export default function Home() {
  const entries: Array<{
    href: string;
    icon: HomeBentoIcon;
    eyebrow: string;
    title: string;
    summary: string;
  }> = [
    { href: "/problems", icon: "gauge", ...hubs.problems },
    { href: "/proof", icon: "circuit", ...hubs.proof },
    { href: "/process", icon: "workflow", ...hubs.process },
    { href: "/tools", icon: "boxes", ...hubs.tools },
  ];

  return (
    <main className="w-full overflow-hidden">
      <section className="relative mx-auto min-h-[calc(100svh-4rem)] w-full max-w-7xl px-5 py-16 md:py-24">
        <SystemCore3D className="left-auto right-[-42%] top-4 w-[120%] opacity-20 md:right-[-18%] md:top-0 md:w-[66%] md:opacity-30" />
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
          return (
            <HomeBentoCard
              key={entry.href}
              href={entry.href}
              icon={entry.icon}
              eyebrow={entry.eyebrow}
              title={entry.title}
              summary={entry.summary}
            />
          );
        })}
      </section>
    </main>
  );
}
