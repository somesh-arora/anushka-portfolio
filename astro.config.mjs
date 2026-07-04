import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://somesh-arora.github.io",
  base: "/anushka-portfolio",
  integrations: [sitemap(), mdx()],
  output: "static",
  build: {
    assets: "assets",
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
