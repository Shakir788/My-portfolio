"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent-blue via-indigo-400 to-accent-blue/40 shadow-[0_0_12px_rgba(56,189,248,0.6)]"
      style={{ scaleX }}
    />
  );
}