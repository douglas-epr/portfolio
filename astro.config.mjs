import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://douglasgouveia.dev',
  adapter: vercel(),
  integrations: [sitemap()],
  // The scroll engine splits headings by reading textContent. The Astro 7
  // default ('jsx') strips whitespace between text nodes and would glue words.
  compressHTML: true,
  prefetch: false,
  build: { inlineStylesheets: 'never' },
  env: {
    schema: {
      BREVO_API_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
