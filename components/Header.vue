<template>
  <header class="header">
    <button
      :title="titleMenu"
      class="button--icon hamburger"
      @click="toggleMenu"
    >
      <IconsHamburger />
    </button>

    <nav class="menu gradient" :class="{ active: showMenu }">
      <ul>
        <li>
          <nuxt-link class="underline" to="/" @click="close">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link class="underline" to="/about" @click="close"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="underline" to="/projects" @click="close"
            >Projects</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="underline" to="/blog" @click="close"
            >Blog</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

const showMenu = ref(false)
const titleMenu = computed(() => {
  return showMenu.value ? 'Close menu' : 'Open menu'
})

const toggleMenu = () => {
  document.querySelector('.hamburger').classList.remove('button--icon--clicked')
  document.querySelector('.hamburger').classList.add('button--icon--clicked')
  setTimeout(() => {
    document
      .querySelector('.hamburger')
      .classList.remove('button--icon--clicked')
  }, 400)

  showMenu.value = !showMenu.value
}

const close = () => {
  showMenu.value = false
}
</script>

<style lang="scss">
@import 'assets/scss/components/header';
</style>
