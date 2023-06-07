<template>
  <main class="page blog blog__post">
    <h1>{{ blogPost.title }}</h1>
    <small>{{ blogPost.date }}</small>
    <ContentRenderer :value="blogPost" />
  </main>
</template>

<script setup>
const route = useRoute()

const path = `/blog/${route.params.slug}`

const blogPost = await queryContent("/blog")
  .where({ _path: path })
  .findOne()
</script>
