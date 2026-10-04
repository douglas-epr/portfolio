/**
 * Phones read some acts better as plain scroll. A section marked
 * data-sc-act-phone="flow" swaps its act for that value on a phone-width
 * viewport, before the engine mounts: a pinned list stops dimming the rows
 * the reader has not reached, and a horizontal rail stacks into a column
 * instead of sliding cards past the edges. Rails lose data-sc-pan so the
 * engine never transforms them. data-phone-flow marks the swap for CSS.
 */
export const PHONE_QUERY = '(max-width: 860px)';

export function applyPhoneActs(root: ParentNode = document): void {
  if (!matchMedia(PHONE_QUERY).matches) return;
  root.querySelectorAll<HTMLElement>('[data-sc-act-phone]').forEach((act) => {
    act.setAttribute('data-sc-act', act.dataset.scActPhone ?? 'flow');
    act.setAttribute('data-phone-flow', '');
    act.querySelectorAll('[data-sc-pan]').forEach((rail) => rail.removeAttribute('data-sc-pan'));
  });
}
