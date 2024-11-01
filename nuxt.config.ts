export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      MERCHANT_ACCOUNT: process.env.MERCHANT_ACCOUNT,
      MERCHANT_DOMAIN_NAME: process.env.MERCHANT_DOMAIN_NAME,
      SECRET_KEY: process.env.SECRET_KEY,
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Марафон Зцілення Душі: Сила Карми та Енергії',
      meta: [
        {
          name: 'description',
          content:
            "Приєднуйтесь до марафону 'Зцілення Душі: Сила Карми та Енергії' з Оленою Оніщенко. Дізнайтеся, як знайти баланс між духовним та матеріальним, звільнитися від енергетичних блоків та посилити енергію своєї душі.",
        },
        {
          name: 'keywords',
          content:
            'марафон, зцілення душі, карма, енергія, Олена Оніщенко, духовний баланс, медитація, вебінар',
        },
        {
          property: 'og:title',
          content: 'Марафон Зцілення Душі: Сила Карми та Енергії',
        },
        {
          property: 'og:description',
          content:
            "Приєднуйтесь до марафону 'Зцілення Душі: Сила Карми та Енергії' з Оленою Оніщенко. Дізнайтеся, як знайти баланс між духовним та матеріальним, звільнитися від енергетичних блоків та посилити енергію своєї душі.",
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
          content: 'Марафон Зцілення Душі: Сила Карми та Енергії',
        },
        {
          name: 'twitter:description',
          content:
            "Приєднуйтесь до марафону 'Зцілення Душі: Сила Карми та Енергії' з Оленою Оніщенко. Дізнайтеся, як знайти баланс між духовним та матеріальним, звільнитися від енергетичних блоків та посилити енергію своєї душі.",
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
