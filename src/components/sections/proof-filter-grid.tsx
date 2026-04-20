"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { DataCard } from "@/components/ui/data-card";
import { type Proof, type ProofCategory } from "@/data/mock";

const allLabel = "All";

export function ProofFilterGrid({ items }: { items: Proof[] }) {
  const categories = useMemo(
    () => [allLabel, ...Array.from(new Set(items.map((item) => item.category)))] as Array<
      ProofCategory | typeof allLabel
    >,
    [items],
  );
  const [active, setActive] = useState<ProofCategory | typeof allLabel>(allLabel);
  const visible = active === allLabel ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className="relative rounded-md border border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-zinc-400 transition hover:text-zinc-100"
          >
            {active === category ? (
              <motion.span
                layoutId="proof-filter-active"
                className="absolute inset-0 rounded-md border border-sky-300/30 bg-sky-300/10"
              />
            ) : null}
            <span className="relative">{category}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <DataCard key={item.slug} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
