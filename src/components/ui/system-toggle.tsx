"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function SystemToggle({
  before,
  after,
}: {
  before: string[];
  after: string[];
}) {
  const [mode, setMode] = useState<"before" | "after">("before");
  const activeItems = mode === "before" ? before : after;

  return (
    <div className="glass-panel rounded-lg p-5">
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
                layoutId="system-toggle-active"
                className="absolute inset-0 rounded bg-sky-300/10 accent-ring"
              />
            ) : null}
            <span className="relative">{item}</span>
          </button>
        ))}
      </div>
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-5 grid gap-3"
      >
        {activeItems.map((item) => (
          <div
            key={item}
            className="rounded-md border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
