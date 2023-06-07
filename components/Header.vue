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
          <nuxt-link @click="close" class="underline" to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link @click="close" class="underline" to="/about"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click="close" class="underline" to="/projects"
            >Projects</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click="close" class="underline" to="/blog"
            >Blog</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const showMenu = ref(false);
const titleMenu = computed(() => {
  return showMenu.value ? "Close menu" : "Open menu";
});

const toggleMenu = () => {
  document
    .querySelector(".hamburger")
    .classList.remove("button--icon--clicked");
  document.querySelector(".hamburger").classList.add("button--icon--clicked");
  setTimeout(() => {
    document
      .querySelector(".hamburger")
      .classList.remove("button--icon--clicked");
  }, 400);

  showMenu.value = !showMenu.value;
};

const close = () => {
  showMenu.value = false;
};
</script>

<style lang="scss">
@import "assets/scss/components/header";
</style>

