// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Tortitas',
      meta: [
        {
          name: 'description',
          content: 'Tortitas personal portfolio webpage.',
        },
        { name: 'keywords', content: 'portfolio, tortitas, tortitasdev' },
        { name: 'author', content: 'Tortitas' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  ssr: true,

  modules: ['@nuxt/content', 'nuxt-simple-sitemap'],

  runtimeConfig: {
    github: {
      username: process.env.GITHUB_USERNAME,
      token: process.env.GITHUB_TOKEN,
    },
  },
})
