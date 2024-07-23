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
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap'},
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
  // image: {
  //   provider: 'vercel'
  // },  
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