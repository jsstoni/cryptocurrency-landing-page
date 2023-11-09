<template>
  <div
    v-editable="blok"
    class="flex flex-col gap-3 justify-center items-center p-5 bg-zinc-900 rounded-[5px]"
  >
    <img :src="blok.icon" width="55" :alt="blok.title" />
    <h3 class="text-white text-2xl font-bold leading-10">
      {{ blok.title }}
    </h3>
    <p class="text-slate-400 text-base leading-normal text-center">
      {{ blok.description }}
    </p>
    <link-action class="mt-auto" :title="blok.link_title" url="#" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
