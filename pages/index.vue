<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <main class="index">
    <h1 v-html="t('welcome1')" />
    <h2 v-html="t('welcome2')" />
  </main>
</template>

<style lang="scss">
@import 'assets/scss/pages/index';
</style>>

<i18n lang="json">
{
  "en": {
    "welcome1": "Hi, im <span class='text--tortitas'>Tortitas</span>",
    "welcome2": "Web developer, Indie game developer, <span class='text--deno'>Deno</span> enthusiast."
  },
  "es": {
    "welcome1": "Hola, soy <span class='text--tortitas'>Tortitas</span>",
    "welcome2": "Desarrollador web, Desarrollador de juegos indie, entusiasta de <span class='text--deno'>Deno</span>."
  }
}
</i18n>