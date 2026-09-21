/**
 * Mounts the rigged 3D avatar in the hero stage. three.js and the scene code
 * load on demand as their own chunk, so the main bundle stays small. The still
 * render underneath is the poster, and the fallback when WebGL is missing or
 * the model fails to load.
 */
export function initAvatar(): void {
  const host = document.querySelector<HTMLElement>('[data-avatar]');
  const src = host?.dataset.src;
  if (!host || !src) return;
  if (!('WebGL2RenderingContext' in window)) {
    host.dataset.avatarState = 'unsupported';
    return;
  }

  host.dataset.avatarState = 'loading';
  import('./avatar-scene')
    .then(({ mountAvatar }) => mountAvatar(host, src))
    .catch(() => {
      host.dataset.avatarState = 'failed';
    });
}
