// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: "https://jcsmithf22.github.io",
  base: "troop_67",
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    lit(),
  ],
});

