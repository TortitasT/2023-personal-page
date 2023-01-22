<script setup>
import { ref, watch, computed } from 'vue'

const { t } = useI18n({ useScope: 'local' })

const showMenu = ref(false)
const titleMenu = computed(() => {
  return showMenu.value ? 'Close menu' : 'Open menu'
})

const toggleMenu = () => {
  document.querySelector('.hamburger').classList.remove('button--icon--clicked')
  document.querySelector('.hamburger').classList.add('button--icon--clicked')
  setTimeout(() => {
    document.querySelector('.hamburger').classList.remove('button--icon--clicked')
  }, 400)

  showMenu.value = !showMenu.value
}

const close = () => {
  showMenu.value = false
}

const { locale } = useI18n()
</script>

<template>
  <header class="header">
    <select class="lang" v-model="locale">
      <option value="en">en</option>
      <option value="es">es</option>
    </select>

    <button :title="titleMenu" class="button--icon hamburger" @click="toggleMenu">
      <IconsHamburger />
    </button>

    <nav class="menu gradient" :class="{ 'active': showMenu }">
      <ul>
        <li><nuxt-link @click="close" class="underline" to="/">{{ t('home') }}</nuxt-link></li>
        <li><nuxt-link @click="close" class="underline" to="/about">{{ t('about') }}</nuxt-link></li>
        <li><nuxt-link @click="close" class="underline" to="/projects">{{ t('projects') }}</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import 'assets/scss/components/header';
</style>

<i18n lang="json">
{
  "en": {
    "home": "Home",
    "about": "About",
    "projects": "Projects"
  },
  "es": {
    "home": "Inicio",
    "about": "Sobre mi",
    "projects": "Proyectos"
  }
}
</i18n>