// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  }), lit()],
});