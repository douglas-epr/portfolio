/**
 * The ten chapters, in page order. `criterion` is the acceptance criterion
 * the hero spec shows for each one; it ticks when the visitor reaches the chapter.
 */
export interface Chapter {
  id: string;
  title: string;
  criterion: string;
}

export const chapters: Chapter[] = [
  { id: 'hero', title: 'Title page', criterion: 'Title page states the role and the way of working' },
  { id: 'about', title: 'About', criterion: 'About carries the CV summary and a photograph' },
  { id: 'path', title: 'Path', criterion: 'Path shows how the no-code mindset shapes the AI-built work' },
  { id: 'resume', title: 'Career', criterion: 'Career lists every role with dates from the 2026 CV' },
  { id: 'services', title: 'Services', criterion: 'Services name six things a client can hire' },
  { id: 'skills', title: 'Stack', criterion: 'Stack shows the tools grouped by what they do' },
  { id: 'projects', title: 'Projects', criterion: 'Projects show the main products built for clients, with records' },
  { id: 'testimonials', title: 'Clients', criterion: 'Clients quote six recommendations verbatim' },
  { id: 'tutorials', title: 'Teaching', criterion: 'Teaching embeds four tutorials on request' },
  { id: 'contact', title: 'Contact', criterion: 'Contact ends on a working message composer' },
];
