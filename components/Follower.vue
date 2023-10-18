<template>
  <div class="follower-wrapper">
    <div ref="follower" class="follower" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const follower = ref(null)

const followMouse = () => {
  const mouseX = window.event.clientX
  const mouseY = window.event.clientY

  follower.value.style.left = `${mouseX}px`
  follower.value.style.top = `${mouseY}px`

  follower.value.animate(
    {
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    },
    {
      duration: 5000,
      easing: 'ease-in-out',
      fill: 'forwards',
    },
  )
}

onMounted(() => {
  document.addEventListener('mousemove', followMouse)
})
</script>

<style lang="scss">
@import 'assets/scss/components/follower';
</style>
