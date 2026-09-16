/**
 * YouTube facade: a poster and a play button until the visitor asks for the
 * video. Saves roughly two megabytes of third-party script per embed on load.
 */
export function initYouTube(): void {
  document.querySelectorAll<HTMLElement>('[data-youtube]').forEach((facade) => {
    const button = facade.querySelector<HTMLButtonElement>('button');
    button?.addEventListener('click', () => {
      const id = facade.dataset.youtube ?? '';
      const start = Number(facade.dataset.start ?? '0');
      const params = new URLSearchParams({ autoplay: '1', rel: '0' });
      if (start > 0) params.set('start', String(start));

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?${params.toString()}`;
      iframe.title = facade.dataset.title ?? 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';

      facade.replaceChildren(iframe);
      facade.classList.add('is-playing');
    });
  });
}
