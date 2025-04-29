export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['/assets/css/main.css'],
  
  app: {
   baseURL: '/Multi-step-form/', 
  },

  ssr: false, 
})

