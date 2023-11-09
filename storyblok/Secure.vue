<template>
  <div class="relative h-[600px]">
    <div
      class="absolute -top-[880px] left-0 -z-10 w-full h-[1450px] bg-[url(assets/img/imglateral2.webp)] bg-no-repeat bg-contain-height bg-left"
    ></div>
    <div class="w-[990px] mx-auto flex flex-row">
      <div>
        <h3 class="mt-[90px] text-4xl text-white font-bold leading-[45px]">
          {{ blok.title }}
        </h3>
        <p class="text-slate-400 leading-normal">{{ blok.description }}</p>
      </div>
      <img :src="blok.image" :alt="blok.title" />
    </div>
    <div
      class="absolute -top-[360px] right-0 -z-20 w-full h-[945px] bg-[url(assets/img/bg-gradient-img-3.webp)] bg-no-repeat bg-contain-height bg-right"
    ></div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
