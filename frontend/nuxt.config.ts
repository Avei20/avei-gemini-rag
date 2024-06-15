// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
//
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    public: {
      API: process.env.API || "https://api.rag.avei.ovh",
    },
  },

  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],

  pinia: {
    storesDirs: ["./store/**/**"],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  nitro: {
    preset: "bun",
  },

  routeRules: {},
});
