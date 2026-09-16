import type { Skill } from '@/types';
import apify from '@/assets/logos/apify.svg';
import apollo from '@/assets/logos/apollo.png';
import bubble from '@/assets/logos/bubble.jpg';
import builtwith from '@/assets/logos/builtwith.png';
import claude from '@/assets/logos/claude.svg';
import figma from '@/assets/logos/figma.svg';
import fullenrich from '@/assets/logos/fullenrich.png';
import gemini from '@/assets/logos/googlegemini.svg';
import google from '@/assets/logos/google.svg';
import hubspot from '@/assets/logos/hubspot.svg';
import lovable from '@/assets/logos/lovable.png';
import microsoft from '@/assets/logos/microsoft.svg';
import nylas from '@/assets/logos/nylas.png';
import openai from '@/assets/logos/openai.svg';
import paypal from '@/assets/logos/paypal.svg';
import relevance from '@/assets/logos/relevance-ai.png';
import salesforce from '@/assets/logos/salesforce.jpg';
import slack from '@/assets/logos/slack.png';
import stripe from '@/assets/logos/stripe.svg';
import supabase from '@/assets/logos/supabase.svg';
import whatsapp from '@/assets/logos/whatsapp.svg';

export const skills: Skill[] = [
  // Stack (from the 2026 CV)
  { name: 'Next.js', category: 'Stack' },
  { name: 'TypeScript', category: 'Stack' },
  { name: 'Supabase', category: 'Stack', logo: supabase },
  { name: 'Cloudflare Workers', category: 'Stack' },
  { name: 'Bubble', category: 'Stack', logo: bubble },

  // AI tools
  { name: 'Claude Code', category: 'AI Tools', logo: claude },
  { name: 'Lovable', category: 'AI Tools', logo: lovable },
  { name: 'Figma Make', category: 'AI Tools', logo: figma },

  // Competencies (from the 2026 CV)
  { name: 'AI Product Engineering', category: 'Competencies' },
  { name: 'Product Architecture', category: 'Competencies' },
  { name: 'Spec-Driven Delivery', category: 'Competencies' },
  { name: 'Multi-Tenant SaaS', category: 'Competencies' },
  { name: 'AI & API Orchestration', category: 'Competencies' },
  { name: 'Database Architecture', category: 'Competencies' },
  { name: 'UI/UX Design', category: 'Competencies' },
  { name: 'Operations Management', category: 'Competencies' },
  { name: 'Stakeholder Alignment', category: 'Competencies' },

  // APIs integrated in shipped products
  { name: 'Stripe', category: 'APIs', logo: stripe },
  { name: 'PayPal', category: 'APIs', logo: paypal },
  { name: 'OpenAI', category: 'APIs', logo: openai },
  { name: 'Gemini', category: 'APIs', logo: gemini },
  { name: 'Claude', category: 'APIs', logo: claude },
  { name: 'HubSpot', category: 'APIs', logo: hubspot },
  { name: 'Salesforce', category: 'APIs', logo: salesforce },
  { name: 'Relevance AI', category: 'APIs', logo: relevance },
  { name: 'Apollo', category: 'APIs', logo: apollo },
  { name: 'BuiltWith', category: 'APIs', logo: builtwith },
  { name: 'FullEnrich', category: 'APIs', logo: fullenrich },
  { name: 'Apify', category: 'APIs', logo: apify },
  { name: 'Firecrawl', category: 'APIs' },
  { name: 'Slack', category: 'APIs', logo: slack },
  { name: 'WhatsApp Business', category: 'APIs', logo: whatsapp },
  { name: 'Google APIs', category: 'APIs', logo: google },
  { name: 'Microsoft APIs', category: 'APIs', logo: microsoft },
  { name: 'Nylas', category: 'APIs', logo: nylas },
];
