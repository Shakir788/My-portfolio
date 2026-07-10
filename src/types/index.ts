// src/types/index.ts

export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'AI' | 'Deployment' | 'Cloud';

export interface Skill {
  category: SkillCategory;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  coverImage: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export interface CaseStudy extends Project {
  problemStatement: string;
  businessRequirements: string[];
  architectureOverview: string;
  databaseDesign: string; // Could be a description or image path
  keyFeatures: string[];
  challenges: string[];
  solutions: string[];
  screenshots: string[];
  futureImprovements: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: 'Full-time' | 'Contract' | 'Startup' | 'Freelance';
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}