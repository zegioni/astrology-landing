export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      MERCHANT_ACCOUNT: process.env.MERCHANT_ACCOUNT,
      MERCHANT_DOMAIN_NAME: process.env.MERCHANT_DOMAIN_NAME,
      SECRET_KEY: process.env.SECRET_KEY,
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  plugins: ['~/plugins/scroll.ts'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
