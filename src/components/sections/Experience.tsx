"use client";

import { motion } from "framer-motion";
import { Briefcase, Database, Users, Code2, Server } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/components/animations";

export function Experience() {
  const achievements = [
    { icon: <Code2 size={20} />, value: "06+", label: "Production Products" },
    { icon: <Database size={20} />, value: "40+", label: "Database Models" },
    { icon: <Users size={20} />, value: "10+", label: "User Roles (RBAC)" },
    { icon: <Server size={20} />, value: "100%", label: "Global Ready" },
  ];

  const responsibilities = [
    "Built and deployed 6+ production-ready SaaS applications, ERP systems, and e-commerce platforms from idea to deployment.",
    "Designed and implemented 40+ database models and scalable architectures using PostgreSQL and Prisma ORM.",
    "Developed ERP system handling inventory, CRM, finance, warehouse, and live tracking for pharmaceutical distribution companies.",
    "Implemented 10+ user roles and permission-based access control (RBAC) for secure multi-tenant applications.",
    "Integrated AI features and automation workflows to enhance user experience, reduce manual tasks and improve business efficiency.",
    "Deployed and maintained applications on Vercel with CI/CD pipelines, performance optimization and best security practices.",
  ];

  return (
    <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-16"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-accent-blue/80 uppercase tracking-wider">
            2023 — present
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/60 text-lg">
            Architecting scalable systems and delivering production-ready applications for modern businesses.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div variants={fadeInUp} className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/20 text-accent-blue flex items-center justify-center shrink-0 border border-accent-blue/30">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    Independent Full Stack Software Engineer
                  </h3>
                  <div className="flex items-center gap-3 text-white/60 text-sm font-medium font-mono">
                    <span>Remote / Freelance</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="text-accent-blue">2023 — Present</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="bg-background/40 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="text-accent-blue/80">{item.icon}</div>
                  <span className="text-2xl font-bold font-mono text-white tabular-nums">{item.value}</span>
                  <span className="text-[11px] text-white/50 uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Responsibilities List */}
            <ul className="space-y-4">
              {responsibilities.map((text, i) => (
                <li key={i} className="flex items-start gap-4 text-white/70 group">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue/50 shrink-0 group-hover:bg-accent-blue group-hover:scale-150 transition-all" />
                  <span className="leading-relaxed group-hover:text-white/90 transition-colors">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}