type Project = {
  name: string
  description: string
  html_url: string
  languages_url: string
  languages: string[] | null
}

export default defineEventHandler(async _event => {
  const config = useRuntimeConfig()

  const username = config.github.username
  const token = config.github.token

  const excludedLanguages = ['HLSL', 'ShaderLab', 'Less', 'Vim Script']

  let projects = (await $fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      cache: 'force-cache',
    },
  )) as Project[]

  projects = await Promise.all(
    projects.map(async project => {
      const languages = (await $fetch(project.languages_url, {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
        cache: 'force-cache',
      })) as any

      const parsedLanguages = Object.keys(languages).filter(
        language => !excludedLanguages.includes(language),
      )

      return {
        ...project,
        languages: parsedLanguages,
      } as Project
    }),
  )

  return projects as Project[]
})
