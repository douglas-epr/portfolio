import type { Person } from '@/types';
import profile from '@/assets/profile.jpg';
import portrait from '@/assets/portrait.jpg';

export const person: Person = {
  name: 'Douglas Gouveia',
  firstName: 'Douglas',
  title: 'Founding Engineer',
  subtitle: 'AI Product Engineer · Senior Certified Bubble Developer',
  bio: "I am the Founding Engineer at Move37, a small AI-native agency. I ship production AI systems end to end: regulated financial workflows, source-verified recommendation engines and multi-tenant content operations. I build on Next.js and TypeScript over Supabase with row-level security, deploy on Cloudflare Workers, and route several AI models through one gateway. I hold a Master's in Engineering Management and a Senior Bubble Developer certification. The architecture, the data model and the acceptance criteria get written before the first line of code.",
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
