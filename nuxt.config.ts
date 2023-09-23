// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
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
    // baseURL: '/bookcase/',
    // buildAssetsDir: 'assets'
  },
  // generate: {
  //   async routes() {
  //     const { $content } = require('@nuxt/content')
  //     const files = await $content({ deep: true }).only(['path']).fetch()
  //     return files.map(file => file.path === '/index' ? '/' : file.path)
  //   }
  // }
})
