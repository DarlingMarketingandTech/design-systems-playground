"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

type DiffMode = "before" | "after";

export function SystemDiffToggle({
  before,
  after,
}: {
  before: string[];
  after: string[];
}) {
  const [mode, setMode] = useState<DiffMode>("before");
  const reduceMotion = useReducedMotion();
  const items = mode === "before" ? before : after;

  return (
    <section className="gradient-border rounded-lg p-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">Architecture diff</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-50">Fragmented system to unified pipeline</h2>
        </div>
        <div className="inline-flex rounded-md border border-white/10 bg-zinc-950/70 p-1">
          {(["before", "after"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setMode(item)}
              className="relative rounded px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 transition hover:text-zinc-100"
            >
              {mode === item ? (
                <motion.span
                  layoutId="diff-toggle-active"
                  className="absolute inset-0 rounded bg-sky-300/10 accent-ring"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              ) : null}
              <span className="relative">{item}</span>
            </button>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "relative mt-8 grid min-h-80 gap-4 overflow-hidden rounded-lg border border-white/10 bg-black/25 p-5",
          mode === "after" ? "md:grid-cols-3" : "md:grid-cols-2",
        )}
      >
        <div className="absolute inset-0 dot-matrix opacity-20" />
        {mode === "after" ? (
          <motion.div
            layout
            className="absolute left-[12%] right-[12%] top-1/2 hidden h-px bg-sky-300/40 md:block"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : null}
        {items.map((item, index) => (
          <motion.div
            layout
            key={item}
            className={cn(
              "relative z-10 min-h-24 rounded-lg border p-4",
              mode === "after"
                ? "border-sky-300/35 bg-sky-300/10 shadow-[0_0_40px_rgb(56_189_248_/_0.1)]"
                : "border-red-300/15 bg-red-950/10 opacity-75",
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26, delay: index * 0.04 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              {mode === "after" ? `Pipeline ${index + 1}` : `Fragment ${index + 1}`}
            </p>
            <p className="mt-5 text-sm text-zinc-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
