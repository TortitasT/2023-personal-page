// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
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
  }
})
