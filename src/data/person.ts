import type { Person } from '@/types';
import profile from '@/assets/profile.jpg';
import portrait from '@/assets/portrait.jpg';

export const person: Person = {
  name: 'Douglas Gouveia',
  firstName: 'Douglas',
  title: 'AI Product Engineer · Founding Engineer',
  subtitle: 'Apps built with AI, from first idea to launch',
  availability: 'Open to new roles · remote',
  bio: "I am an AI Product Engineer and Founding Engineer. I build apps with AI, from the first idea to launch. For more than four years I have designed and built apps for founders and companies in Brazil, Finland, the United Kingdom and the United States: marketplaces, CRMs, subscription platforms, accounting tools and content platforms. Today I build every app full stack with Claude Code, with Next.js, TypeScript and Supabase as my main stack. Each project starts with the plan written down: the architecture, the data model and what done looks like. You know what you are getting before the build starts, and you see it take shape as it grows. A Master's in Engineering Management and a Senior Bubble Developer certification sit behind the work.",
  location: 'Ervália, MG, Brazil',
  email: 'douglas.epr@hotmail.com',
  phone: '+55 (32) 98511-3997',
  linkedinUrl: 'https://www.linkedin.com/in/douglas-gouveia-6ab87828',
  youtubeUrl: 'https://www.youtube.com/@dgnocode',
  portfolioUrl: 'https://douglasgouveia.dev',
  cvUrl: '/Douglas-Gouveia-CV.pdf',
  profilePhoto: profile,
  heroPhoto: portrait,
};
