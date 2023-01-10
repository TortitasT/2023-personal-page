<template>
  <header class="header">
    <button class="button--clean hamburger" @click="toggleMenu">
      <IconsHamburger />
    </button>

    <nav class="menu gradient" :class="{ 'active': showMenu }">
      <ul>
        <li><nuxt-link class="underline" to="/">Home</nuxt-link></li>
        <li><nuxt-link class="underline" to="/about">About</nuxt-link></li>
        <li><nuxt-link class="underline" to="/projects">Projects</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<style lang="scss">
@import 'assets/scss/components/header';
</style>