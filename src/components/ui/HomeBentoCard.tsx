"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, Boxes, CircuitBoard, Gauge, Workflow } from "lucide-react";

const icons = {
  boxes: Boxes,
  circuit: CircuitBoard,
  gauge: Gauge,
  workflow: Workflow,
} as const;

export type HomeBentoIcon = keyof typeof icons;

export function HomeBentoCard({
  href,
  icon,
  eyebrow,
  title,
  summary,
}: {
  href: string;
  icon: HomeBentoIcon;
  eyebrow: string;
  title: string;
  summary: string;
}) {
  const Icon = icons[icon];
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${smoothX}px ${smoothY}px, rgba(56,189,248,0.14), rgba(255,255,255,0.035) 32%, transparent 62%)`;

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="group relative min-h-72 overflow-hidden rounded-lg border border-white/5 bg-white/[0.02]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-white/[0.04] via-transparent to-sky-300/[0.03]" />
      <Link href={href} className="relative z-10 flex h-full min-h-72 flex-col justify-between p-6">
        <div>
          <Icon className="h-5 w-5 text-sky-100" />
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-400">{summary}</p>
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-sky-100">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
