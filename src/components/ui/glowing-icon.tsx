"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function GlowingIcon({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-label={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-sky-300/25 bg-sky-300/10 text-sky-100 shadow-[0_0_24px_rgb(56_189_248_/_0.14)]",
        className,
      )}
      whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <Icon className="h-4 w-4 drop-shadow-[0_0_10px_rgb(125_211_252)]" />
    </motion.span>
  );
}
