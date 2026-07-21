"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/** "40+", "48s" gibi metinlerden sayısal kısmı ayırıp 0'dan yukarı sayar */
export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(numeric === null || reducedMotion ? value : "0");

  useEffect(() => {
    if (numeric === null || reducedMotion || !inView) return;
    const controls = animate(0, numeric, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(`${Math.round(v)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, numeric, reducedMotion, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
