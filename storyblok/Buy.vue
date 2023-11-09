<template>
  <div
    class="relative flex-col justify-start items-center gap-4 flex mt-10 h-[924px]"
  >
    <div
      class="absolute -top-[780px] right-0 -z-10 w-full h-[1463px] bg-[url(assets/img/bg-gradient-img-2.webp)] bg-no-repeat bg-contain-height bg-right"
    ></div>
    <h1
      class="w-[740px] text-center text-white text-[45px] font-black leading-[50.50px]"
    >
      {{ blok.title }}
    </h1>
    <p
      class="w-[580px] text-center text-slate-400 text-base font-normal leading-normal"
    >
      {{ blok.description }}
    </p>
    <link-action :title="blok.btn_title" :url="blok.link.url" />
    <img :src="blok.image" class="mt-5" alt="table" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
