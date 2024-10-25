// plugins/bootstrap-client.js
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  if (!import.meta.env.SSR) {
    import('bootstrap/dist/css/bootstrap.min.css')
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})
