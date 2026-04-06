export type ProjectType =
  | 'SaaS'
  | 'SaaS (CRM)'
  | 'SaaS (Fitness & Wellness)'
  | 'Marketplace'
  | 'Social Network'
  | 'Management'
  | 'Other';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: ProjectType;
  description: string;
  keyFeatures: string[];
  tools: string[];
  imageUrl: string;
  websiteUrl?: string;
  youtubeUrls?: string[];
  testimonyLink?: string;
  testimonyImageUrl?: string;
  featured: boolean;
}

export type SkillCategory =
  | 'AI Tools'
  | 'NoCode'
  | 'Product'
  | 'Engineering'
  | 'Management'
  | 'APIs';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  type: 'remote' | 'on-site' | 'hybrid';
  highlights: string[];
  stack?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  subtitle?: string;
  location: string;
  startYear: number;
  endYear: number;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  company?: string;
  photo?: string;
  rating: number;
  text: string;
  date?: string;
  project?: string;
}

export interface Tutorial {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  embedUrl: string;
}

export interface Person {
  name: string;
  firstName: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  youtubeUrl: string;
  portfolioUrl: string;
  profilePhoto: string;
  heroPhoto: string;
}
