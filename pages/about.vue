<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <main class="about">
    <h1 v-html="t('about1')" />

    <p v-html="t('about2')" />

    <p v-html="t('about3')" />

    <p v-html="t('about4')" />
  </main>
</template>

<style lang="scss">
@import 'assets/scss/pages/about';
</style>

<i18n lang="json">
{
  "en": {
    "about1": "About me",
    "about2": "Hi, I'm Tortitas, a web developer, indie game developer and <span class='text--deno'>Deno</span> enthusiast. Check me out on <a href='https://github.com/tortitast' target='_blank'>Github</a> to see all my work.",
    "about3": "I work as a junior developer at <a href='https://descom.es' target='_blank'>Descom.es</a>, a software company from La Nucia, Spain. There I work with <span class='text--aws'>AWS</span>, <span class='text--nuxt'>Nuxt.js</span>, <span class='text--node'>Node.js</span>, <span class='text--php'>PHP</span> and <span class='text--laravel'>Laravel</span>.",
    "about4": "In my free time I make videogames and weird projects in <span class='text--deno'>Deno</span>, you can check my games out in my <a href='https://tortitas.itch.io/' target='_blank'>itch.io</a> profile. As for my miscellaneous projects, you can check them out on my <a href='https://github.com/tortitast' target='_blank'>Github</a>"
  },
  "es": {
    "about1": "Sobre mi",
    "about2": "Hola, Soy Tortitas, un desarrollador web, desarrollador de videojuegos indie y entusiasta de <span class='text--deno'>Deno</span>. Entra en mi <a href='https://github.com/tortitast' target='_blank'>Github</a> para ver todo mi trabajo.",
    "about3": "Trabajo como desarrollador junior en <a href='https://descom.es' target='_blank'>Descom.es</a>, una empresa de software de Alicante, La Nucia. Trabajo con <span class='text--aws'>AWS</span>, <span class='text--nuxt'>Nuxt.js</span>, <span class='text--node'>Node.js</span>, <span class='text--php'>PHP</span> y <span class='text--laravel'>Laravel</span>.",
    "about4": "En mi tiempo libre hago videojuegos y proyectos con <span class='text--deno'>Deno</span>, puedes ver mis juegos en mi perfil de <a href='https://tortitas.itch.io/' target='_blank'>itch.io</a>. Sobre mis proyectos, están todos en mi <a href='https://github.com/tortitast' target='_blank'>Github</a>"
  }
}
</i18n>