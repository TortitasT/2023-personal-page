<script setup>
import { ref } from 'vue'

const { t } = useI18n({ useScope: 'local' })

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

<template>
  <main class="projects">
    <h1 v-html="t('projects1')" />
    <h2 v-html="t('projects2')" />

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

<style lang="scss">
@import 'assets/scss/pages/projects';
</style>

<i18n lang="json">
{
  "en": {
    "projects1": "Projects",
    "projects2": "Here you can find all my projects uploaded to Github"
  },
  "es": {
    "projects1": "Proyectos",
    "projects2": "Aquí puedes encontrar todos los proyectos que tengo en Github"
  }
}
</i18n>