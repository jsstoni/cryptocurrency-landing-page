<template>
  <div class="max-w-[1440px] mx-auto">
    <StoryblokComponent v-if="story" :blok="story.content" />
    <Newsletter />
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: "Cryptocurrency Landing Page",
});
const story = await useAsyncStoryblok("home", { version: "draft" });
</script>

<style>
body {
  @apply bg-[#0B0B0F];
}
</style>
