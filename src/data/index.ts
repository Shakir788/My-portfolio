import { Project, Skill, Experience } from "@/types";

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Shadcn UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Next.js API Routes", "REST APIs", "Server Actions"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma ORM", "Supabase", "Redis"],
  },
  {
    category: "AI",
    items: ["OpenAI API", "Google Gemini", "AI Agents", "RAG Systems"],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Docker", "CI/CD", "Git/GitHub"],
  },
];

export const projects: Project[] = [
  // --- TOP FEATURED PRODUCTS (Will display on Homepage) ---
  {
    id: "spe-erp",
    title: "SPE ERP",
    slug: "spe-erp",
    subtitle: "Enterprise Pharmaceutical ERP System",
    description: "A comprehensive Enterprise Resource Planning platform tailored for the pharmaceutical industry. Handles complex workflows, inventory management, finance, and live GPS tracking with a focus on compliance and scale.",
    coverImage: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind v4"],
    demoUrl: "https://spe-erp-system.vercel.app",
    githubUrl: "https://github.com/Shakir788/SPE-erp-system",
    isFeatured: true,
  },
  {
    id: "amina-academy",
    title: "Amina Academy",
    slug: "amina-academy",
    subtitle: "AI-Powered Learning Management System",
    description: "An advanced educational technology platform featuring an AI coach for interactive learning, accounting simulators, and language fluency systems. Complete with RBAC and progress tracking.",
    coverImage: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    techStack: ["React 19", "Next.js", "MongoDB", "OpenAI"],
    demoUrl: "https://amina-aacademy.vercel.app",
    githubUrl: "https://github.com/Shakir788/Amina-aacademy",
    isFeatured: true,
  },
  {
    id: "amina-clothing",
    title: "AMINA Clothing",
    slug: "amina-brand",
    subtitle: "Luxury Fashion E-Commerce",
    description: "A premium, multi-lingual (English, French, Arabic) e-commerce experience for a luxury fashion brand. Built with a high-end UI inspired by top-tier modern web aesthetics and WhatsApp order integration.",
    coverImage: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Luxury dark aesthetic fashion model
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://aminaclothing.shop",
    githubUrl: "https://github.com/Shakir788/Amina-clothing-brand",
    isFeatured: true,
  },
  {
    id: "amina-cosmetics",
    title: "Amina Cosmetics",
    slug: "amina-cosmetics",
    subtitle: "Premium Cosmetics Marketplace",
    description: "A high-conversion e-commerce platform for beauty products featuring 3D product cards, an AI-powered assistant, and an ultra-smooth luxury shopping experience.",
    coverImage: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Minimal luxury skincare bottles
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://amina-cosmatics.vercel.app",
    githubUrl: "https://github.com/Shakir788/amina_cosmatics",
    isFeatured: true,
  },
  {
    id: "hairways-salon",
    title: "The Hairways",
    slug: "hairways-salon",
    subtitle: "Luxury Salon & AI Barber Platform",
    description: "A modern booking and management platform for a premium salon. Features a luxury flipbook menu and an innovative AI Barber integration for style recommendations.",
    coverImage: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // High-end salon interior
    techStack: ["Next.js", "React", "Tailwind CSS", "AI Integration"],
    demoUrl: "https://the-hairways-salon.vercel.app",
    githubUrl: "https://github.com/Shakir788/the-hairways-salon",
    isFeatured: true,
  },
  {
    id: "rapidoz",
    title: "Rapidoz",
    slug: "rapidoz",
    subtitle: "Delivery Logistics Platform",
    description: "A high-performance logistics platform designed to streamline delivery operations, manage delivery partners, and provide real-time status updates and mapping.",
    coverImage: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Modern logistics tech map
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Lucide Icons"],
    demoUrl: "https://rapidoz.vercel.app",
    githubUrl: "https://github.com/Shakir788/Rapidoz",
    isFeatured: true,
  },

  // --- ADDITIONAL ECOSYSTEM PROJECTS ---
  {
    id: "amina-whatsapp-ai",
    title: "Amina WhatsApp AI",
    slug: "amina-whatsapp-ai",
    subtitle: "Automated AI Support Agent",
    description: "An integrated WhatsApp AI agent designed to handle customer inquiries, stabilize dashboard message systems, and automate the sales pipeline directly through chat.",
    coverImage: "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Mobile AI messaging
    techStack: ["Node.js", "WhatsApp API", "OpenAI", "Next.js"],
    demoUrl: "https://amina-whatsapp-ai.vercel.app",
    githubUrl: "https://github.com/Shakir788/Amina-whatsapp-ai",
    isFeatured: false,
  },
  {
    id: "amina-dashboard",
    title: "Amina Central Dashboard",
    slug: "amina-dashboard",
    subtitle: "Global Admin Command Center",
    description: "A secure, centralized administrative dashboard to monitor anomalies, manage users, and control the entire Amina ecosystem of applications.",
    coverImage: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Dark mode system analytics
    techStack: ["Next.js", "React", "Prisma", "Tailwind CSS"],
    demoUrl: "https://amina-dashboard.vercel.app",
    githubUrl: "https://github.com/Shakir788/amina-dashboard",
    isFeatured: false,
  },
  {
    id: "amina-ai",
    title: "Amina AI Core",
    slug: "amina-ai",
    subtitle: "Intelligent Assistant & Image Engine",
    description: "The core AI engine powering the Amina ecosystem, featuring Gemini 3 Flash tools integration and advanced autonomous image generation capabilities.",
    coverImage: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Futuristic AI neural lines
    techStack: ["Next.js", "Google Gemini", "AI", "TypeScript"],
    demoUrl: "https://amina-ai.vercel.app",
    githubUrl: "https://github.com/Shakir788/Amina-Ai",
    isFeatured: false,
  },
  {
    id: "bbg-website",
    title: "Beauty Box by Geeta",
    slug: "bbg-website",
    subtitle: "Professional Salon & AI Receptionist",
    description: "A sleek, responsive digital presence for a professional salon, featuring appointment scheduling and an integrated Lara AI virtual receptionist.",
    coverImage: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Luxury makeup brushes/salon
    techStack: ["Next.js", "React", "Tailwind CSS"],
    demoUrl: "https://beautyboxbygeeta.vercel.app",
    githubUrl: "https://github.com/Shakir788/BBG-website",
    isFeatured: false,
  },
  {
    id: "amina-systems",
    title: "Amina Systems",
    slug: "amina-systems",
    subtitle: "Advanced System Audit Platform",
    description: "An internal technical auditing platform upgraded with advanced AI capabilities for monitoring system health, telemetry, and security analytics.",
    coverImage: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Code and telemetry on screen
    techStack: ["Next.js", "TypeScript", "AI Integration"],
    demoUrl: "https://amina-systems.vercel.app",
    githubUrl: "https://github.com/Shakir788/amina-systems",
    isFeatured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Founder & Product Engineer",
    company: "Amina Tech Ecosystem",
    type: "Startup",
    startDate: "2026-01",
    endDate: "Present",
    description: [
      "Architected and developed the Amina Ecosystem, including Academy, Clothing, Cosmetics, and AI modules.",
      "Integrated Google Gemini and OpenAI to build autonomous agents for WhatsApp support and AI tutors.",
      "Managed full-stack development, database design, and cloud deployment pipelines using Vercel."
    ],
    technologies: ["Next.js 15", "AI Integration", "PostgreSQL", "Tailwind v4"]
  },
  {
    id: "exp-2",
    role: "Full Stack Software Engineer",
    company: "Independent / Freelance",
    type: "Freelance",
    startDate: "2024-01",
    endDate: "Present",
    description: [
      "Developed complex SaaS products including SPE ERP handling inventory, CRM, and live tracking.",
      "Designed and implemented 40+ optimized PostgreSQL database models using Prisma ORM.",
      "Implemented secure, multi-tenant architectures with strict Role-Based Access Control (RBAC)."
    ],
    technologies: ["React", "TypeScript", "Prisma", "PostgreSQL"]
  }
];