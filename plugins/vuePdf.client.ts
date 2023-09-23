import VuePdfEmbed from 'vue-pdf-embed'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('vue-pdf-embed', VuePdfEmbed)
})