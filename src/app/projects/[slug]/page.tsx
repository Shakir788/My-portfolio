import { notFound } from "next/navigation";
import { projects } from "@/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <Link href="/#projects" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
        <ArrowLeft size={20} /> Back to Products
      </Link>

      <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">{project.title}</h1>
        <p className="text-xl text-accent-blue mb-8">{project.subtitle}</p>

        <div className="flex gap-4 mb-12">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-background rounded-full font-medium">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 glass-card rounded-full font-medium text-white">
              <Github size={18} /> Source Code
            </a>
          )}
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-white/70 leading-relaxed mb-8">{project.description}</p>
          
          <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-accent-blue font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}