import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/supabase',
        // '@unocss/nuxt',
        '@pinia/nuxt',
        // '@nuxtjs/color-mode',
      ],
})
