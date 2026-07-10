import { Github, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-white text-xl">
              Shakir<span className="text-white/50">.dev</span>
            </span>
            <p className="text-white/50 text-sm">
              Product Engineer building modern web businesses.
            </p>
          </div>

          <div className="flex items-center gap-6 text-white/60">
            <a
              href="mailto:shakirsalmani.in@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <Mail size={16} /> <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://github.com/Shakir788"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <Github size={16} /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> <span className="hidden sm:inline">Dehradun, India</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 text-center text-white/40 text-xs font-mono flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Mohammad Shakir Salmani. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            status: available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}