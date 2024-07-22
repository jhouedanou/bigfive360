export default defineNuxtConfig({
  css: ['~/assets/css/styles.scss',
    'bulma/css/bulma.min.css',
    'material-icons/iconfont/material-icons.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap' },
        
        { rel: 'icon', type: 'image/x-icon', href: '/images/bigfive360/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/bigfive360/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/bigfive360/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/bigfive360/favicon-16x16.png' },
        { rel: 'manifest', href: '/images/bigfive360/site.webmanifest' },
      ]
    }
  },
  modules: [
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/image'
  ],
  image: {
    provider: 'vercel'
  },  
  vite: {
    server: {
      fs: {
        allow: ['/']
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  compatibilityDate: '2024-07-18'
})