// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/github": "https://github.com/jpecheverryp",
    "/linkedin": "https://www.linkedin.com/in/jpechdev/",
  },

  vite: {
    plugins: [tailwindcss()]
  }
});