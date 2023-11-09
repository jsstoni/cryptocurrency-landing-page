<template>
  <div class="relative">
    <div class="w-[990px] mx-auto h-[890px]">
      <nav class="flex flex-row items-center py-5">
        <img src="/logo.png" alt="" />

        <ul class="ml-auto flex flex-row items-center gap-8">
          <li v-for="(link, index) in links" :key="index">
            <a href="#" class="text-white">{{ link.item }}</a>
          </li>
        </ul>

        <div class="ml-auto flex gap-3">
          <button
            class="text-white text-base leading-normal font-semibold p-2 px-4 border border-white rounded-lg justify-center items-center inline-flex"
          >
            Sign in
          </button>
          <button
            class="text-white text-base leading-normal font-semibold p-2 px-4 bg-gradient-to-bl from-cyan-400 to-purple-600 rounded-lg justify-center items-center inline-flex"
          >
            Sign up
          </button>
        </div>
      </nav>

      <div class="flex-col justify-start items-center gap-4 flex mt-10">
        <h1
          class="w-[780px] text-center text-white text-[85px] font-black leading-[110.50px]"
        >
          {{ blok.headline }}
        </h1>
        <p
          class="w-[580px] text-center text-slate-400 text-base font-normal leading-normal"
        >
          {{ blok.slogan }}
        </p>
        <btn-action title="Get Started" url="https://google.cl" />
      </div>
    </div>
    <img
      src="~/assets/img/bg-img.webp"
      class="absolute top-0 left-0 -z-10 w-full h-full select-none"
      alt=""
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const links = reactive([
  {
    item: "Buy / Sell",
  },
  {
    item: "Grow",
  },
  {
    item: "Markets",
  },
  {
    item: "Business",
  },
  {
    item: "Support",
  },
]);
</script>
