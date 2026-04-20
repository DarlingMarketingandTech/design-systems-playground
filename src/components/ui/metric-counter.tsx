"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function MetricCounter({
  value,
  suffix,
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const totalFrames = 38;
    const interval = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplay(Math.round(value * progress));

      if (frame >= totalFrames) {
        window.clearInterval(interval);
        setDisplay(value);
      }
    }, 18);

    return () => window.clearInterval(interval);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      +{display}
      {suffix}
    </span>
  );
}
