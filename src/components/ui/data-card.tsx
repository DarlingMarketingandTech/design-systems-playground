"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { type Proof } from "@/data/mock";
import { CountUp } from "@/components/ui/count-up";

export function DataCard({ item }: { item: Proof }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="glass-panel group relative min-h-80 overflow-hidden rounded-lg p-6"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {item.category}
            </span>
            <span className="rounded border border-white/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              Live metric
            </span>
          </div>
          <CountUp
            value={item.metric.value}
            suffix={item.metric.suffix}
            className="mt-8 block font-mono text-6xl font-semibold tracking-tight text-sky-100 md:text-7xl"
          />
          <p className="mt-3 text-sm text-zinc-400">{item.metric.label}</p>
          <h2 className="mt-8 text-xl font-semibold text-zinc-50">{item.client}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
        </div>
        <div className="mt-8 translate-y-3 border-t border-white/10 pt-5 opacity-70 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Mechanism
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.mechanism}</p>
          <Link
            href={`/proof/${item.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-sky-100"
          >
            Open dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
