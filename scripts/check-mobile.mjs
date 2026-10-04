/**
 * Phone layout check. Loads the page at three phone widths in the installed
 * Chrome (headless, touch, 3x) and fails on what made the phone page bad:
 *   - horizontal overflow of the document
 *   - visible text or controls running past the viewport edge
 *   - tap targets under 40px tall
 *   - a horizontal rail or pinned list still active on a phone
 *
 *   npm run check:mobile                       (dev server on :3014)
 *   node scripts/check-mobile.mjs https://douglasgouveia.dev
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const { chromium } = createRequire(join(process.cwd(), 'package.json'))('playwright-core');

const URL = process.argv[2] ?? 'http://localhost:3014/';
const PHONES = [
  { name: 'small', width: 360, height: 740 },
  { name: 'iphone', width: 390, height: 844 },
  { name: 'large', width: 430, height: 932 },
];
const MIN_TAP = 40;
const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));

// Runs in the page. Decorative layers (aria-hidden) are allowed to bleed off the edge.
function audit(minTap) {
  const vw = document.documentElement.clientWidth;
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.visibility !== 'hidden' && cs.display !== 'none' && r.width > 0 && r.height > 0 && !el.closest('[aria-hidden="true"], dialog:not([open])');
  };
  const label = (el) => `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}.${[...el.classList].join('.')} "${(el.textContent ?? '').trim().slice(0, 40)}"`;
  const main = document.querySelector('main');
  const textEls = [...main.querySelectorAll('h1, h2, h3, p, li, a, button, dt, dd, blockquote')].filter(visible);
  const offEdge = textEls.filter((el) => { const r = el.getBoundingClientRect(); return r.left < -1 || r.right > vw + 1; }).map(label);
  const taps = [...main.querySelectorAll('a[href], button')].filter(visible)
    .filter((el) => !el.closest('p, li, dd, blockquote') || el.matches('.hero__cta, .video__open, .object__open'))
    .filter((el) => el.getBoundingClientRect().height < minTap).map(label);
  const railsActive = [...document.querySelectorAll('[data-sc-pan]')].map(label);
  const phoneActs = [...document.querySelectorAll('[data-sc-act-phone]')].filter((el) => el.getAttribute('data-sc-act') !== el.dataset.scActPhone).map(label);
  return {
    overflowX: document.documentElement.scrollWidth - vw,
    offEdge: [...new Set(offEdge)].slice(0, 8),
    smallTaps: [...new Set(taps)].slice(0, 8),
    railsActive,
    phoneActs,
  };
}

async function walk(page) {
  // Scroll the whole page so every reveal, reflow and lazy image has run.
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 600) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(60);
  }
}

const browser = await chromium.launch({ executablePath: CHROME, headless: true });
let failed = 0;
for (const phone of PHONES) {
  const context = await browser.newContext({ viewport: { width: phone.width, height: phone.height }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await walk(page);
  const result = await page.evaluate(audit, MIN_TAP);
  const problems = [
    result.overflowX > 0 && `document overflows by ${result.overflowX}px`,
    ...result.offEdge.map((l) => `off the edge: ${l}`),
    ...result.smallTaps.map((l) => `tap target under ${MIN_TAP}px: ${l}`),
    ...result.railsActive.map((l) => `rail still sliding: ${l}`),
    ...result.phoneActs.map((l) => `act not switched for phones: ${l}`),
  ].filter(Boolean);
  console.log(`${problems.length ? '✗' : '✓'} ${phone.name} ${phone.width}x${phone.height}`);
  problems.forEach((p) => console.log(`    ${p}`));
  failed += problems.length;
  await context.close();
}
await browser.close();
process.exit(failed ? 1 : 0);
