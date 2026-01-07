import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  integrations: [tailwind()]
});
