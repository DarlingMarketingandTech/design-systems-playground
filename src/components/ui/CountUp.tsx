"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

export function CountUp({
  value,
  suffix = "",
  prefix = "+",
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const spring = useSpring(0, {
    stiffness: reduceMotion ? 1000 : 86,
    damping: reduceMotion ? 100 : 18,
    mass: 0.8,
  });
  const display = useTransform(
    spring,
    (latest) => `${prefix}${Math.round(latest).toLocaleString()}${suffix}`,
  );

  return (
    <motion.span
      className={className}
      initial={false}
      viewport={{ once: true, margin: "-12%" }}
      whileInView="visible"
      onViewportEnter={() => spring.set(value)}
    >
      {display}
    </motion.span>
  );
}
