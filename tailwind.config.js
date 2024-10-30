/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'white',
        secondary: '#FFFFFF',
        'page-bg': 'black',
      },
      screens: {
        xs: '320px',
      },
      boxShadow: {
        'pink-shadow': 'inset -10px 10px 13px -11px rgb(255 107 183)',
      },
      gridColumn: {
        'span-3/2': 'span 3 / span 2',
      },
      hueRotate: {
        'custom': '210deg',
      },
    },
  },
}
