import type { Person } from '@/types';
import profile from '@/assets/profile.jpg';
import portrait from '@/assets/portrait.jpg';

export const person: Person = {
  name: 'Douglas Gouveia',
  firstName: 'Douglas',
  title: 'AI Product Engineer',
  subtitle: 'Production AI systems for regulated workflows, client money and audit trails',
  availability: 'Interviewing for senior AI product roles · remote',
  bio: "I ship AI systems that stay in production: regulated financial workflows, source-verified recommendation engines and multi-tenant content operations. Next.js and TypeScript over Supabase with row-level security, deployed on Cloudflare Workers, with several AI models routed through one gateway. A Master's in Engineering Management and a Senior Bubble Developer certification sit behind the work. Every build starts with the architecture, the data model and the acceptance criteria written down, so your team inherits a system it can read, not a prototype it has to rescue.",
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
