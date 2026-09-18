import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';
import { build } from './build';
import { chapters } from './chapters';
import { measureJsGzipKb } from '../../scripts/measure-build.mjs';

const distDir = join(process.cwd(), 'dist', 'client', '_astro');

describe('build record', () => {
  test.skipIf(!existsSync(distDir))('the JS size in the transcript matches the built output within 0.2 KB', () => {
    const measured = measureJsGzipKb(distDir);
    expect(measured).not.toBeNull();
    expect(Math.abs((measured?.kb ?? 0) - build.jsGzipKb)).toBeLessThanOrEqual(0.2);
  });

  test('counts come from the data modules', () => {
    expect(build.products).toBe(10);
    expect(build.recommendations).toBe(6);
    expect(build.chapters).toBe(chapters.length);
    expect(chapters.length).toBe(9);
  });
});
