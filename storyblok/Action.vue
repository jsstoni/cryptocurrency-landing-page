<template>
  <div
    class="relative flex-col justify-start items-center gap-4 flex mt-10 h-[460px]"
  >
    <div
      class="absolute -top-[120px] right-0 -z-10 w-full h-[1045px] bg-[url(assets/img/imglateral1.webp)] bg-no-repeat bg-contain-height bg-right"
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

    <btn-action :title="blok.btn_title" :url="blok.link.url" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
