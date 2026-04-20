import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SystemCore3D } from "@/components/visual/system-core-3d";
import { hubs, processSteps } from "@/data/mock";

export default function ProcessPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16">
      <section className="relative mb-14 min-h-96 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/35 p-6 md:p-10">
        <SystemCore3D className="left-auto right-[-16%] top-[-12%] hidden w-[62%] opacity-70 md:block" />
        <div className="relative max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-100">
            {hubs.process.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50">
            {hubs.process.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-400">{hubs.process.summary}</p>
        </div>
      </section>
      <ProcessTimeline steps={processSteps} />
    </main>
  );
}
