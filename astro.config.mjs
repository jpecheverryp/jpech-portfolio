// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/github": "https://github.com/jpecheverryp",
    "/linkedin": "https://www.linkedin.com/in/jpechdev/",
  }
});
