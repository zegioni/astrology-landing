export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      MONOBANK_API_KEY: process.env.MONOBANK_API_KEY,
      STORE_ID: process.env.STORE_ID,
      SIGN_KEY: process.env.SIGN_KEY,
      SECRET_EMAIL_PASS: process.env.SECRET_EMAIL_PASS,
    },
    public: {
      MONOBANK_API_URL: process.env.MONOBANK_API_URL,
      EMAIL: process.env.EMAIL,
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'ГРОШІ | ПРОДАЖІ | МАСШТАБ',
      meta: [
        {
          name: 'theme-color',
          content: '#191934', // Укажите желаемый цвет в шестнадцатеричном формате
        },
        {
          name: 'description',
          content:
            'Вітаю! Я рада представити вам програму наставництва, яка допоможе вам досягти успіху в продажах.',
        },
        {
          name: 'keywords',
          content:
            'марафон, зцілення душі, карма, енергія, Олена Оніщенко, духовний баланс, медитація, вебінар',
        },
        {
          property: 'og:title',
          content:
            'Вітаю! Я рада представити вам програму наставництва, яка допоможе вам досягти успіху в продажах.',
        },
        {
          property: 'og:description',
          content:
            'Вітаю! Я рада представити вам програму наставництва, яка допоможе вам досягти успіху в продажах.',
        },
        {
          property: 'og:image',
          content: '@/assets/images/hero-image.png',
        },
        {
          property: 'og:url',
          content: 'https://neo18.com.ua',
        },
        {
          name: 'twitter:title',
          content:
            'Вітаю! Я рада представити вам програму наставництва, яка допоможе вам досягти успіху в продажах.',
        },
        {
          name: 'twitter:description',
          content:
            'Вітаю! Я рада представити вам програму наставництва, яка допоможе вам досягти успіху в продажах.',
        },
        {
          name: 'twitter:image',
          content: '@/assets/images/hero-image.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          sizes: '16x16',
          href: '/favicon.svg',
        },
      ],
    },
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt'],
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
