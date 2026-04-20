import { BentoGrid } from "@/components/ui/bento-grid";
import { ParticleNetwork } from "@/components/visual/particle-network";
import { hubs, problems } from "@/data/mock";

export default function ProblemsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16">
      <section className="relative mb-10 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/40 p-6 md:p-10">
        <ParticleNetwork className="opacity-75" />
        <div className="relative max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
            {hubs.problems.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50">
            {hubs.problems.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-400">{hubs.problems.summary}</p>
        </div>
      </section>
      <BentoGrid items={problems} />
    </main>
  );
}
