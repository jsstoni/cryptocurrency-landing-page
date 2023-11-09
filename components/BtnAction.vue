<template>
  <a
    :href="url"
    class="p-4 px-7 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-lg text-white font-bold"
    >{{ title }}</a
  >
</template>

<script setup>
defineProps({
  title: String,
  url: String,
});
</script>
