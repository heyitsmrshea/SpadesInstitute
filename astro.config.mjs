import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // TODO: Fix compatibility issue

// For custom domain (e.g., spadesinstitute.org), use:
// site: 'https://spadesinstitute.org',
// base: '/',
//
// For GitHub Pages without custom domain:
export default defineConfig({
  site: 'https://HeyItsMrShea.github.io',
  base: '/SpadesInstitute',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  integrations: [
    tailwind()
    // sitemap() // TODO: Re-enable after fixing compatibility
  ],
  trailingSlash: 'always'
});
