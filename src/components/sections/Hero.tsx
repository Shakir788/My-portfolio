"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Magnet } from "@/components/animations/Magnet";
import { HudFrame } from "@/components/ui/HudFrame";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const fadeIn = (delay = 0, y = 30, x = 0) => ({
  hidden: { opacity: 0, y, x, filter: "blur(8px)" },
  show: {
    opacity: 1, y: 0, x: 0, filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease: cinematicEase },
  },
});

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const statsY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-x-clip"
      style={{ background: "#0B0F19" }}
    >
      {/* Ambient glows */}
      <motion.div
        className="absolute top-[15%] left-[25%] w-[500px] h-[500px] bg-accent-blue/[0.10] blur-[150px] rounded-full pointer-events-none"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[20%] w-[420px] h-[420px] bg-indigo-500/[0.07] blur-[140px] rounded-full pointer-events-none"
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -25, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* ── MAIN: text (left) + HUD frame (right) ── */}
      <div className="relative z-10 flex-1 flex items-center w-full">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-28 pb-10 grid items-center gap-12 md:gap-8 md:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            {/* Status badge */}
            <motion.div
              variants={fadeIn(0.05, 10)}
              initial="hidden"
              animate="show"
              className="glass-card !rounded-full px-4 py-2 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-white/70">
                Available for work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeIn(0.15, 40)}
              initial="hidden"
              animate="show"
              className="font-kanit font-black uppercase tracking-tight leading-[0.95] hero-heading"
              style={{ fontSize: "clamp(2.6rem, 5.6vw, 5.5rem)" }}
            >
              Hi, I&apos;m <br /> Mohammad <br /> Shakir
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn(0.35, 20)}
              initial="hidden"
              animate="show"
              className="font-kanit font-light uppercase tracking-wide leading-snug text-foreground max-w-[320px] md:max-w-[420px]"
              style={{ fontSize: "clamp(0.8rem, 1.2vw, 1.1rem)" }}
            >
              A product engineer driven by crafting scalable and unforgettable software
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeIn(0.5, 20)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-3 mt-2"
            >
              <Magnet strength={3}>
                <Link
                  href="#projects"
                  className="group relative bg-white text-background px-6 md:px-7 py-3 rounded-full font-kanit font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_32px_rgba(255,255,255,0.25)]"
                >
                  View Projects
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnet>

              <Magnet strength={2}>
                <Link
                  href="/resume"
                  className="group glass-card px-6 md:px-7 py-3 rounded-full font-kanit font-medium uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2 text-foreground hover:bg-white/10 transition-all duration-300"
                >
                  <FileText size={15} className="group-hover:scale-110 transition-transform" />
                  Resume
                </Link>
              </Magnet>
            </motion.div>
          </div>

          {/* RIGHT — HUD frame */}
          <motion.div
            variants={fadeIn(0.45, 40)}
            initial="hidden"
            animate="show"
            className="flex justify-center md:justify-end md:pr-6 lg:pr-12"
          >
            <HudFrame />
          </motion.div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <motion.div
        variants={fadeIn(0.7, 20)}
        initial="hidden"
        animate="show"
        style={{ y: statsY, opacity: statsOpacity }}
        className="relative z-20 mx-auto mb-6 w-[95%] max-w-2xl glass-card rounded-2xl px-2 py-1"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {[
            { label: "Products Shipped", value: "06+" },
            { label: "Primary Stack", value: "Next.js" },
            { label: "Architecture", value: "Scalable" },
            { label: "Years Building", value: "03+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-4 md:py-5 px-2 md:px-3 group">
              <span className="text-lg md:text-2xl font-mono font-bold text-white mb-1 tabular-nums group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-[9px] md:text-[11px] text-white/40 uppercase tracking-widest font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}