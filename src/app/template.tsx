"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/motion/useReducedMotion";

/** Next.js her navigasyonda yeniden mount eder — sayfa geçiş animasyonu için */
export default function Template({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
