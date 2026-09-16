/**
 * The audit-trail ledger: the page's signature move.
 *
 * Every real fact on the page carries `data-ledger="<label>"`. When a fact
 * scrolls into the reading zone the ledger stamps one line for it, once, and
 * the line stays for the rest of the visit. The panel also reads the current
 * chapter and publishes a compact state string for the verification harness.
 */

export const CHAPTER_COUNT = 9;

export interface LedgerEntry {
  index: number;
  label: string;
  href: string;
}

export function formatIndex(index: number): string {
  return String(index).padStart(2, '0');
}

export function formatEntry(entry: LedgerEntry): string {
  return `${formatIndex(entry.index)} · ${entry.label}`;
}

export function summarize(entryCount: number, chapterCount: number = CHAPTER_COUNT): string {
  const entries = entryCount === 1 ? 'entry' : 'entries';
  return `Record complete · ${entryCount} ${entries} · ${chapterCount} chapters`;
}

export function chapterLabel(index: number, title: string): string {
  return `§${formatIndex(index)} · ${title}`;
}

function closestSectionId(element: Element): string {
  const section = element.closest('main > section[id]');
  return section?.id ?? '';
}

function renderEntry(list: HTMLElement, entry: LedgerEntry, reduceMotion: boolean): void {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.href = entry.href;
  link.textContent = formatEntry(entry);
  item.append(link);
  if (!reduceMotion) item.classList.add('ledger__item--stamp');
  list.append(item);
}

export function initLedger(): void {
  const panel = document.querySelector<HTMLElement>('[data-ledger-panel]');
  const list = panel?.querySelector<HTMLElement>('[data-ledger-list]');
  if (!panel || !list) return;

  const counter = panel.querySelector<HTMLElement>('[data-ledger-count]');
  const chapterOut = panel.querySelector<HTMLElement>('[data-ledger-chapter]');
  const summary = document.querySelector<HTMLElement>('[data-ledger-summary]');
  const facts = Array.from(document.querySelectorAll<HTMLElement>('[data-ledger]'));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  let stamped = 0;
  let chapter = 0;

  const publishState = (): void => {
    panel.dataset.scVerifyState = `${chapter}|${stamped}`;
    if (counter) counter.textContent = `${stamped} of ${facts.length}`;
    if (summary) summary.textContent = summarize(stamped);
    panel.classList.toggle('ledger--active', stamped > 0);
  };

  const stamp = (element: HTMLElement): void => {
    if (element.dataset.ledgerStamped === 'true') return;
    element.dataset.ledgerStamped = 'true';
    stamped += 1;
    renderEntry(list, { index: stamped, label: element.dataset.ledger ?? '', href: `#${closestSectionId(element)}` }, reduceMotion);
    publishState();
  };

  // Facts inside a pinned act are on screen the whole time the stage is
  // pinned, so an intersection check would stamp them on load. Those carry
  // `data-ledger-at` and stamp when the act's progress passes the threshold.
  const pinnedFacts = facts.filter((fact) => fact.dataset.ledgerAt !== undefined);
  const flowFacts = facts.filter((fact) => fact.dataset.ledgerAt === undefined);

  const factObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) stamp(entry.target as HTMLElement);
      }
    },
    // Tall lists never reach a high ratio inside the reading zone, so the bar
    // is a third of the element, with the bottom fifth of the viewport excluded.
    { rootMargin: '0px 0px -20% 0px', threshold: 0.3 },
  );
  flowFacts.forEach((fact) => factObserver.observe(fact));

  const checkPinned = (): void => {
    for (const fact of pinnedFacts) {
      if (fact.dataset.ledgerStamped === 'true') continue;
      const act = fact.closest<HTMLElement>('[data-sc-act]');
      if (!act) continue;
      const progress = parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0;
      if (progress >= Number(fact.dataset.ledgerAt)) stamp(fact);
    }
  };
  if (pinnedFacts.length > 0) {
    let scheduled = false;
    window.addEventListener(
      'scroll',
      () => {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(() => {
          scheduled = false;
          checkPinned();
        });
      },
      { passive: true },
    );
    requestAnimationFrame(checkPinned);
  }

  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));
  const chapterObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length === 0) return;
      const top = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      const section = top?.target as HTMLElement | undefined;
      if (!section) return;
      chapter = sections.indexOf(section);
      if (chapterOut) chapterOut.textContent = chapterLabel(chapter, section.dataset.chapterTitle ?? section.id);
      panel.querySelectorAll<HTMLAnchorElement>('[data-ledger-nav] a').forEach((link) => {
        const isCurrent = link.hash === `#${section.id}`;
        if (isCurrent) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
      publishState();
    },
    { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
  );
  sections.forEach((section) => chapterObserver.observe(section));

  const toggle = panel.querySelector<HTMLButtonElement>('[data-ledger-toggle]');
  toggle?.addEventListener('click', () => {
    const open = panel.classList.toggle('ledger--open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  panel.addEventListener('click', (event) => {
    if ((event.target as Element).closest('a') && panel.classList.contains('ledger--open')) {
      panel.classList.remove('ledger--open');
      toggle?.setAttribute('aria-expanded', 'false');
    }
  });

  publishState();
}
