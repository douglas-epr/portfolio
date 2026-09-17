/**
 * One IntersectionObserver over the page's chapters, shared by the nav and the
 * hero transcript. Reports the chapter that owns the reading zone.
 */
export type ChapterCallback = (id: string, index: number, section: HTMLElement) => void;

export function observeChapters(callback: ChapterCallback): () => void {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
  if (sections.length === 0) return () => undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length === 0) return;
      const top = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const section = top?.target as HTMLElement | undefined;
      if (!section) return;
      callback(section.id, sections.indexOf(section), section);
    },
    { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
  );
  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}
