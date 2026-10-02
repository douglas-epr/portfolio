import type { Service } from '@/types';

/** The four job titles lead, in the order they match the profile; the two supporting skills follow. */
export const services: Service[] = [
  {
    id: 'ai-product-building',
    title: 'AI Product Building',
    description:
      'Secure, fast, well-designed apps built end to end with Claude Code, Lovable and Figma Make: frontend, backend, database, APIs and UI/UX as one system. Next.js and Supabase as the main stack.',
  },
  {
    id: 'ai-implementation',
    title: 'AI Implementation',
    description:
      'AI brought into how a business works: modular agent skills, structured context files, and acceptance criteria that test AI outputs for accuracy before a team relies on them.',
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    description:
      'A business process mapped end to end, the slow steps found, and AI-driven workflows designed to remove them, connected through APIs such as Stripe, OpenAI, HubSpot, Salesforce and Slack.',
  },
  {
    id: 'ai-enablement',
    title: 'AI Enablement and Operations',
    description:
      'Company OS infrastructure: SOPs, OKR frameworks, Project Playbooks and AI-driven internal tools, plus recorded tutorials that teach a team to build on its own.',
  },
  {
    id: 'app-architecture',
    title: 'App Architecture and Data Modeling',
    description:
      'The structure an app grows on: data model, user roles, workflows and integrations planned before the build. For new apps and for Bubble apps ready for their next stage.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design and Prototyping',
    description:
      'Figma Make prototyping that carries a design through to a responsive product. From clickable wireframe to finished screens.',
  },
];
