import type { Metadata } from "next";

import { DiagnosticCta } from "@/components/ui/diagnostic-cta";
import { ImpactDashboardHero } from "@/components/ui/impact-dashboard-hero";
import { SystemArchitectureBlueprint } from "@/components/ui/system-architecture-blueprint";
import { TechStackRibbon } from "@/components/ui/tech-stack-ribbon";

export const metadata: Metadata = {
  title: "Graston Technique Proof | Darling MarTech v2",
  description:
    "Engineering teardown case study for the Graston Growth Engine across acquisition, provider discovery, and CRM automation.",
};

export default function GrastonTechniqueProofPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-16">
      <ImpactDashboardHero />

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <SystemArchitectureBlueprint />
        <aside className="space-y-6">
          <article className="rounded-xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
              Operational readout
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50">
              Why the system performed
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              The architecture removed blind handoffs by standardizing intake signal quality,
              indexing provider profile strength, and enforcing deterministic CRM routing.
            </p>
            <div className="mt-6">
              <DiagnosticCta />
            </div>
          </article>
          <TechStackRibbon />
        </aside>
      </section>
    </main>
  );
}
