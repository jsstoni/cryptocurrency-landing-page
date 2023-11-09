<template>
  <a :href="url" class="text-[#B982FF] font-bold flex"
    >{{ title }} <img src="~/assets/img/arrow.svg"
  /></a>
</template>

<script setup>
defineProps({
  title: String,
  url: String,
});
</script>
