"use client";

import { motion } from "framer-motion";

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

const SERVICES = [
  {
    num: "01",
    name: "Full Stack Development",
    desc: "End-to-end web application development — from database schema to pixel-perfect UI — using Next.js 15, TypeScript, and Tailwind CSS.",
  },
  {
    num: "02",
    name: "SaaS & ERP Architecture",
    desc: "Designing and building scalable multi-tenant SaaS platforms and enterprise ERP systems with robust RBAC, real-time tracking, and modular workflows.",
  },
  {
    num: "03",
    name: "AI Integration",
    desc: "Integrating OpenAI, Google Gemini, and custom RAG pipelines into products — chatbots, autonomous agents, and AI-powered features that actually ship.",
  },
  {
    num: "04",
    name: "UI / UX Design",
    desc: "Crafting clean, conversion-focused interfaces with attention to layout, typography, and user experience — premium feel, every time.",
  },
  {
    num: "05",
    name: "API & Backend Systems",
    desc: "Building secure, performant REST APIs and server-side systems using Node.js, Next.js API Routes, PostgreSQL, Prisma, and Redis.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{
        background: "#FFFFFF",
        borderRadius: "40px 40px 0 0",
      }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.9, ease: cinematicEase }}
        className="font-kanit font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
        style={{
          fontSize: "clamp(3rem, 12vw, 10rem)",
          color: "#0B0F19",
        }}
      >
        Services
      </motion.h2>

      {/* Services list */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "30px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: cinematicEase }}
            className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : undefined,
              borderBottom: "1px solid rgba(12,12,12,0.15)",
            }}
          >
            {/* Number */}
            <span
              className="font-kanit font-black leading-none shrink-0"
              style={{
                fontSize: "clamp(3rem, 10vw, 9rem)",
                color: "#0B0F19",
                lineHeight: 1,
              }}
            >
              {service.num}
            </span>

            {/* Name + Description */}
            <div className="flex flex-col justify-center pt-2">
              <h3
                className="font-kanit font-medium uppercase mb-2"
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                  color: "#0B0F19",
                }}
              >
                {service.name}
              </h3>
              <p
                className="font-kanit font-light leading-relaxed max-w-2xl"
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  color: "#0B0F19",
                  opacity: 0.6,
                }}
              >
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}