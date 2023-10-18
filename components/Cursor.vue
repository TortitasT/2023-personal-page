<template>
  <div class="cursor-wrapper">
    <div ref="cursor" class="cursor" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cursor = ref(null)

const followMouse = () => {
  const mouseX = window.event.clientX
  const mouseY = window.event.clientY

  cursor.value.style.left = `${mouseX}px`
  cursor.value.style.top = `${mouseY}px`

  cursor.value.animate(
    {
      left: `${mouseX}px`,
      top: `${mouseY}px`,
    },
    {
      duration: 500,
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
@import 'assets/scss/components/cursor';
</style>
