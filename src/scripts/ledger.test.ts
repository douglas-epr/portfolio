import { describe, expect, test } from 'vitest';
import { chapterLabel, formatEntry, formatIndex, summarize } from './ledger';

describe('ledger formatting', () => {
  test('pads the index to two digits', () => {
    expect(formatIndex(1)).toBe('01');
    expect(formatIndex(12)).toBe('12');
  });

  test('formats an entry as index, separator, label', () => {
    expect(formatEntry({ index: 3, label: 'Founding Engineer · Move37 · 2026', href: '#resume' })).toBe(
      '03 · Founding Engineer · Move37 · 2026',
    );
  });

  test('summarizes with singular and plural entries', () => {
    expect(summarize(1, 9)).toBe('Record complete · 1 entry · 9 chapters');
    expect(summarize(14, 9)).toBe('Record complete · 14 entries · 9 chapters');
  });

  test('labels a chapter with a section sign', () => {
    expect(chapterLabel(0, 'Title page')).toBe('§00 · Title page');
  });
});
