/**
 * The Path chapter: the way of thinking four years of Bubble client work
 * built, and how it shapes every AI build today. Edited to the stop-slop rules.
 */
export const path = {
  heading: 'No-code taught me to see the whole system at once.',
  lead:
    'Today I build every app with AI, full stack, with Claude Code and a main stack of Next.js, TypeScript and Supabase. What makes the difference is the way of thinking I built over more than four years of Bubble projects for clients around the world.',
  story: [
    'I started my career as a full-stack no-code developer on Bubble. Building whole apps alone gave me a wide view of software architecture: frontend, backend, UI/UX, database structure, APIs, reusable elements, security and performance, all designed together at the same time. I plan those before the build starts, and AI builds on that plan.',
    'They also taught me to look at a problem from another angle when the first approach does not work. A component does not do what the client needs, a workflow grows too complex, or a feature built months ago gets hard to maintain. The answer is to understand the problem better, not to force the first idea.',
  ],
  fixesLabel: 'when the first approach fails',
  fixes: [
    'Improve the workflow.',
    'Wrap the logic in a reusable component.',
    'Change the data structure.',
    'Add custom logic.',
    'Move the process to its own service.',
  ],
  closing: [
    'I bring that habit to every AI build. For you, it means an app planned around your data and your users, tested the way your customers will use it, and a developer who keeps looking for the right fix when something does not work.',
  ],
} as const;
