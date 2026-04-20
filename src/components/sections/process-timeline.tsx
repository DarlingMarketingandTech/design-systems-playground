"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import { type ProcessStep } from "@/data/mock";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-5 top-0 hidden h-full w-px origin-top bg-sky-300 md:block"
      />
      <div className="grid gap-6">
        {steps.map((step) => (
          <motion.article
            key={step.slug}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            className="glass-panel relative rounded-lg p-6 md:ml-16"
          >
            <span className="absolute -left-[3.2rem] top-8 hidden h-4 w-4 rounded-full border border-sky-300 bg-zinc-950 shadow-[0_0_18px_rgb(56_189_248_/_0.45)] md:block" />
            <div className="grid gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-sky-100">
                  {step.stage}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
                  {step.summary}
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                {step.duration}
              </div>
            </div>
            <Link
              href={`/process/${step.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm text-sky-100"
            >
              Open method
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
