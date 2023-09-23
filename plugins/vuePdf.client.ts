import VuePdfEmbed from 'vue-pdf-embed'
import { VuePdf } from 'vue3-pdfjs/esm';
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('vue-pdf-embed', VuePdfEmbed)
    nuxtApp.vueApp.component('vue-pdf', VuePdf)
})