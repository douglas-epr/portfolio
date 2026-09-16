/**
 * Project detail overlay built on the native <dialog>. Every project panel is
 * pre-rendered at build time and hidden; opening swaps which panel is shown.
 * Focus trapping, Escape and the top layer come from the browser.
 */
export function initProjectDialog(): void {
  const dialog = document.querySelector<HTMLDialogElement>('#project-dialog');
  if (!dialog) return;

  const panels = Array.from(dialog.querySelectorAll<HTMLElement>('[data-project-panel]'));
  let opener: HTMLElement | null = null;

  const showPanel = (id: string): boolean => {
    let found = false;
    for (const panel of panels) {
      const match = panel.dataset.projectPanel === id;
      panel.hidden = !match;
      const heading = panel.querySelector<HTMLElement>('[data-dialog-heading]');
      if (heading) {
        if (match) heading.id = 'project-dialog-title';
        else heading.removeAttribute('id');
      }
      if (match) found = true;
    }
    return found;
  };

  document.querySelectorAll<HTMLElement>('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.projectOpen ?? '';
      if (!showPanel(id)) return;
      opener = button;
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  });

  dialog.querySelectorAll<HTMLElement>('[data-dialog-close]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    panels.forEach((panel) => {
      panel.hidden = true;
    });
    opener?.focus();
    opener = null;
  });
}
