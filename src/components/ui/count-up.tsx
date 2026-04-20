"use client";

import { animate, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reduceMotion = useReducedMotion();
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 90, damping: 18, mass: 0.75 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => setDisplay(Math.round(latest)));
    return unsubscribe;
  }, [spring]);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      raw.set(value);
      return;
    }

    const controls = animate(raw, value, {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [inView, raw, reduceMotion, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
