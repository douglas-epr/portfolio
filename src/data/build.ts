/**
 * The build record shown in the hero transcript. Every figure here is a fact
 * about this site: counts come from the data modules, the JS size is measured
 * from dist by scripts/measure-build.mjs and checked by build.test.ts.
 */
import { projects } from './projects';
import { testimonials } from './testimonials';
import { chapters } from './chapters';

export interface TranscriptLine {
  text: string;
  /** Act progress (0..1) at which this line starts typing. */
  t0: number;
  /** Progress span the line takes to type out. */
  dt: number;
}

export const build = {
  measuredAt: '2026-09-17',
  /** Gzipped size of every JS file in dist/client/_astro, in KB. Update with scripts/measure-build.mjs. */
  jsGzipKb: 8.7,
  chapters: chapters.length,
  products: projects.length,
  recommendations: testimonials.length,
  viewportsVerified: 3,
} as const;

export const TRANSCRIPT_FROM = 0.04;
export const TRANSCRIPT_TO = 0.92;

const texts = [
  'read Douglas-Gouveia-CV-2026.pdf · 1 page',
  `write SITE.md · ${build.chapters} acceptance criteria`,
  'scaffold astro@7 + @astrojs/vercel · 0 client frameworks',
  `build ${build.chapters} chapters · ${build.products} products · ${build.recommendations} recommendations`,
  `verify · 0 dead scroll · contrast clean · ${build.viewportsVerified} viewports`,
  `deploy douglasgouveia.dev · ${build.jsGzipKb} KB js gz`,
];

export function lineWindows(count: number, from = TRANSCRIPT_FROM, to = TRANSCRIPT_TO): Array<{ t0: number; dt: number }> {
  const dt = (to - from) / count;
  return Array.from({ length: count }, (_, i) => ({ t0: from + i * dt, dt }));
}

export const transcript: TranscriptLine[] = texts.map((text, i) => ({ text, ...lineWindows(texts.length)[i]! }));
