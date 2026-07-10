"use client";

import { motion } from "framer-motion";

export function AmbientGlow() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-blue/10 blur-[150px] rounded-full"
        animate={{ x: [0, 50, -20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[80%] -right-[10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full"
        animate={{ x: [0, -40, 20, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[35%] right-[20%] w-[30%] h-[30%] bg-indigo-500/[0.06] blur-[130px] rounded-full"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 25, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}