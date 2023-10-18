<template>
  <div class="noise"></div>
</template>

<style lang="scss">
@keyframes grain {
  0%,
  100% {
    transform: translate(0, 0);
  }

  10% {
    transform: translate(-5%, -10%);
  }

  30% {
    transform: translate(3%, -15%);
  }

  50% {
    transform: translate(12%, 9%);
  }

  70% {
    transform: translate(9%, 4%);
  }

  90% {
    transform: translate(-1%, 7%);
  }
}

.noise {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  pointer-events: none;

  z-index: 1;

  &::after {
    content: '';

    position: absolute;
    width: 200vw;
    height: 200vh;
    left: -50%;
    top: -50%;
    background-image: url('~/assets/images/noise.png');
    background-size: 3em;

    filter: opacity(0.3);

    animation: grain 1.5s steps(6) infinite;
  }
}
</style>
