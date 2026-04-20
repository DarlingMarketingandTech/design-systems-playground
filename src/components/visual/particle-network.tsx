"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { x: 8, y: 38 },
  { x: 20, y: 20 },
  { x: 34, y: 52 },
  { x: 52, y: 28 },
  { x: 66, y: 62 },
  { x: 82, y: 34 },
  { x: 92, y: 54 },
] as const;

const links = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [2, 4],
  [3, 5],
] as const;

export function ParticleNetwork({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg viewBox="0 0 100 80" className="h-full w-full">
        <defs>
          <radialGradient id="particle-node-glow">
            <stop offset="0%" stopColor="rgb(186 230 253)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {links.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];
          return (
            <g key={`${from}-${to}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke="rgba(125,211,252,0.18)"
                strokeWidth="0.22"
              />
              {!reduceMotion ? (
                <motion.circle
                  r="0.7"
                  fill="rgb(186 230 253)"
                  initial={{ cx: start.x, cy: start.y, opacity: 0 }}
                  animate={{
                    cx: [start.x, end.x],
                    cy: [start.y, end.y],
                    opacity: [0, 0.95, 0],
                  }}
                  transition={{
                    duration: 3.4 + index * 0.2,
                    repeat: Infinity,
                    delay: index * 0.35,
                    ease: "easeInOut",
                  }}
                />
              ) : null}
            </g>
          );
        })}
        {nodes.map((node, index) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r="4.5" fill="url(#particle-node-glow)" opacity="0.35" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.2"
              fill="rgb(224 242 254)"
              animate={reduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [1, 1.35, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.22 }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
