<template>
  <div class="max-w-[1440px] mx-auto">
    <StoryblokComponent v-if="story" :blok="story.content" />
    <Newsletter />
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Cryptocurrency Landing Page",
  ogTitle: "Cryptocurrency Landing Page",
  description: "Cryptocurrency Landing Page, para practicar en diseño",
  ogDescription: "Cryptocurrency Landing Page, para practicar en diseño",
});
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<style>
body {
  @apply bg-[#0B0B0F];
}
</style>
