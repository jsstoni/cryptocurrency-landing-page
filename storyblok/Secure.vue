<template>
  <div class="relative h-[600px]">
    <img
      src="./../assets/img/imglateral2.webp"
      class="absolute -top-[780px] left-0 -z-10 select-none"
      alt=""
    />
    <div class="w-[990px] mx-auto flex flex-row">
      <div>
        <h3 class="mt-[90px] text-4xl text-white font-bold leading-[45px]">
          {{ blok.title }}
        </h3>
        <p class="text-slate-400 leading-normal">{{ blok.description }}</p>
      </div>
      <img :src="blok.image" alt="" />
    </div>
    <img
      src="./../assets/img/bg-gradient-img-3.webp"
      class="absolute -top-[280px] right-0 -z-10 select-none"
      alt=""
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
