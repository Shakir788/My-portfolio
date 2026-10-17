"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Sparkles, Rocket } from "lucide-react";
import { skills } from "@/data";
import { useState } from "react";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  AI: Sparkles,
  Deployment: Rocket,
};

const categoryBackContent: Record<
  string,
  { stat: string; label: string; desc: string; color: string }
> = {
  Frontend: {
    stat: "5+",
    label: "Production Apps",
    desc: "Pixel-perfect UIs shipped with Next.js 15 & Tailwind v4",
    color: "#38BDF8",
  },
  Backend: {
    stat: "40+",
    label: "API Endpoints",
    desc: "Scalable REST APIs & Server Actions powering real businesses",
    color: "#A78BFA",
  },
  Database: {
    stat: "40+",
    label: "DB Models",
    desc: "Optimized PostgreSQL schemas with Prisma ORM at scale",
    color: "#34D399",
  },
  AI: {
    stat: "3+",
    label: "AI Agents Built",
    desc: "RAG pipelines, autonomous agents & Gemini integrations",
    color: "#F59E0B",
  },
  Deployment: {
    stat: "100%",
    label: "Uptime Focus",
    desc: "CI/CD pipelines, Docker containers & Vercel deployments",
    color: "#F97316",
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: cinematicEase } },
};

function FlipCard({
  group,
  index,
  total,
}: {
  group: (typeof skills)[0];
  index: number;
  total: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = categoryIcons[group.category] ?? Code2;
  const back = categoryBackContent[group.category];
  const color = back?.color ?? "#38BDF8";

  // Touch devices: tap to flip. Mouse devices: hover handles it.
  const isTouch = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <motion.div
      variants={item}
      role="button"
      tabIndex={0}
      aria-label={`${group.category} skills. Press to flip card`}
      aria-pressed={flipped}
      className="group relative cursor-pointer h-full min-h-[230px] outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/60 rounded-2xl"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => !isTouch() && setFlipped(true)}
      onMouseLeave={() => !isTouch() && setFlipped(false)}
      onClick={() => isTouch() && setFlipped((f) => !f)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT FACE (in flow: decides card height) ── */}
        <div
          className="relative h-full rounded-2xl p-5 md:p-6 flex flex-col border border-white/10 overflow-hidden backdrop-blur-xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.025)",
          }}
        >
          {/* Colored top hairline */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}90, transparent)`,
            }}
          />

          {/* Corner glow */}
          <div
            className="absolute -top-12 -right-12 w-36 h-36 blur-[60px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `${color}30` }}
          />

          {/* Header */}
          <div className="flex items-center gap-3 mb-5 relative z-10">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
              style={{ background: `${color}15`, borderColor: `${color}35` }}
            >
              <Icon size={18} style={{ color }} />
            </div>

            <h3 className="font-kanit font-bold uppercase tracking-wide text-white text-base md:text-lg">
              {group.category}
            </h3>

            <span className="ml-auto font-mono text-[10px] tracking-widest text-white/25">
              {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {group.items.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full font-mono text-[11px] text-white/65 border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:text-white"
                style={{ ["--c" as string]: color }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Flip hint */}
          <span className="relative z-10 mt-auto pt-5 font-mono text-[9px] uppercase tracking-[0.25em] text-white/20 group-hover:text-white/45 transition-colors">
            hover to flip ↻
          </span>
        </div>

        {/* ── BACK FACE ── */}
        <div
          className="absolute inset-0 rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center text-center border overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${color}1f 0%, rgba(11,15,25,0.96) 70%)`,
            borderColor: `${color}45`,
            boxShadow: `0 0 40px ${color}18`,
          }}
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border relative z-10"
            style={{ background: `${color}20`, borderColor: `${color}40` }}
          >
            <Icon size={22} style={{ color }} />
          </div>

          <p
            className="font-kanit font-black leading-none mb-1 relative z-10"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", color }}
          >
            {back?.stat}
          </p>

          <p
            className="font-kanit font-bold uppercase tracking-widest text-white mb-2 relative z-10"
            style={{ fontSize: "clamp(0.65rem, 1.1vw, 0.78rem)" }}
          >
            {back?.label}
          </p>

          <p
            className="font-kanit font-light text-white/55 leading-relaxed relative z-10 max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.88rem)" }}
          >
            {back?.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 overflow-x-clip"
      style={{ background: "#0B0F19" }}
    >
      {/* Top hairline glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent pointer-events-none" />

      {/* Background glows */}
      <div className="absolute top-[20%] right-[10%] w-[460px] h-[460px] bg-indigo-500/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[420px] h-[420px] bg-accent-blue/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 md:mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.7, ease: cinematicEase }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent-blue/80 mb-3"
          >
            {"// what I work with"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className="font-kanit font-black uppercase tracking-tight leading-none hero-heading-white"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Tech Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: cinematicEase }}
            className="font-kanit font-light text-white/45 mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}
          >
            Hover (or tap) any card to see real impact — from database schema to the pixel on screen.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 items-stretch"
        >
          {skills.map((group, i) => (
            <FlipCard key={group.category} group={group} index={i} total={skills.length} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}