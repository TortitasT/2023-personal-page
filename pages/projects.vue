<template>
  <main class="projects">
    <h1>Projects</h1>
    <h2>Here you can find all my projects uploaded to Github</h2>

    <section class="box-list">
      <div v-for="(project, index) in projects" :key="index">
        <a :href="project.html_url">
          <h3>{{ project.name }} <small class="template" v-if="project.is_template">template</small></h3>
          <div class="languages" v-if="project.languages.length > 0">
            <small v-for="(language, index) in project.languages" :key="index" :class="languageClassName(language)">
              {{ language }}
            </small>
          </div>
          <p>{{ project.description }}</p>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const validate = (project) => {
  let valid = true

  if (project.name === 'TortitasT') {
    valid = false
  }

  if (project.description === null) {
    valid = false
  }

  if (project.fork) {
    valid = false
  }

  if (project.archived) {
    valid = false
  }

  return valid
}

const projects = ref([])

const { data } = await useFetch('/api/projects')
projects.value = data.value.filter(project => {
  return validate(project)
})

const languageClassName = (language) => {
  if (language === 'C#') {
    return 'text--csharp'
  }

  return `text--${language.toLowerCase()}`
}
</script>

<style lang="scss">
@import 'assets/scss/pages/projects';
</style>>