// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  experimental: {
    reactivityTransform: false,
    inlineSSRStyles: false,
    payloadExtraction: false,
  },
  app: {
    baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
  }
})
