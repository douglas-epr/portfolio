import type { Project } from '@/types';
import bellmade from '@/assets/projects/bellmade.jpg';
import salesAbx from '@/assets/projects/sales-abx.png';
import blurStudioTool from '@/assets/projects/blur-studio-tool.png';
import elysianBlue from '@/assets/projects/elysian-blue.jpg';
import stylingPearls from '@/assets/projects/styling-pearls.png';
import bivrost from '@/assets/projects/bivrost.png';
import evencourt from '@/assets/projects/evencourt.png';
import coachfully from '@/assets/projects/coachfully.png';
import testimonyBellmade from '@/assets/projects/testimony-bellmade.png';
import testimonyEvencourt from '@/assets/projects/testimony-evencourt.png';
import testimonyCoachfully from '@/assets/projects/testimony-coachfully.png';

export const projects: Project[] = [
  {
    id: 'bellmade',
    name: 'Bellmade',
    tagline: "The Internet's Kettlebell Training Club",
    type: 'SaaS (Fitness & Wellness)',
    description:
      'Bellmade is a health and fitness application focused on kettlebell training. Members get a library of workout videos, weekly kettlebell routines, fitness tests and challenges, plus an exercise catalog.',
    keyFeatures: [
      'Curated kettlebell workout video library',
      'Exercise catalog by muscle group and equipment',
      'Weekly routines, fitness tests and challenges',
      'Membership subscription with Stripe and PayPal',
      'Progress tracking and performance metrics',
    ],
    tools: ['Bubble', 'Stripe API', 'PayPal API'],
    image: bellmade,
    websiteUrl: 'https://bellmade.app',
    youtubeUrls: ['https://youtu.be/RNxIoTORimw'],
    testimonyLink: 'https://clutch.co/profile/goodspeed#reviews',
    testimonyImage: testimonyBellmade,
    featured: true,
  },
  {
    id: 'sales-abx',
    name: 'Sales ABX',
    tagline: 'AI-Powered CRM for Modern Sales Teams',
    type: 'SaaS (CRM)',
    description:
      'Sales ABX is a SaaS CRM for sales teams with built-in AI tools that read lead data and return insight. It helps salespeople understand, prioritize and engage prospects.\n\nThe platform analyzes lead behavior, intent signals and engagement history in real time, then surfaces recommendations: who to contact, when, and how.\n\nKey components:\n- AI-based contact information\n- Contextual recommendations for engagement\n- Integration with Slack, HubSpot and Salesforce\n- Customizable pipelines and activity tracking',
    keyFeatures: [
      'AI-powered lead prioritization and scoring',
      'Real-time lead behavior and intent signal analysis',
      'Contextual recommendations for outreach timing',
      'Integration with Slack, HubSpot and Salesforce',
      'Customizable pipelines and activity tracking',
      'Contact details and employment summary enrichment',
    ],
    tools: [
      'Bubble',
      'Supabase',
      'Stripe API',
      'OpenAI API',
      'Gemini API',
      'Claude API',
      'HubSpot API',
      'Salesforce API',
      'Relevance API',
      'Apollo API',
      'BuiltWith API',
      'FullEnrich API',
      'Apify API',
      'Firecrawl API',
      'Slack API',
    ],
    image: salesAbx,
    youtubeUrls: ['https://youtu.be/PSBA-J9BK2o'],
    featured: true,
  },
  {
    id: 'blur-studio-tool',
    name: 'Blur Studio Operational System',
    tagline: 'Full Company OS and Project Management',
    type: 'Management',
    description:
      'Blur Studio Internal Tools is a custom internal platform built with Next.js and Supabase using Claude Code. It replaced the legacy Bubble.io system from the ground up.',
    keyFeatures: [
      'Projects and tasks: full project pipeline with milestone tracking, developer tasks, QA requests and client requests, with role-based access so each team member sees only what they need.',
      'Sandbox Planner (AI-powered): an 11-step idea-to-product pipeline. Drop in a raw idea and AI helps build the structure alignment, ICP refinement, product definition, competitive benchmark, strategic frameworks, PRD, database schema, visual styles, milestones and a final viability report in one flow.',
      'Playbook and SOPs: rich-text documentation with version history, inline comments and AI-assisted playbook generation from Sandbox ideas.',
      'Talent pool: the internal talent database with skill scoring, authority levels, recommender tracking and filters across tools, languages and countries.',
      'Chat and collaboration: internal messaging across project and private channels.',
      'OKRs, leads, feedback: what a growing studio needs, in one place.',
    ],
    tools: ['Claude Code', 'Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Gemini API', 'Claude API', 'TipTap', 'Tailwind CSS', 'Bubble'],
    image: blurStudioTool,
    links: [
      { label: 'View live (Bubble)', url: 'https://blurapps.com/signin', variant: 'live' },
      { label: 'View live (Claude Code)', url: 'https://blur-studio-internal-tools.vercel.app/signin', variant: 'live' },
      { label: 'Watch demo (Bubble)', url: 'https://youtu.be/7QKx8B0HLkA', variant: 'demo' },
      { label: 'Watch demo (Claude Code)', url: 'https://youtu.be/yJZnmF6gZDU', variant: 'demo' },
    ],
    featured: true,
  },
  {
    id: 'elysian-blue',
    name: 'Elysian Blue',
    tagline: 'Safe, Consent-First Connections for Support and Intimacy',
    type: 'Marketplace',
    description:
      'Elysian Blue is a secure, AI-assisted two-sided mobile marketplace. It connects intimacy service providers, support workers and therapists with clients who have disabilities, are neurodiverse, are elderly, or need additional support. The platform centers safety, consent and accessibility, with strong moderation against exploitation.',
    keyFeatures: [
      'Verified provider profiles with safety badges',
      'AI-assisted matching and moderation',
      'Consent-first onboarding flow',
      'Secure in-app messaging and booking',
      'Accessibility-first UI design',
    ],
    tools: ['Figma Make', 'Bubble', 'Stripe API', 'OpenAI API'],
    image: elysianBlue,
    websiteUrl: 'https://karate-margin-83270676.figma.site/',
    youtubeUrls: ['https://youtu.be/0ZzBTEVilqw'],
    featured: true,
  },
  {
    id: 'styling-pearls',
    name: 'Styling Pearls',
    tagline: 'On-Demand Personal Styling for Busy Professionals',
    type: 'Marketplace',
    description:
      "Styling Pearls is a mobile-first web app that connects busy families and professionals, mostly women in the Washington, D.C. metro area, with vetted personal stylists who curate and deliver outfits in person.\n\nIt removes the time and stress of shopping for formal, business and travel events by bringing styling to the client's home. Competitors ship subscription boxes; Styling Pearls is built around face-to-face service. Clients select a nearby stylist, preview and approve outfits online before delivery, and receive them in person based on their subscription tier.",
    keyFeatures: [
      'Vetted personal stylist marketplace',
      'In-person outfit curation and delivery',
      'Online outfit preview and approval flow',
      'Subscription tier system',
      'Location-based stylist matching (D.C. metro)',
    ],
    tools: ['Figma Make', 'Lovable'],
    image: stylingPearls,
    websiteUrl: 'https://styling-pearls-prototype.figma.site/',
    youtubeUrls: ['https://youtu.be/p2edHv3uyZU'],
    featured: true,
  },
  {
    id: 'bivrost',
    name: 'Bivrost',
    tagline: 'Performance-Based Stock Analysis Marketplace',
    type: 'Marketplace',
    description:
      "Bivrost is a marketplace that connects stock market analysts and research houses with investors who buy investment recommendations. Pricing is performance-based: investors pay according to the accuracy of the analyst's forecast.\n\nIf an analyst predicts a 10% rise, the stock rises 5%, and the recommendation was priced at $100, the investor pays $50. The model rewards precision and accountability.\n\nCore features:\n- Analyst profiles with performance tracking\n- Accuracy-based payment calculations\n- Marketplace for research recommendations\n- Investor tools to browse and purchase reports",
    keyFeatures: [
      'Analyst profiles with performance tracking',
      'Accuracy-based payment calculations',
      'Marketplace for research recommendations',
      'Investor tools to browse and purchase reports',
      'Pay-per-return pricing model',
    ],
    tools: ['Bubble', 'Stripe API', 'Asaas API'],
    image: bivrost,
    youtubeUrls: ['https://youtu.be/EcbRdsw718o'],
    featured: true,
  },
  {
    id: 'evencourt',
    name: 'Evencourt',
    tagline: 'Social Network for Tennis Players and Fans',
    type: 'Social Network',
    description:
      'Evencourt is a social network for tennis players and fans. Users share posts, match results and updates, and connect with the tennis community.\n\nPlayers can also schedule and pay for tennis lessons inside the app, which gives players and coaches one place to work.\n\nKey features:\n- Social feed for posts and match updates\n- Profiles for players, fans and coaches\n- Lesson booking and integrated payments\n- Messaging and scheduling tools',
    keyFeatures: [
      'Social feed for posts and match updates',
      'Profiles for players, fans and coaches',
      'Lesson booking and integrated payment system',
      'Messaging and scheduling tools',
      'Match result tracking',
    ],
    tools: ['Bubble', 'Stripe API'],
    image: evencourt,
    youtubeUrls: ['https://youtu.be/4yzifglJXHk'],
    testimonyLink: 'https://clutch.co/profile/goodspeed?page=2#reviews',
    testimonyImage: testimonyEvencourt,
    featured: true,
  },
  {
    id: 'coachfully',
    name: 'Coachfully',
    tagline: 'Marketplace Connecting Coaches with Clients',
    type: 'Marketplace',
    description:
      'Coachfully is a marketplace that connects coaches with clients across disciplines. Coaches list their services; clients schedule, pay for and run video sessions inside the interface.\n\nKey features:\n- Coach profiles and service listings\n- Session scheduling with calendar integration\n- Secure payment processing\n- Built-in video calls',
    keyFeatures: [
      'Coach profiles and service listings',
      'Session scheduling with calendar integration (Nylas)',
      'Secure payment processing with Stripe',
      'Built-in video call functionality',
      'Review and rating system',
    ],
    tools: ['Bubble', 'Stripe API', 'Nylas API'],
    image: coachfully,
    youtubeUrls: ['https://youtu.be/85aKT-LBpxM', 'https://youtu.be/yizqt5VjmgA'],
    testimonyLink: 'https://clutch.co/profile/goodspeed#reviews',
    testimonyImage: testimonyCoachfully,
    featured: true,
  },
];
