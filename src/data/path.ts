/**
 * The Path chapter: the way of thinking four years of Bubble client work
 * built, and how it shapes every AI build today. Edited to the stop-slop rules.
 */
export const path = {
  heading: 'The no-code mindset made me a better full-stack developer with AI.',
  lead:
    'Today I build every app with AI, full stack, with Claude Code and a main stack of Next.js, TypeScript and Supabase. What makes the difference is the way of thinking I built over more than four years of Bubble projects for clients around the world.',
  story: [
    'Serious client projects taught me that an app is more than screens and buttons. I think about the data structure, states, performance, reusable components, UX, security, integrations, and the small decisions that turn into problems later. I plan those before the build starts, and AI builds on that plan.',
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
    'I bring that habit to every AI build. For you, it means an app planned around your data and your users, tested the way your customers will use it, and a builder who keeps looking for the right fix when something does not work.',
  ],
} as const;
