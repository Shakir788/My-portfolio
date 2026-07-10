"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data";

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;
const CARD_BG = "#0B0F19";

const FEATURED = projects.filter((p) => p.isFeatured).slice(0, 3);
const TOTAL = FEATURED.length;

function ProjectCard({ project, index }: { project: (typeof FEATURED)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (TOTAL - 1 - index) * 0.03]
  );

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      {/* FIX: css prop removed — use style instead */}
      <motion.div
        style={{ scale, background: CARD_BG }}
        className="h-full w-full rounded-[40px] sm:rounded-[50px] border-2 border-white/20 overflow-hidden"
      >
        <div
          className="h-full flex flex-col p-4 sm:p-6 md:p-8 gap-4 sm:gap-6"
          style={{ background: CARD_BG }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-baseline gap-4">
              <span
                className="font-kanit font-black leading-none hero-heading"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col">
                <span className="font-kanit text-xs uppercase tracking-widest text-foreground/50">
                  {project.subtitle}
                </span>
                <h3
                  className="font-kanit font-black uppercase tracking-tight text-foreground leading-tight"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border-2 border-foreground/40 font-kanit font-medium uppercase tracking-widest text-foreground text-xs sm:text-sm hover:bg-foreground/10 transition-all duration-200"
                >
                  <ExternalLink size={14} />
                  Live Project
                </a>
              )}
            </div>
          </div>

          {/* Image grid */}
          <div className="flex-1 grid grid-cols-[40%_60%] gap-3 min-h-0">
            {/* Left col — 2 stacked */}
            <div className="flex flex-col gap-3">
              <div
                className="relative overflow-hidden rounded-[30px] sm:rounded-[40px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="30vw"
                />
              </div>
              <div
                className="relative flex-1 overflow-hidden rounded-[30px] sm:rounded-[40px]"
                style={{ minHeight: "clamp(160px, 22vw, 340px)" }}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-bottom"
                  sizes="30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Right col — tall */}
            <div className="relative overflow-hidden rounded-[30px] sm:rounded-[40px]">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 font-kanit text-[10px] sm:text-xs text-white uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            className="font-kanit font-light text-foreground/60 leading-relaxed max-w-2xl"
            style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)" }}
          >
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 sm:-mt-12 md:-mt-14 z-10"
      style={{
        background: CARD_BG,
        borderRadius: "40px 40px 0 0",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "50px" }}
        transition={{ duration: 0.9, ease: cinematicEase }}
        className="font-kanit font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24 hero-heading"
        style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {FEATURED.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3, ease: cinematicEase }}
        className="text-center mt-20"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 rounded-full border-2 border-foreground/40 font-kanit font-medium uppercase tracking-widest text-foreground text-xs sm:text-sm hover:bg-foreground/10 transition-all duration-300"
        >
          View All {projects.length} Projects
        </Link>
      </motion.div>
    </section>
  );
}