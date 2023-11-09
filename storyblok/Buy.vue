<template>
  <div
    class="relative flex-col justify-start items-center gap-4 flex mt-10 h-[824px]"
  >
    <img
      src="~/assets/img/bg-gradient-img-2.webp"
      class="absolute -top-[780px] right-0 -z-10 select-none"
      alt=""
    />
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
    <img :src="blok.image" class="mt-5" alt="" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
