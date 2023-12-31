// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [["@storyblok/nuxt", { accessToken: process.env.STORYBLOCK, apiOptions: { region: "us", } }], "@nuxtjs/tailwindcss"],
})