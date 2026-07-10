"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Sparkles, Rocket } from "lucide-react";
import { skills } from "@/data";
import { useState } from "react";

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  AI: Sparkles,
  Deployment: Rocket,
};

// Back side ka fun content — har category ke liye
const categoryBackContent: Record<string, { stat: string; label: string; desc: string; color: string }> = {
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
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function FlipCard({ group }: { group: (typeof skills)[0] }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = categoryIcons[group.category] ?? Code2;
  const back = categoryBackContent[group.category];

  return (
    <motion.div
      variants={item}
      className="relative cursor-pointer"
      style={{ perspective: "1000px", height: "100%", minHeight: 220 }}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Flip container */}
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: 220,
        }}
      >
        {/* ── FRONT FACE ── */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col border border-white/10 group overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `${back?.color ?? "#38BDF8"}22` }}
          />

          {/* Icon + category */}
          <div className="flex items-center gap-3 mb-5 relative z-10">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0"
              style={{
                background: `${back?.color ?? "#38BDF8"}18`,
                borderColor: `${back?.color ?? "#38BDF8"}35`,
              }}
            >
              <Icon size={18} style={{ color: back?.color ?? "#38BDF8" }} />
            </div>
            <h3 className="font-kanit font-black uppercase tracking-wide text-foreground text-lg">
              {group.category}
            </h3>

            {/* Flip hint */}
            <span className="ml-auto font-kanit text-[9px] uppercase tracking-widest text-foreground/20 group-hover:text-foreground/40 transition-colors">
              hover ↻
            </span>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {group.items.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 border border-white/10 rounded-full font-kanit text-xs text-foreground/65 hover:border-white/20 hover:text-foreground transition-colors"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center text-center border overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${back?.color ?? "#38BDF8"}18 0%, rgba(11,15,25,0.95) 100%)`,
            borderColor: `${back?.color ?? "#38BDF8"}40`,
          }}
        >
          {/* Glow bg */}
          <div
            className="absolute inset-0 opacity-10 rounded-2xl pointer-events-none"
            style={{ background: back?.color ?? "#38BDF8" }}
          />

          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border relative z-10"
            style={{
              background: `${back?.color ?? "#38BDF8"}20`,
              borderColor: `${back?.color ?? "#38BDF8"}40`,
            }}
          >
            <Icon size={26} style={{ color: back?.color ?? "#38BDF8" }} />
          </div>

          {/* Big stat */}
          <p
            className="font-kanit font-black leading-none mb-1 relative z-10"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              color: back?.color ?? "#38BDF8",
            }}
          >
            {back?.stat}
          </p>

          <p
            className="font-kanit font-black uppercase tracking-widest text-foreground mb-3 relative z-10"
            style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)" }}
          >
            {back?.label}
          </p>

          <p
            className="font-kanit font-light text-foreground/55 leading-relaxed relative z-10"
            style={{ fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)" }}
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
    <section id="skills" className="w-full px-5 sm:px-8 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="font-kanit text-xs text-accent-blue/80 uppercase tracking-widest">
            What I work with
          </span>
          <h2
            className="font-kanit font-black uppercase tracking-tight text-foreground mt-3 leading-none"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            Tech Stack
          </h2>
          <p
            className="font-kanit font-light text-foreground/45 mt-4 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)" }}
          >
            Hover any card to see real impact — from database schema to the pixel on screen.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ alignItems: "stretch" }}
        >
          {skills.map((group) => (
            <FlipCard key={group.category} group={group} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <p className="text-center font-kanit text-xs text-foreground/20 uppercase tracking-widest mt-10">
          Hover cards to flip ↻
        </p>
      </div>
    </section>
  );
}