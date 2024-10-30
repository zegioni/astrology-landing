import { defineNuxtPlugin } from '#app'
import type { RouterConfig } from '@nuxt/schema'
import type { RouteLocationNormalized, RouterScrollBehavior } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    const router = nuxtApp.$router as RouterConfig & { options: { scrollBehavior: RouterScrollBehavior } }
    router.options.scrollBehavior = (to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: { top: number } | null) => {
      if (to.hash) {
        return {
          el: to.hash,
          top: 30,
          behavior: 'smooth',
        }
      }
      return savedPosition || { top: 0 }
    }
  })
})
