<template>
  <div
    class="relative flex-col justify-start items-center gap-4 flex mt-10 h-[300px]"
  >
    <img
      src="~/assets/img/circles.webp"
      class="absolute -top-[180px] left-0 -z-10 select-none"
      alt=""
    />
    <h1
      class="w-[740px] text-center text-white text-[45px] font-black leading-[50.50px]"
    >
      Receive transmissions
    </h1>
    <p
      class="w-[580px] text-center text-slate-400 text-base font-normal leading-normal"
    >
      Unsubscribe at any time. <a href="#">Privacy policy ↗</a>
    </p>
    <email-address />
  </div>
</template>

<script setup></script>
