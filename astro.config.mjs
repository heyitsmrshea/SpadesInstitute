import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // TODO: Fix compatibility issue

// Custom domain configuration
export default defineConfig({
  site: 'https://www.spadesinstitute.org',
  base: '/',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  integrations: [
    tailwind()
    // sitemap() // TODO: Re-enable after fixing compatibility
  ],
  trailingSlash: 'always',
  redirects: {
    '/RSA': '/rsa/',
    '/RSA/': '/rsa/',
    '/Rsa': '/rsa/',
    '/Rsa/': '/rsa/'
  }
});
