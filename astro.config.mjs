import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@pages": "/src/pages",
        "@public": "/public",
      },
    },
  },
});
