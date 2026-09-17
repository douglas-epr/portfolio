import { observeChapters } from './chapters';

/**
 * Fixed chapter tab strip. Marks the current chapter and closes the phone
 * popover after a jump. The popover itself is native: open, light-dismiss,
 * Escape and focus return come from the browser.
 */
export function initNav(): void {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;

  const tabs = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[data-tab]'));
  const menu = nav.querySelector<HTMLElement>('#chapter-menu');

  observeChapters((id) => {
    for (const tab of tabs) {
      if (tab.dataset.tab === id) tab.setAttribute('aria-current', 'true');
      else tab.removeAttribute('aria-current');
    }
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (menu && typeof menu.hidePopover === 'function' && menu.matches(':popover-open')) menu.hidePopover();
    });
  });
}
