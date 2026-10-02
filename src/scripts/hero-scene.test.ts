import { describe, expect, test } from 'vitest';
import { linkAlpha, nodeCount } from './hero-scene';

describe('nodeCount', () => {
  test('scales with the canvas area', () => {
    expect(nodeCount(1440, 900)).toBeGreaterThan(nodeCount(720, 900));
  });

  test('keeps a phone readable and a wide desktop affordable', () => {
    expect(nodeCount(360, 300)).toBe(24);
    expect(nodeCount(5120, 2880)).toBe(110);
  });
});

describe('linkAlpha', () => {
  test('is full at zero distance and gone at the reach', () => {
    expect(linkAlpha(0, 150)).toBe(1);
    expect(linkAlpha(150, 150)).toBe(0);
    expect(linkAlpha(200, 150)).toBe(0);
  });

  test('fades faster than linear so long links stay faint', () => {
    expect(linkAlpha(75, 150)).toBeLessThan(0.5);
    expect(linkAlpha(75, 150)).toBeGreaterThan(0);
  });
});
