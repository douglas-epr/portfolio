import type { ImageMetadata } from 'astro';

export type ProjectType =
  | 'SaaS'
  | 'SaaS (CRM)'
  | 'SaaS (Fitness & Wellness)'
  | 'Marketplace'
  | 'Social Network'
  | 'Management'
  | 'Other';

export interface ProjectLink {
  label: string;
  url: string;
  variant: 'live' | 'demo';
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: ProjectType;
  description: string;
  keyFeatures: string[];
  tools: string[];
  image: ImageMetadata;
  websiteUrl?: string;
  youtubeUrls?: string[];
  links?: ProjectLink[];
  testimonyLink?: string;
  testimonyImage?: ImageMetadata;
  featured: boolean;
}

export type SkillCategory = 'Stack' | 'AI Tools' | 'Competencies' | 'APIs';

export interface Skill {
  name: string;
  category: SkillCategory;
  /** Local logo asset, when the tool has one. */
  logo?: ImageMetadata;
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
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  company?: string;
  photo: ImageMetadata;
  linkedinUrl?: string;
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
  /** Start offset in seconds, when the embed should not begin at 0. */
  start?: number;
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
  cvUrl: string;
  profilePhoto: ImageMetadata;
  heroPhoto: ImageMetadata;
}
