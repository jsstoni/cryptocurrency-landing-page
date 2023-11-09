<template>
  <div class="relative h-[550px]">
    <div
      class="absolute -top-[380px] left-0 -z-10 w-full h-[1143px] bg-[url(assets/img/bg-gradient-img-1.webp)] bg-no-repeat bg-contain-height bg-left"
    ></div>
    <div class="w-[990px] mx-auto flex flex-row">
      <img :src="blok.image" alt="" />
      <div>
        <h3 class="mt-[90px] text-4xl text-white font-bold leading-[45px]">
          {{ blok.title }}
        </h3>
        <p class="text-slate-400 leading-normal">{{ blok.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
