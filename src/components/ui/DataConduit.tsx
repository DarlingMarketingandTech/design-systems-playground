"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, LineChart, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const nodes: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Salesforce", icon: Database },
  { label: "Next.js", icon: Workflow },
  { label: "CRM", icon: LineChart },
];

export function DataConduit() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-6">
      <div className="absolute inset-0 dot-matrix opacity-15" />
      <div className="relative mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
            System integration
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50">
            Data-conduit routing
          </h2>
        </div>
        <p className="hidden max-w-sm text-sm leading-6 text-zinc-400 md:block">
          Signals move through one governed path instead of disappearing between platform handoffs.
        </p>
      </div>
      <div className="relative flex min-h-48 items-center justify-between gap-4 rounded-lg border border-white/10 bg-zinc-950/70 px-4 py-8 md:px-10">
        <svg
          aria-hidden="true"
          className="absolute left-[18%] right-[18%] top-1/2 h-16 w-[64%] -translate-y-1/2 overflow-visible"
          viewBox="0 0 300 64"
          preserveAspectRatio="none"
        >
          <path
            id="data-conduit-line"
            d="M 4 32 C 88 10, 144 54, 296 32"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1"
          />
          <path
            d="M 4 32 C 88 10, 144 54, 296 32"
            fill="none"
            stroke="rgba(125,211,252,0.28)"
            strokeDasharray="7 18"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <motion.circle
            r="4"
            fill="rgb(186 230 253)"
            filter="url(#data-conduit-glow)"
            initial={{ offsetDistance: "0%" }}
            animate={reduceMotion ? undefined : { offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            style={{
              offsetPath: "path('M 4 32 C 88 10, 144 54, 296 32')",
            }}
          />
          <defs>
            <filter id="data-conduit-glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        {nodes.map((node) => {
          const Icon = node.icon;

          return (
            <div key={node.label} className="relative z-10 flex flex-1 flex-col items-center">
              <div className="grid h-16 w-16 place-items-center rounded-lg border border-sky-200/20 bg-zinc-950 shadow-[0_0_34px_rgb(56_189_248_/_0.08)]">
                <Icon className="h-6 w-6 text-sky-100" />
              </div>
              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                {node.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
