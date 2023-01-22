// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Tortitas',
      meta: [
        { name: 'description', content: 'Tortitas personal portfolio webpage.' },
        { name: 'keywords', content: 'portfolio, tortitas, tortitasdev' },
        { name: 'author', content: 'Tortitas' },
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  runtimeConfig: {
    github: {
      username: process.env.GITHUB_USERNAME,
      token: process.env.GITHUB_TOKEN
    }
  },

  modules: [
    [
      '@nuxtjs/i18n',
      {
        vueI18n: {
          legacy: false,
          locale: 'en',
          messages: {
            en: {
              welcome: 'Welcome'
            },
            es: {
              welcome: 'Bienvenido'
            }
          }
        }
      }
    ]
  ]
})
