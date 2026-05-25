"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  fadeUp,
  fadeUpMobile,
  fadeUpText,
  fadeUpTextMobile,
  getTransition,
  staggerContainer,
  staggerContainerMobile,
} from "./presets";
import { useReducedMotion } from "./useReducedMotion";
import { useIsMobile } from "./useIsMobile";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export function MotionReveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: MotionRevealProps) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const itemVariant = isMobile ? fadeUpMobile : fadeUp;
  const containerVariant = stagger
    ? isMobile
      ? staggerContainerMobile
      : staggerContainer
    : itemVariant;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-32px" : "-72px" }}
      variants={containerVariant}
      transition={{
        ...getTransition(reducedMotion, "section", isMobile),
        delay: reducedMotion ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps {
  children: React.ReactNode;
  className?: string;
  /** Gradient başlık vb. — scale animasyonu kapalı */
  textReveal?: boolean;
}

export function MotionItem({ children, className, textReveal = false }: MotionItemProps) {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const variants = textReveal
    ? isMobile
      ? fadeUpTextMobile
      : fadeUpText
    : isMobile
      ? fadeUpMobile
      : fadeUp;

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      transition={getTransition(reducedMotion, "section", isMobile)}
    >
      {children}
    </motion.div>
  );
}
