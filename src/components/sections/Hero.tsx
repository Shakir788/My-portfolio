"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Magnet } from "@/components/animations/Magnet";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

// FadeIn helper
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

      {/* ── NAVBAR ── */}
      <motion.nav
        variants={fadeIn(0, -20)}
        initial="hidden"
        animate="show"
        className="relative z-20 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {["About", "Services", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm md:text-base lg:text-[1.1rem] font-kanit font-medium uppercase tracking-wider text-foreground hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </motion.nav>

      {/* ── HERO HEADING (Mobile Fixed) ── */}
      <div className="px-4 relative z-10 mt-10 md:mt-0 flex justify-center">
        <motion.h1
          variants={fadeIn(0.15, 40)}
          initial="hidden"
          animate="show"
          // whitespace-nowrap hata diya aur leading tight kardi
          className="font-kanit font-black uppercase tracking-tight leading-[0.85] text-center w-full hero-heading"
          style={{
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            marginTop: "clamp(-0.5rem, -1vw, -2rem)",
          }}
        >
          Hi, i&apos;m <br className="md:hidden" /> Mohammad Shakir
        </motion.h1>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-10 pb-[120px] sm:pb-8 md:pb-10 mt-auto gap-6 md:gap-0">
        {/* Left description */}
        <motion.p
          variants={fadeIn(0.35, 20)}
          initial="hidden"
          animate="show"
          className="font-kanit font-light uppercase tracking-wide leading-snug text-foreground text-center md:text-left max-w-[240px] md:max-w-[280px]"
          style={{ fontSize: "clamp(0.7rem, 1.3vw, 1.2rem)" }}
        >
          A product engineer driven by crafting scalable and unforgettable software
        </motion.p>

        {/* Right — CTA buttons */}
        <motion.div
          variants={fadeIn(0.5, 20)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3"
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

      {/* ── PORTRAIT — centered, magnetic (Mobile sized fixed) ── */}
      <motion.div
        variants={fadeIn(0.6, 30)}
        initial="hidden"
        animate="show"
        className="absolute left-1/2 -translate-x-1/2 z-10 bottom-6 sm:bottom-0"
        style={{ top: "auto" }}
      >
        <Magnet padding={150} strength={3}>
          <div
            // w-[180px] for mobile to prevent overlapping with everything
            className="w-[180px] sm:w-[300px] md:w-[380px] lg:w-[440px] aspect-[3/4] rounded-t-[140px] overflow-hidden border border-white/10"
            style={{
              background: "linear-gradient(180deg, rgba(56,189,248,0.08) 0%, rgba(11,15,25,0.4) 100%)",
            }}
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Mohammad Shakir"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </Magnet>
      </motion.div>

      {/* ── STATS BAR — parallax scroll ── */}
      <motion.div
        variants={fadeIn(0.7, 20)}
        initial="hidden"
        animate="show"
        style={{ y: statsY, opacity: statsOpacity }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-20 glass-card rounded-2xl px-2 py-1"
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