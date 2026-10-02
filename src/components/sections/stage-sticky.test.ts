import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

/**
 * A pinned act only pins while its [data-sc-stage] computes position: sticky
 * (the engine sets it through .sc-stage). Any rule on the stage's own class
 * that sets `position` wins over it, and the act scrolls away instead: dead
 * scroll under the act and scroll-driven content playing off screen.
 */
const dir = join(process.cwd(), 'src', 'components', 'sections');
const sections = readdirSync(dir).filter((file) => file.endsWith('.astro'));

function stageClasses(source: string): string[] {
  return [...source.matchAll(/<div class="([^"]+)"[^>]*\bdata-sc-stage\b/g)].flatMap((m) => m[1]!.split(/\s+/));
}

function ruleBodies(source: string, cls: string): string[] {
  const escaped = cls.replace(/[-]/g, '\\-');
  return [...source.matchAll(new RegExp(`(^|[\\s,}])\\.${escaped}\\s*\\{([^}]*)\\}`, 'gm'))].map((m) => m[2]!);
}

describe('pinned stages stay sticky', () => {
  test.each(sections)('%s sets no position on its stage class', (file) => {
    const source = readFileSync(join(dir, file), 'utf8');
    for (const cls of stageClasses(source)) {
      for (const body of ruleBodies(source, cls)) {
        expect(body, `.${cls} in ${file}`).not.toMatch(/(^|;|\s)position\s*:/);
      }
    }
  });
});
