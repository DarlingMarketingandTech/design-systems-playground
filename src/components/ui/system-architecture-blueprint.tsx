"use client";

import { motion } from "framer-motion";

const pathA = "M90 150 H320";
const pathB = "M360 150 H600";
const pathC = "M640 150 H870";

export function SystemArchitectureBlueprint() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl md:p-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(255_255_255_/_0.02)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-400">
          System architecture blueprint
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
          Ads -&gt; Provider Directory -&gt; CRM
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mt-8 overflow-x-auto"
      >
        <svg
          width="960"
          height="300"
          viewBox="0 0 960 300"
          className="min-w-[920px]"
          aria-label="Graston growth engine architecture"
          role="img"
        >
          <defs>
            <linearGradient id="packetGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.6" result="blurred" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect x="40" y="84" width="260" height="132" rx="12" fill="#111827" stroke="#3f3f46" />
          <rect x="350" y="84" width="260" height="132" rx="12" fill="#111827" stroke="#3f3f46" />
          <rect x="660" y="84" width="260" height="132" rx="12" fill="#111827" stroke="#3f3f46" />

          <text x="72" y="130" fill="#a1a1aa" fontSize="12" fontFamily="monospace">
            ACQUISITION
          </text>
          <text x="72" y="162" fill="#f4f4f5" fontSize="22" fontFamily="sans-serif">
            Paid Ads
          </text>

          <text x="382" y="130" fill="#a1a1aa" fontSize="12" fontFamily="monospace">
            DISCOVERY LAYER
          </text>
          <text x="382" y="162" fill="#f4f4f5" fontSize="22" fontFamily="sans-serif">
            Provider Directory
          </text>

          <text x="692" y="130" fill="#a1a1aa" fontSize="12" fontFamily="monospace">
            ORCHESTRATION
          </text>
          <text x="692" y="162" fill="#f4f4f5" fontSize="22" fontFamily="sans-serif">
            CRM Automations
          </text>

          <path d={pathA} stroke="#38bdf8" strokeOpacity="0.28" strokeWidth="1.5" />
          <path d={pathB} stroke="#38bdf8" strokeOpacity="0.28" strokeWidth="1.5" />
          <path d={pathC} stroke="#38bdf8" strokeOpacity="0.28" strokeWidth="1.5" />

          <circle r="5" fill="url(#packetGlow)" filter="url(#softGlow)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path={pathA} />
          </circle>
          <circle r="5" fill="url(#packetGlow)" filter="url(#softGlow)">
            <animateMotion dur="2.6s" begin="0.4s" repeatCount="indefinite" path={pathB} />
          </circle>
          <circle r="5" fill="url(#packetGlow)" filter="url(#softGlow)">
            <animateMotion dur="2.8s" begin="0.8s" repeatCount="indefinite" path={pathC} />
          </circle>
        </svg>
      </motion.div>
    </section>
  );
}
