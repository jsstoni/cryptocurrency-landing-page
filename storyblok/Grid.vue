<template>
  <div class="relative -mt-[177px] h-[460px]">
    <div class="w-[990px] mx-auto">
      <div
        v-editable="blok"
        class="grid md:grid-cols-3 gap-4"
      >
        <StoryblokComponent
          v-for="blok in blok.columns"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
