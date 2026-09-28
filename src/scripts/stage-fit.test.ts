import { describe, expect, test } from 'vitest';
import { overflowShift } from './stage-fit';

describe('overflowShift', () => {
  test('returns 0 when the content fits the stage', () => {
    expect(overflowShift({ contentBottom: 700, stageHeight: 800, gap: 24 })).toBe(0);
  });

  test('returns the distance the content must travel to end one gap above the stage bottom', () => {
    expect(overflowShift({ contentBottom: 900, stageHeight: 800, gap: 24 })).toBe(124);
  });

  test('rounds up to whole pixels so the last line never sits under the edge', () => {
    expect(overflowShift({ contentBottom: 800.4, stageHeight: 800, gap: 0 })).toBe(1);
  });
});
