#!/usr/bin/env node
/**
 * Measures the gzipped size of every JS file Astro emitted, so the figure the
 * hero transcript shows is a measurement rather than a claim.
 *
 *   node scripts/measure-build.mjs            prints { files, bytes, kb }
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';

export function measureJsGzipKb(dir = join(process.cwd(), 'dist', 'client', '_astro')) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir).filter((name) => name.endsWith('.js'));
  const bytes = files.reduce((sum, name) => sum + gzipSync(readFileSync(join(dir, name))).length, 0);
  return { files, bytes, kb: Math.round(bytes / 100) / 10 };
}

if (import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, '/')}` || process.argv[1]?.endsWith('measure-build.mjs')) {
  const result = measureJsGzipKb();
  if (!result) {
    console.error('dist/client/_astro not found. Run `npm run build` first.');
    process.exit(1);
  }
  console.log(JSON.stringify(result));
}
