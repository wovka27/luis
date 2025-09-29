// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  nitro: {
    preset: "vercel",
  },
  css: ["~~/app/styles/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                          @use "~~/app/styles/helpers" as *;
                          `,
        },
      },
    },
  },
  modules: ["@nuxt/image"],
});
