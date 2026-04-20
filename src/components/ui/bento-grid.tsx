"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";

import { type Problem } from "@/data/mock";

const severityTone: Record<Problem["severity"], string> = {
  Critical: "border-sky-300/40 text-sky-100",
  High: "border-white/15 text-zinc-100",
  Medium: "border-white/10 text-zinc-300",
};

export function BentoGrid({ items }: { items: Problem[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map((item, index) => (
        <InteractiveBentoItem
          key={item.slug}
          item={item}
          featured={index === 0}
        />
      ))}
    </div>
  );
}

function InteractiveBentoItem({ item, featured }: { item: Problem; featured: boolean }) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22 });
  const backgroundX = useTransform(smoothX, [-1, 1], ["42%", "58%"]);
  const backgroundY = useTransform(smoothY, [-1, 1], ["42%", "58%"]);

  return (
    <Link
      href={`/problems/${item.slug}`}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
        pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className={`gradient-border group relative overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-1 ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <motion.div
        className="absolute inset-0 opacity-30 transition group-hover:opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--x) var(--y), rgba(56,189,248,0.22), transparent 30rem)",
          backgroundPositionX: backgroundX,
          backgroundPositionY: backgroundY,
          ["--x" as string]: "50%",
          ["--y" as string]: "50%",
        }}
      />
      <div className="dot-matrix absolute inset-0 opacity-20 transition group-hover:opacity-35" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="8"
          fill="none"
          stroke="rgb(125 211 252 / 0.78)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileHover={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        />
      </svg>
      <div className="relative flex min-h-64 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-4">
            <span
              className={`rounded-md border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] ${severityTone[item.severity]}`}
            >
              {item.severity}
            </span>
            <Gauge className="h-4 w-4 text-sky-200/70" />
          </div>
          <h2 className="mt-8 max-w-xl text-2xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
            {item.title}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">{item.bottleneck}</p>
        </div>
        <div className="mt-8 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Signal</p>
            <p className="mt-2 text-sm text-zinc-200">{item.signal}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">Metric</p>
            <p className="mt-2 text-sm text-sky-100">{item.metric}</p>
          </div>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-300 transition group-hover:text-sky-100">
          Inspect teardown
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
