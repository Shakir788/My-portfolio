"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cinematicEase = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    num: "01",
    name: "Full Stack Development",
    desc: "End-to-end web application development — from database schema to pixel-perfect UI — using Next.js 15, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    num: "02",
    name: "SaaS & ERP Architecture",
    desc: "Designing and building scalable multi-tenant SaaS platforms and enterprise ERP systems with robust RBAC, real-time tracking, and modular workflows.",
    tags: ["Multi-tenant", "RBAC", "Realtime"],
  },
  {
    num: "03",
    name: "AI Integration",
    desc: "Integrating OpenAI, Google Gemini, and custom RAG pipelines into products — chatbots, autonomous agents, and AI-powered features that actually ship.",
    tags: ["OpenAI", "Gemini", "RAG"],
  },
  {
    num: "04",
    name: "UI / UX Design",
    desc: "Crafting clean, conversion-focused interfaces with attention to layout, typography, and user experience — premium feel, every time.",
    tags: ["Design Systems", "Motion", "Responsive"],
  },
  {
    num: "05",
    name: "API & Backend Systems",
    desc: "Building secure, performant REST APIs and server-side systems using Node.js, Next.js API Routes, PostgreSQL, Prisma, and Redis.",
    tags: ["Node.js", "PostgreSQL", "Prisma", "Redis"],
  },
];

// Mouse position -> CSS vars (used by .spotlight in globals.css)
function handleMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 overflow-x-clip"
      style={{ background: "#0B0F19" }}
    >
      {/* Top hairline glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent pointer-events-none" />

      {/* Soft background glows */}
      <div className="absolute top-1/4 left-[20%] w-[480px] h-[480px] bg-accent-blue/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] bg-indigo-500/[0.05] blur-[150px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative text-center mb-10 sm:mb-12 md:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.7, ease: cinematicEase }}
          className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-accent-blue/80 mb-3"
        >
          {"// what I do"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.9, ease: cinematicEase }}
          className="font-kanit font-black uppercase leading-none tracking-tight hero-heading-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
        >
          Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: cinematicEase }}
          className="mt-4 mx-auto max-w-md text-sm md:text-base font-light text-white/45"
        >
          From idea to production — five things I do end to end.
        </motion.p>
      </div>

      {/* Services list */}
      <div className="relative max-w-4xl mx-auto flex flex-col gap-3">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "30px" }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: cinematicEase }}
          >
            <div
              onMouseMove={handleMove}
              className="spotlight group relative overflow-hidden glass-card glass-card-hover !rounded-2xl flex items-start gap-4 md:gap-8 px-5 sm:px-6 md:px-8 py-5 md:py-6 hover:!border-accent-blue/30"
            >
              {/* Number — outline, fills on hover */}
              <span
                className="relative z-10 font-kanit font-black leading-none shrink-0 text-transparent transition-all duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] group-hover:[-webkit-text-stroke:1px_#38BDF8] group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                {service.num}
              </span>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1 min-w-0">
                <h3
                  className="font-kanit font-medium uppercase tracking-wide text-white mb-1.5"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.35rem)" }}
                >
                  {service.name}
                </h3>

                <p
                  className="font-kanit font-light leading-relaxed max-w-2xl text-white/50 group-hover:text-white/70 transition-colors duration-300"
                  style={{ fontSize: "clamp(0.8rem, 1.05vw, 1rem)" }}
                >
                  {service.desc}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-3.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] md:text-[11px] uppercase tracking-wider text-white/45 border border-white/10 bg-white/[0.03] rounded-full px-2.5 py-1 transition-colors duration-300 group-hover:border-accent-blue/25 group-hover:text-accent-blue/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={22}
                className="relative z-10 hidden sm:block shrink-0 mt-1 text-accent-blue opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
              />

              {/* Bottom accent line sweep */}
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-accent-blue via-indigo-400 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}