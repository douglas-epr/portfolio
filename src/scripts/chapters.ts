/**
 * One IntersectionObserver over the page's chapters, shared by the nav and the
 * hero transcript. Reports the chapter that owns the reading zone.
 */
export type ChapterCallback = (id: string, index: number, section: HTMLElement) => void;

export function observeChapters(callback: ChapterCallback): () => void {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
  if (sections.length === 0) return () => undefined;

  // Entries only arrive on threshold crossings, so a chapter that entered the
  // reading zone earlier is not in the batch that reports its neighbour leaving.
  // Keep the zone's occupants across callbacks and pick the one covering most of it.
  const inZone = new Map<HTMLElement, number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) inZone.set(el, entry.intersectionRect.height);
        else inZone.delete(el);
      }
      const [section] = [...inZone.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
      if (!section) return;
      callback(section.id, sections.indexOf(section), section);
    },
    { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
  );
  sections.forEach((section) => observer.observe(section));
  return () => observer.disconnect();
}
