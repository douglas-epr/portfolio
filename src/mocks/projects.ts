import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'bellmade',
    name: 'Bellmade',
    tagline: "The Internet's Kettlebell Training Club",
    type: 'SaaS (Fitness & Wellness)',
    description:
      'Bellmade is a health and fitness application focused on kettlebell training. The app provides users with access to a variety of workout videos, including weekly kettlebell routines, fitness tests, and challenges. It also features an exercise catalog.',
    keyFeatures: [
      'Curated kettlebell workout video library',
      'Exercise catalog by muscle group & equipment',
      'Weekly routines, fitness tests & challenges',
      'Membership subscription with Stripe & PayPal',
      'Progress tracking and performance metrics',
    ],
    tools: ['Bubble', 'Stripe API', 'PayPal API'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1744812913766x373022202964268000/WhatsApp%20Image%202025-04-15%20at%2011.45.36.jpeg?_gl=1*fwxev1*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    websiteUrl: 'https://bellmade.app',
    youtubeUrls: ['https://youtu.be/RNxIoTORimw'],
    testimonyLink: 'https://clutch.co/profile/goodspeed#reviews',
    testimonyImageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1748445278520x613399151103279700/Captura%20de%20tela%202025-05-28%20120236.png?_gl=1*1atsv00*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    featured: true,
  },
  {
    id: 'sales-abx',
    name: 'Sales ABX',
    tagline: 'AI-Powered CRM for Modern Sales Teams',
    type: 'SaaS (CRM)',
    description:
      'Sales ABX is a SaaS CRM platform designed for sales teams, with built-in AI tools that provide data-driven insights about leads. It helps salespeople understand, prioritize, and engage prospects more effectively.\n\nThe platform uses real-time data to analyze lead behavior, intent signals, and engagement history. Based on this, it surfaces actionable recommendations, helping sales reps decide who to contact, when, and how—improving timing and relevance in outreach.\n\nKey components include:\n- AI-based contacts information\n- Contextual recommendations for engagement\n- Integration with Slack, HubSpot, and Salesforce\n- Customizable pipelines and activity tracking',
    keyFeatures: [
      'AI-powered lead prioritization and scoring',
      'Real-time lead behavior and intent signal analysis',
      'Contextual recommendations for outreach timing',
      'Integration with Slack, HubSpot, and Salesforce',
      'Customizable pipelines and activity tracking',
      'Contact details and employment summary enrichment',
    ],
    tools: [
      'Bubble',
      'Stripe API',
      'OpenAI API',
      'Gemini API',
      'Claude API',
      'HubSpot API',
      'Salesforce API',
      'Relevance API',
      'Apollo API',
      'Build with API',
      'Full Enrich API',
      'Apify API',
      'Firecrawl API',
      'Slack API',
    ],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1744813885380x828066367961456600/Captura%20de%20tela%202025-04-15%20114251.png?_gl=1*1yzq527*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    youtubeUrls: ['https://youtu.be/PSBA-J9BK2o'],
    featured: true,
  },
  {
    id: 'blur-studio-tool',
    name: 'Blur Studio Operational System',
    tagline: 'Full Company OS & Project Management',
    type: 'Management',
    description:
      'Blur Studio Internal Tools is a fully custom internal platform built with Next.js + Supabase by using Claude Code — designed from the ground up to replace the legacy Bubble.io system.',
    keyFeatures: [
      'Projects & Tasks — Full project pipeline with milestone tracking, developer tasks, QA requests, and client request management — with role-based access so every team member only sees what they need.',
      'Sandbox Planner (AI-Powered) — Our 11-step idea-to-product pipeline. Drop in a raw idea and let AI help you build a structure alignment, ICP refinement, product definition, competitive benchmarking, strategic frameworks, PRD, database schema, visual styles, milestones, and a final viability report — all in one flow.',
      'Playbook & SOPs — Rich-text documentation with version history, inline comments, and AI-assisted playbook generation directly from Sandbox ideas.',
      'Talent Pool — Our internal talent database with skill scoring, authority levels, recommender tracking, and filters across tools, languages, and countries.',
      'Chat & Collaboration — Internal messaging across project and private channels.',
      'OKRs, Leads, Feedback — Everything a growing studio needs in one place.',
    ],
    tools: ['Bubble', 'Claude Code', 'Supabase', 'OpenAI API', 'Gemini API', 'Claude API', 'Next.js', 'TypeScript', 'TipTap', 'Tailwind CSS'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1775499980138x618966962464180500/Captura%20de%20tela%202026-04-06%20152609.png?_gl=1*16i3gcx*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2REE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    links: [
      { label: 'View Live (Bubble)', url: 'https://blurapps.com/signin', variant: 'live' },
      { label: 'View Live (Claude Code)', url: 'https://blur-studio-internal-tools.vercel.app/signin', variant: 'live' },
      { label: 'Watch Demo (Bubble)', url: 'https://youtu.be/7QKx8B0HLkA', variant: 'demo' },
      { label: 'Watch Demo (Claude Code)', url: 'https://youtu.be/yJZnmF6gZDU', variant: 'demo' },
    ],
    featured: true,
  },
  {
    id: 'elysian-blue',
    name: 'Elysian Blue',
    tagline: 'Safe, Consent-First Connections for Support & Intimacy',
    type: 'Marketplace',
    description:
      'Elysian Blue is a secure, AI‑assisted two‑sided mobile marketplace that discreetly connects intimacy service providers, support workers, and therapists with clients who have disabilities, are neurodiverse, elderly, or need additional support. The platform centers safety, consent, and accessibility, with strong moderation to prevent exploitation.',
    keyFeatures: [
      'Verified provider profiles with safety badges',
      'AI-assisted matching and moderation',
      'Consent-first onboarding flow',
      'Secure in-app messaging and booking',
      'Accessibility-first UI design',
    ],
    tools: ['Figma Make', 'Bubble', 'Stripe API', 'OpenAI API'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1763487219305x839665338173578600/WhatsApp%20Image%202025-11-18%20at%2014.27.45.jpeg?_gl=1*r0qgne*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
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
      'Styling Pearls is a mobile-first web app that connects busy families and professionals—primarily women in the Washington, D.C. metro area—with vetted personal stylists who provide in-person outfit curation and delivery.\n\nThe app removes the time and stress of shopping for formal, business, and travel-related events by bringing styling directly to the client\'s home. Unlike competitors that rely on shipped subscription boxes, Styling Pearls is built around face-to-face service. Clients select a nearby stylist, preview and approve outfits online before delivery, and receive curated outfits in person based on their subscription tier.',
    keyFeatures: [
      'Vetted personal stylist marketplace',
      'In-person outfit curation and delivery',
      'Online outfit preview and approval flow',
      'Subscription tier system',
      'Location-based stylist matching (D.C. metro)',
    ],
    tools: ['Figma Make', 'Lovable'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1775490260755x608672397493772200/Captura%20de%20tela%202026-04-06%20124314.png?_gl=1*17uq6fc*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
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
      'Bivrost is a marketplace platform that connects stock market analysts and research houses with investors interested in purchasing investment recommendations. The platform introduces a performance-based pricing model: investors pay according to the accuracy of the analyst\'s forecast.\n\nFor example, if an analyst predicts a stock will increase by 10%, but it only increases by 5%, and the recommendation was priced at $100, the investor pays $50—proportional to the result. This model incentivizes precision and accountability in financial analysis.\n\nCore features include:\n- Analyst profiles with performance tracking\n- Accuracy-based payment calculations\n- Marketplace for research recommendations\n- Investor tools to browse and purchase reports\n\nThe platform focuses on transparency, performance alignment, and creating a fair value exchange between analysts and investors.',
    keyFeatures: [
      'Analyst profiles with performance tracking',
      'Accuracy-based payment calculations',
      'Marketplace for research recommendations',
      'Investor tools to browse and purchase reports',
      'Pay-per-return pricing model',
    ],
    tools: ['Bubble', 'Stripe API', 'Asaas API'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1744814572478x784456630870354700/Captura%20de%20tela%202025-04-15%20120050.png?_gl=1*105fwx9*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    youtubeUrls: ['https://youtu.be/EcbRdsw718o'],
    featured: true,
  },
  {
    id: 'evencourt',
    name: 'Evencourt',
    tagline: 'Social Network for Tennis Players & Fans',
    type: 'Social Network',
    description:
      'Evencourt is a social networking platform for tennis players and fans. Users can share posts, match results, and updates, as well as connect with others in the tennis community.\n\nThe platform also includes tools to schedule and pay for tennis lessons directly, creating a streamlined experience for both players and coaches.\n\nKey features:\n- Social feed for posts and match updates\n- Profiles for players, fans, and coaches\n- Lesson booking and integrated payment system\n- Messaging and scheduling tools',
    keyFeatures: [
      'Social feed for posts and match updates',
      'Profiles for players, fans, and coaches',
      'Lesson booking and integrated payment system',
      'Messaging and scheduling tools',
      'Match result tracking',
    ],
    tools: ['Bubble', 'Stripe API'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1744814843196x621178775339917600/Captura%20de%20tela%202025-04-15%20120448.png?_gl=1*1al306g*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    youtubeUrls: ['https://youtu.be/4yzifglJXHk'],
    testimonyLink: 'https://clutch.co/profile/goodspeed?page=2#reviews',
    testimonyImageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1748445251809x185504589014558140/Captura%20de%20tela%202025-05-28%20120339.png?_gl=1*1al306g*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    featured: true,
  },
  {
    id: 'coachfully',
    name: 'Coachfully',
    tagline: 'Marketplace Connecting Coaches with Clients',
    type: 'Marketplace',
    description:
      'Coachfully is a marketplace platform that connects coaches with clients across various disciplines. The platform enables coaches to offer their services, and allows clients to schedule, pay for, and conduct video sessions directly through the interface.\n\nKey features:\n- Coach profiles and service listings\n- Session scheduling with calendar integration\n- Secure payment processing\n- Built-in video call functionality',
    keyFeatures: [
      'Coach profiles and service listings',
      'Session scheduling with calendar integration (Nylas)',
      'Secure payment processing with Stripe',
      'Built-in video call functionality',
      'Review and rating system',
    ],
    tools: ['Bubble', 'Stripe API', 'Nylas API'],
    imageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1744815887913x236646414439416030/Captura%20de%20tela%202024-08-20%20012845.png?_gl=1*1jsisx3*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    youtubeUrls: ['https://youtu.be/85aKT-LBpxM', 'https://youtu.be/yizqt5VjmgA'],
    testimonyLink: 'https://clutch.co/profile/goodspeed#reviews',
    testimonyImageUrl:
      'https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io/f1748445340354x978447051238716000/Captura%20de%20tela%202025-05-28%20120201.png?_gl=1*1jsisx3*_gcl_aw*R0NMLjE3Njk0NTA0MTMuQ2owS0NRaUF2dHpMQmhDUEFSSXNBTHdoeGRxRThTYUJVN2x2eVczMmZsekRYdTZOZzEwZVRkdU5Hd0JSUll6MURnbzRKTEJkUHBQWkplNGFBbFRCRUFMd193Y0I.*_gcl_au*MTUxODI2NjY2MS4xNzc0MDI2OTk1*_ga*MTkxNjQzNDg2Mi4xNzI0MTI1OTM0*_ga_BFPVR2DEE2*czE3NzU0ODQ0ODAkbzEyNyRnMSR0MTc3NTQ4NTcyOCRqMzEkbDAkaDA.',
    featured: true,
  },
];
