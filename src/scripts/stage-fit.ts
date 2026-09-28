/**
 * A pinned stage is one viewport tall and clips what does not fit. When a
 * stage marked [data-stage-fit] holds more than the viewport, this measures
 * the overflow and writes it to --fit-shift; the stage's CSS slides the
 * [data-stage-fit-content] up by that distance as --sc-p runs, so every line
 * is on screen at some point of the pin instead of cut off.
 */
const GAP_PX = 24;

export interface ShiftInput {
  /** Bottom edge of the content, in px from the stage top, before any shift. */
  contentBottom: number;
  stageHeight: number;
  /** Clear space to keep under the content once it has travelled. */
  gap: number;
}

export function overflowShift({ contentBottom, stageHeight, gap }: ShiftInput): number {
  return Math.max(0, Math.ceil(contentBottom + gap - stageHeight));
}

function measure(stage: HTMLElement, content: HTMLElement): void {
  // offsetTop and offsetHeight ignore transforms, so the current shift does not skew the reading.
  const shift = overflowShift({
    contentBottom: content.offsetTop + content.offsetHeight,
    stageHeight: stage.clientHeight,
    gap: GAP_PX,
  });
  stage.style.setProperty('--fit-shift', `${shift}px`);
}

export function initStageFit(): void {
  document.querySelectorAll<HTMLElement>('[data-stage-fit]').forEach((stage) => {
    const content = stage.querySelector<HTMLElement>('[data-stage-fit-content]');
    if (!content) return;
    const observer = new ResizeObserver(() => measure(stage, content));
    observer.observe(stage);
    observer.observe(content);
  });
}
