// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/supabase', {
      redirect: false, // Disabling automatic redirection to the login page
      // redirectOptions: {
      //   login: '/login', // Path for login, adjust as needed
      //   callback: '/confirm', // After login redirect, adjust as needed
      //   include: undefined, // Define specific routes to include if needed
      //   exclude: [], // You can specify routes to exclude from auth checks
      //   cookieRedirect: false // Manage redirection via cookie
      // }
    }],
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  devtools: { enabled: true }
})
