// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  telemetry: false,
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
    payloadExtraction: false,
  },
  app: {
    baseURL: '/bookcase/',
    // buildAssetsDir: 'assets',
  },
  runtimeConfig: {
    public: {
      basePdfUrl: 'https://raw.githubusercontent.com/tbn133/bookcase-pdf/master',
    },
  },
})
