# Working on this repo

Astro 7 static site with one on-demand endpoint (`src/pages/api/contact.ts`), deployed to Vercel with `@astrojs/vercel`. No UI framework, no islands, no Tailwind.

Rules that are easy to break:

- `src/scripts/scrollcraft.js` and `src/styles/scrollcraft.css` are vendored from the scrollcraft skill. Do not edit them. Theme through `src/styles/tokens.css`; bespoke behaviour lives in `src/scripts/*.ts` and reads `--sc-p` or `data-sc-*` attributes.
- The CSP in `vercel.json` has `script-src 'self'`. Never use `is:inline` for JavaScript and never add inline event handlers. All page JS is imported from `src/scripts/main.ts`.
- `compressHTML: true` (not the Astro 7 default `'jsx'`) because the engine splits headings by `textContent`. Keep any `data-sc-kinetic` heading as plain text on one line.
- Astro 7 uses the strict Rust compiler: every non-void element needs a closing tag.
- Content lives in `src/data/*.ts`. Real facts only; the ledger stamps them.
- Copy follows the stop-slop rules: no em dashes, no adverbs, active voice.
