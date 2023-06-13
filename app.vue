<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style lang="scss">
@import 'assets/scss/main';

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
  ;
}
</style>
