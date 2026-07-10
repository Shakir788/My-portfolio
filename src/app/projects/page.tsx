import { projects } from "@/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mohammad Shakir",
  description: "All production products built by Mohammad Shakir — SaaS, ERP, AI, and E-Commerce platforms.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.isFeatured);
  const others = projects.filter((p) => !p.isFeatured);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-6xl mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 font-mono text-sm w-fit group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        back_to_portfolio
      </Link>

      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs text-accent-blue/80 uppercase tracking-wider">
          {projects.length.toString().padStart(2, "0")} products shipped
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white mt-3 mb-4 tracking-tight">
          All{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Products
          </span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl">
          Real-world applications built for scale — from enterprise ERP systems to AI-powered platforms.
        </p>
      </div>

      {/* Featured */}
      <div className="mb-20">
        <h2 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
          Featured Products — {featured.length.toString().padStart(2, "0")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group glass-card border border-white/10 hover:border-accent-blue/30 transition-all duration-300 overflow-hidden rounded-3xl flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-52 w-full overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-accent-blue transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20 shrink-0 ml-3">
                    Featured
                  </span>
                </div>

                <p className="text-accent-blue/80 text-sm font-medium mb-2">{project.subtitle}</p>
                <p className="text-white/50 text-sm leading-relaxed flex-grow mb-5">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-medium bg-white/5 rounded-full border border-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2.5 py-0.5 text-[11px] text-white/30 border border-white/10 rounded-full">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-20">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors"
                    >
                      <Github size={14} /> Source
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other projects */}
      <div>
        <h2 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
          More Projects — {others.length.toString().padStart(2, "0")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl || project.githubUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="group glass-card border border-white/10 hover:border-white/20 transition-all duration-300 p-5 rounded-2xl flex flex-col"
            >
              <h3 className="text-white font-bold mb-1 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-accent-blue/70 text-xs font-medium mb-2">{project.subtitle}</p>
              <p className="text-white/50 text-xs leading-relaxed flex-grow mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-accent-blue text-[10px] font-mono font-medium bg-accent-blue/10 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-white/30 text-[10px] px-1">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
                {project.demoUrl && (
                  <span className="flex items-center gap-1 text-[11px] text-white/40 group-hover:text-white/60 transition-colors">
                    <ExternalLink size={12} /> Demo
                  </span>
                )}
                {project.githubUrl && (
                  <span className="flex items-center gap-1 text-[11px] text-white/40 group-hover:text-white/60 transition-colors">
                    <Github size={12} /> Source
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}