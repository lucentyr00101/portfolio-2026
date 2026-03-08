// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
  },
  app: {
    head: {
      meta: [
        { name: 'theme-color', content: '#030712' },
        { name: 'google-site-verification', content: 'HpEYBuoAYjQIzebFQ0ncemNegruVD64vubsV0vuMCVM' },
      ],
      link: [
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'apple-touch-icon', href: '/og-image.png' },
      ],
    },
  },
})
