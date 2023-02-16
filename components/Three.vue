<template>
  <canvas class="three" ref="canvas"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Three",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);

      const fov = 50;
      const aspect = window.innerWidth / window.innerHeight;
      const near = 0.1;
      const far = 20;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera.position.z = 3;

      const scene = new THREE.Scene();

      const boxWidth = 1;
      const boxHeight = 1;
      const geometry = new THREE.OctahedronGeometry(boxWidth, boxHeight);

      const material = new THREE.MeshBasicMaterial({
        color: 0x44aa88,
        wireframe: true,
      });

      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(1.25, 0, 0);
      scene.add(cube);

      const cube2 = new THREE.Mesh(geometry, material);
      cube2.position.set(-1.25, 2, -2);
      scene.add(cube2);

      function render(time) {
        time *= 0.001;

        cube.rotation.x = time / 2;
        cube.rotation.y = time / 2;

        cube2.rotation.x = time / 3;
        cube2.rotation.y = time / 3;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    },
  },
};
</script>

<style lang="scss">
.three {
  position: fixed;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  z-index: 0;

  opacity: 0.5;

  pointer-events: none;
}
</style>