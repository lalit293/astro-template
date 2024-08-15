import { defineConfig } from "astro/config";
import million from "million/compiler";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [million.vite({
      mode: "react",
      server: true,
      auto: true
    })]
  },
  integrations: [react(), sitemap(), mdx(), tailwind(), tailwind({
    applyBaseStyles: false
  })]
});
