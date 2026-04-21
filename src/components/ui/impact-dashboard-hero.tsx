"use client";

import { motion } from "framer-motion";

import { MetricCounter } from "@/components/ui/metric-counter";

type HeroMetric = {
  label: string;
  value: number;
  suffix: string;
  helper: string;
};

const metrics: HeroMetric[] = [
  {
    label: "Qualified leads",
    value: 212,
    suffix: "%",
    helper: "Within 90 days after infrastructure re-architecture",
  },
  {
    label: "Less manual overhead",
    value: 95,
    suffix: "%",
    helper: "Automation coverage across intake and follow-up paths",
  },
];

export function ImpactDashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgb(56_189_248_/_0.16),transparent_38rem)]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative"
      >
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-sky-200">
          Proof / Impact Dashboard
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-50 md:text-6xl">
          Graston Growth Engine
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
          A precision-built acquisition system connecting paid demand, provider discovery,
          and CRM orchestration into one measurable operating surface.
        </p>
      </motion.div>

      <div className="relative mt-8 grid gap-4 md:grid-cols-2">
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease: "easeOut" }}
            className="rounded-lg border border-white/10 bg-zinc-900/55 p-5"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {metric.label}
            </p>
            <MetricCounter
              value={metric.value}
              suffix={metric.suffix}
              className="mt-4 block font-mono text-5xl font-semibold tracking-tight text-sky-100 md:text-6xl"
            />
            <p className="mt-3 text-sm text-zinc-400">{metric.helper}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
