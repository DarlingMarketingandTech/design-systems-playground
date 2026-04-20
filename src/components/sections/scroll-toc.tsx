"use client";

import { motion, useScroll } from "framer-motion";

import { type Problem } from "@/data/mock";

export function ScrollToc({ sections }: { sections: Problem["sections"] }) {
  const { scrollYProgress } = useScroll();

  return (
    <aside className="sticky top-24 hidden h-fit lg:block">
      <div className="glass-panel rounded-lg p-5">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
          Teardown map
        </p>
        <div className="mt-5 h-1 overflow-hidden rounded bg-white/10">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full origin-left bg-sky-300"
          />
        </div>
        <nav className="mt-6 grid gap-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-zinc-400 transition hover:text-sky-100"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
