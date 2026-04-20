"use client";

import { motion } from "framer-motion";

export function ImpactChart({ points }: { points: number[] }) {
  const max = Math.max(...points);
  const polyline = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 100 - (point / max) * 78 - 10;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="glass-panel relative overflow-hidden rounded-lg p-6">
      <div className="absolute inset-0 dot-matrix opacity-20" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
            Impact telemetry
          </p>
          <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgb(56_189_248)]" />
        </div>
        <svg viewBox="0 0 100 100" className="h-72 w-full overflow-visible">
          {[20, 40, 60, 80].map((line) => (
            <line
              key={line}
              x1="0"
              x2="100"
              y1={line}
              y2={line}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="0.5"
            />
          ))}
          <motion.polyline
            points={polyline}
            fill="none"
            stroke="rgb(125 211 252)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          {points.map((point, index) => {
            const x = (index / (points.length - 1)) * 100;
            const y = 100 - (point / max) * 78 - 10;
            return (
              <motion.circle
                key={`${point}-${index}`}
                cx={x}
                cy={y}
                r="1.8"
                fill="rgb(224 242 254)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 + index * 0.08 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
