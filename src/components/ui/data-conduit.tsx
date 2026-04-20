"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Database, PanelsTopLeft, RadioTower, Workflow } from "lucide-react";

import { GlowingIcon } from "@/components/ui/glowing-icon";

const nodes = [
  { label: "Salesforce", icon: Database, x: 12, y: 52 },
  { label: "Next.js", icon: PanelsTopLeft, x: 39, y: 28 },
  { label: "Automation", icon: Workflow, x: 65, y: 56 },
  { label: "CRM", icon: RadioTower, x: 88, y: 34 },
] as const;

const paths = [
  "M 12 52 C 22 34, 29 26, 39 28",
  "M 39 28 C 48 30, 56 52, 65 56",
  "M 65 56 C 74 56, 80 36, 88 34",
] as const;

export function DataConduit() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="gradient-border relative overflow-hidden rounded-lg p-6">
      <div className="absolute inset-0 dot-matrix opacity-20" />
      <div className="relative mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">System integration</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50">Data-conduit routing</h2>
        </div>
        <p className="hidden max-w-sm text-sm leading-6 text-zinc-400 md:block">
          Signals move through one governed path instead of disappearing between platform handoffs.
        </p>
      </div>
      <div className="relative h-72 rounded-lg border border-white/10 bg-zinc-950/70">
        <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full">
          {paths.map((path) => (
            <path key={path} d={path} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.35" />
          ))}
          {paths.map((path, index) => (
            <motion.path
              key={`${path}-active`}
              d={path}
              fill="none"
              stroke="rgb(125 211 252)"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeDasharray="8 18"
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -52] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
            />
          ))}
        </svg>
        {nodes.map((node) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <GlowingIcon icon={node.icon} label={node.label} />
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              {node.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
