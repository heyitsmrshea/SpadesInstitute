import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// UPDATE: Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
export default defineConfig({
  site: 'https://HeyItsMrShea.github.io',
  base: '/SpadesInstitute',
  markdown: {
    syntaxHighlight: 'shiki'
  },
  integrations: [tailwind()]
});
