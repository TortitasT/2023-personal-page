<template>
  <main class="page blog">
    <h1>Blog</h1>

    <ul v-if="blogPosts.length > 0" class="blog__posts">
      <li
        v-for="{ _path: slug, title, description, date } in blogPosts"
        :key="slug"
        class="blog__posts__post"
      >
        <!-- not using NuxtLink because it fails to load useRoute().params on mounted -->
        <a :href="slug">
          <span class="blog__posts__post__title">
            {{ title }}
          </span>

          <span class="blog__posts__post__date">
            {{ date }}
          </span>

          <p class="blog__posts__post__description">
            {{ description }}
          </p>
        </a>
      </li>
    </ul>

    <p v-else>No blog posts found :(</p>
  </main>
</template>

<script setup>
const blogPosts = await queryContent('/blog')
  .sort({ date: -1 }) // show latest articles first
  .where({ _partial: false }) // exclude the Partial files
  .find()
</script>
