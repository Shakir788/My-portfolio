"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { fadeInUp } from "@/components/animations";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="glass-card group relative overflow-hidden flex flex-col h-full border border-white/10 hover:border-accent-blue/30 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-display font-semibold text-white tracking-tight">{project.title}</h3>
          {project.isFeatured && (
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
          <span className="block text-white/90 font-medium mb-1">{project.subtitle}</span>
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span key={i} className="px-3 py-1 text-[11px] font-medium bg-white/5 rounded-full border border-white/10 text-white/70">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 text-[11px] font-medium bg-white/5 rounded-full border border-white/10 text-white/50">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Actions / Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
          <Link 
            href={`/projects/${project.slug}`} 
            className="text-sm font-medium text-white hover:text-accent-blue transition-colors flex items-center gap-1 mr-auto group/link"
          >
            Read Case Study 
            <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
          
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="View Source">
              <Github size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors" aria-label="Live Demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}