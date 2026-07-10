"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, FileText } from "lucide-react"; // FileText icon import kiya

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center"
    >
      <nav className="glass-card w-full max-w-5xl px-6 py-3 flex items-center justify-between rounded-full border border-white/10 bg-background/40 backdrop-blur-md">
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal size={20} className="text-accent-blue group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display font-bold text-white tracking-wide text-lg">
            Shakir<span className="text-white/50">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <li>
            <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="/#experience" className="hover:text-white transition-colors">Experience</Link>
          </li>
          <li>
            <Link href="/#skills" className="hover:text-white transition-colors">Skills</Link>
          </li>
        </ul>

        {/* Updated Call to Action -> Now goes to /resume page */}
        <Link 
          href="/resume" 
          className="flex items-center gap-2 px-4 py-2 bg-white text-background rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
        >
          <FileText size={16} />
          Resume
        </Link>
      </nav>
    </motion.header>
  );
}