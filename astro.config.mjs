// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jpech.dev',
  integrations: [sitemap()],
  redirects: {
    "/github": "https://github.com/jpecheverryp",
    "/linkedin": "https://www.linkedin.com/in/jpechdev/",
  },

  vite: {
    plugins: [tailwindcss()]
  }
});