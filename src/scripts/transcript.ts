import { observeChapters } from './chapters';

/**
 * The hero transcript is painted by CSS from the act's `--sc-p`. This script
 * only publishes state for the verification harness and ticks the spec's
 * acceptance criteria as the visitor reaches each chapter.
 */

export interface LineWindow {
  t0: number;
  dt: number;
  len: number;
}

export type Phase = 'ready' | 'typing' | 'complete' | 'hold';

export function typedChars(progress: number, line: LineWindow): number {
  if (line.dt <= 0) return line.len;
  const x = Math.min(1, Math.max(0, (progress - line.t0) / line.dt));
  return Math.round(x * line.len);
}

export function currentLine(progress: number, lines: LineWindow[]): number {
  let index = -1;
  lines.forEach((line, i) => {
    if (progress >= line.t0) index = i;
  });
  return index;
}

export function phaseFor(progress: number, lines: LineWindow[]): Phase {
  const first = lines[0];
  const last = lines[lines.length - 1];
  if (!first || !last) return 'ready';
  if (progress < first.t0) return 'ready';
  if (progress >= last.t0 + last.dt) return 'complete';
  return 'typing';
}

export function stateString(phase: Phase, line: number, chars: number, done: number): string {
  return `${phase}|${line}|${chars}|${done}`;
}

function readLines(root: HTMLElement): LineWindow[] {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-t0]')).map((el) => ({
    t0: Number(el.dataset.t0),
    dt: Number(el.dataset.dt),
    len: Number(el.dataset.len),
  }));
}

export function initTranscript(): void {
  const log = document.querySelector<HTMLElement>('[data-transcript]');
  const act = log?.closest<HTMLElement>('[data-sc-act]');
  if (!log || !act) return;

  const lines = readLines(log);
  const criteria = Array.from(document.querySelectorAll<HTMLElement>('[data-spec-criteria] [data-for]'));
  const tabs = Array.from(document.querySelectorAll<HTMLElement>('[data-nav] a[data-tab]'));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let done = 0;

  const publish = (): void => {
    const progress = parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0;
    const line = currentLine(progress, lines);
    const chars = lines.reduce((sum, item) => sum + typedChars(progress, item), 0);
    const phase: Phase = reduceMotion ? 'hold' : phaseFor(progress, lines);
    log.dataset.scVerifyState = stateString(phase, line, chars, done);
    if (reduceMotion) log.dataset.scVerifyHold = 'true';
  };

  let scheduled = false;
  window.addEventListener(
    'scroll',
    () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        publish();
      });
    },
    { passive: true },
  );

  observeChapters((id) => {
    const criterion = criteria.find((el) => el.dataset.for === id);
    if (criterion && criterion.dataset.done !== 'true') {
      criterion.dataset.done = 'true';
      done += 1;
    }
    tabs.find((tab) => tab.dataset.tab === id)?.setAttribute('data-done', 'true');
    publish();
  });

  publish();
}
