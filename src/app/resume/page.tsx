import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  Globe,
  Database,
  Users,
  Server,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, skills, experiences } from "@/data";

export const metadata: Metadata = {
  title: "Resume | Mohammad Shakir",
  description: "Professional resume of Mohammad Shakir, Full Stack Product Engineer.",
};

const achievements = [
  { icon: <Code2 size={18} />, value: "06+", label: "Products Shipped" },
  { icon: <Database size={18} />, value: "40+", label: "Database Models" },
  { icon: <Users size={18} />, value: "10+", label: "User Roles (RBAC)" },
  { icon: <Server size={18} />, value: "100%", label: "Global Ready" },
];

export default function ResumePage() {
  return (
    <div
      className="min-h-screen pt-32 pb-24 px-5 sm:px-8 md:px-10 flex flex-col items-center"
      style={{ background: "#0B0F19" }}
    >
      {/* ── Top Action Bar ── */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mr-auto font-kanit text-sm uppercase tracking-widest"
        >
          <ArrowLeft size={16} />
          back_to_portfolio
        </Link>

        <a
          href="/resume.pdf"
          download="Mohammad_Shakir_Product_Engineer.pdf"
          className="flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 font-kanit font-medium uppercase tracking-widest text-xs text-foreground hover:bg-white/5 transition-all duration-300"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* ── Resume Container ── */}
      <div className="w-full max-w-5xl border border-white/10 rounded-[40px] overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>

        {/* ── HEADER ── */}
        <div className="relative p-8 md:p-12 border-b border-white/10 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Left — name + title + bio */}
            <div>
              <span className="font-kanit text-xs text-emerald-400/80 uppercase tracking-widest flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                Status: Open to Opportunities
              </span>

              {/* Big Kanit name — Jack style */}
              <h1
                className="font-kanit font-black uppercase leading-none tracking-tight hero-heading mb-3"
                style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
              >
                Mohammad Shakir
              </h1>

              <p
                className="font-kanit font-medium uppercase tracking-widest mb-5"
                style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.2rem)", color: "#38BDF8" }}
              >
                Full Stack Product Engineer
              </p>

              <p
                className="font-kanit font-light text-foreground/60 leading-relaxed max-w-xl"
                style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)" }}
              >
                Building AI-Powered SaaS, ERP &amp; E-Commerce Platforms. Passionate about solving
                real business problems with scalable architecture, clean code, and AI-powered solutions.
              </p>
            </div>

            {/* Right — contact info */}
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:shakirsalmani.in@gmail.com"
                className="flex items-center gap-3 font-kanit text-sm text-foreground/60 hover:text-accent-blue transition-colors"
              >
                <Mail size={15} className="text-foreground/30 shrink-0" />
                shakirsalmani.in@gmail.com
              </a>
              <div className="flex items-center gap-3 font-kanit text-sm text-foreground/60">
                <Phone size={15} className="text-foreground/30 shrink-0" />
                +91 78897 09840
              </div>
              <a
                href="https://github.com/Shakir788"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-kanit text-sm text-foreground/60 hover:text-accent-blue transition-colors"
              >
                <Github size={15} className="text-foreground/30 shrink-0" />
                github.com/Shakir788
              </a>
              <div className="flex items-center gap-3 font-kanit text-sm text-foreground/60">
                <MapPin size={15} className="text-foreground/30 shrink-0" />
                Dehradun, India
              </div>
            </div>
          </div>
        </div>

        {/* ── ACHIEVEMENTS STRIP ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border-b border-white/10">
          {achievements.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-7 px-4 gap-1.5 group">
              <div className="text-accent-blue/70 mb-1">{item.icon}</div>
              <span
                className="font-kanit font-black tabular-nums hero-heading leading-none"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              >
                {item.value}
              </span>
              <span className="font-kanit text-[10px] md:text-[11px] text-foreground/35 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── BODY — two column ── */}
        <div className="flex flex-col md:flex-row">

          {/* ── LEFT SIDEBAR ── */}
          <div className="w-full md:w-1/3 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10">

            {/* Tech Stack */}
            <div className="mb-12">
              <h3
                className="font-kanit font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-2"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
              >
                <Code2 size={18} className="text-accent-blue" />
                Tech Stack
              </h3>

              <div className="space-y-6">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h4 className="font-kanit text-[10px] text-foreground/35 uppercase tracking-widest mb-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-white/10 rounded-full font-kanit text-xs text-foreground/70 hover:border-white/20 hover:text-foreground transition-colors"
                          style={{ background: "rgba(255,255,255,0.03)" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="mb-12">
              <h3
                className="font-kanit font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-2"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
              >
                <Layers size={18} className="text-accent-blue" />
                Core Strengths
              </h3>
              <ul className="space-y-3">
                {[
                  "Full Stack Product Development",
                  "Scalable SaaS Architecture",
                  "Database Design & Optimization",
                  "AI Integration in Applications",
                  "ERP & Business Logic",
                ].map((strength) => (
                  <li key={strength} className="flex items-start gap-2 font-kanit text-sm text-foreground/60">
                    <span className="text-accent-blue mt-0.5 shrink-0">▹</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="mb-10">
              <h3
                className="font-kanit font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-2"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
              >
                <GraduationCap size={18} className="text-accent-blue" />
                Education
              </h3>
              <div>
                <p className="font-kanit font-medium text-sm text-foreground mb-1">
                  Bachelor of Computer Applications
                </p>
                <p className="font-kanit text-xs text-foreground/40 uppercase tracking-wide">
                  University of Kashmir
                </p>
                <p className="font-kanit text-xs text-accent-blue/70 mt-0.5">2019 — 2022</p>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3
                className="font-kanit font-black uppercase tracking-widest text-foreground mb-5 flex items-center gap-2"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)" }}
              >
                <Globe size={18} className="text-accent-blue" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Urdu", "Kashmiri"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full border border-white/10 font-kanit text-xs text-foreground/60"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT MAIN CONTENT ── */}
          <div className="w-full md:w-2/3 p-8 md:p-10">

            {/* Experience */}
            <div className="mb-16">
              <h3
                className="font-kanit font-black uppercase tracking-widest text-foreground mb-8 pb-4 border-b border-white/10 flex items-center gap-2"
                style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
              >
                <Briefcase size={20} className="text-accent-blue" />
                Professional Experience
              </h3>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10" />

                <div className="flex flex-col gap-12">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(56,189,248,0.6)]" />

                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                        <div>
                          <h4
                            className="font-kanit font-black uppercase text-foreground leading-tight"
                            style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
                          >
                            {exp.role}
                          </h4>
                          <p className="font-kanit text-sm text-accent-blue mt-0.5">
                            {exp.company}{" "}
                            <span className="text-foreground/30">·</span>{" "}
                            <span className="text-foreground/40">{exp.type}</span>
                          </p>
                        </div>
                        <span className="font-kanit text-[10px] uppercase tracking-widest text-foreground/40 border border-white/10 px-3 py-1 rounded-full w-fit shrink-0">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>

                      <ul className="space-y-2.5 mb-4">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 font-kanit text-sm text-foreground/60 leading-relaxed">
                            <span className="text-accent-blue mt-1 shrink-0">▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-kanit text-[10px] uppercase tracking-wide text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-2.5 py-0.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Production Products */}
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3
                  className="font-kanit font-black uppercase tracking-widest text-foreground flex items-center gap-2"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
                >
                  <Code2 size={20} className="text-accent-blue" />
                  Production Products
                </h3>
                <span className="font-kanit text-[10px] uppercase tracking-widest text-foreground/30">
                  {projects.length.toString().padStart(2, "0")} total
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.demoUrl || project.githubUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group border border-white/10 hover:border-white/20 p-5 rounded-2xl transition-all duration-300 flex flex-col cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <h4
                      className="font-kanit font-black uppercase text-foreground group-hover:text-accent-blue transition-colors mb-1 leading-tight"
                      style={{ fontSize: "clamp(0.8rem, 1.4vw, 0.95rem)" }}
                    >
                      {project.title}
                    </h4>
                    <p className="font-kanit text-[11px] text-accent-blue/60 uppercase tracking-wide mb-2">
                      {project.subtitle}
                    </p>
                    <p className="font-kanit font-light text-xs text-foreground/45 leading-relaxed flex-grow mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="font-kanit text-[10px] uppercase tracking-wide text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="font-kanit text-[10px] text-foreground/30 px-1">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}