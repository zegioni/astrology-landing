export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  i18n: {
    locales: [
      { code: 'uk', iso: 'uk-UA', file: 'uk.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'uk',
    langDir: './locales',
    strategy: 'prefix_except_default',
  },
  plugins: ['~/plugins/bootstrap-client.js'],
})