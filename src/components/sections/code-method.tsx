"use client";

import { Info } from "lucide-react";
import { useState } from "react";

import { type ProcessStep } from "@/data/mock";

export function CodeMethod({ step }: { step: ProcessStep }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="glass-panel rounded-lg p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          {step.codeLabel}
        </p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="relative rounded-md border border-white/10 p-2 text-zinc-400 transition hover:border-sky-300/40 hover:text-sky-100"
          aria-label={step.tooltip}
        >
          <Info className="h-4 w-4" />
          {open ? (
            <span className="absolute right-0 top-11 z-10 w-72 rounded-md border border-white/10 bg-zinc-950 p-3 text-left text-xs leading-5 text-zinc-300 shadow-2xl">
              {step.tooltip}
            </span>
          ) : null}
        </button>
      </div>
      <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-5 text-sm leading-7 text-sky-100">
        <code>{step.code}</code>
      </pre>
    </section>
  );
}
