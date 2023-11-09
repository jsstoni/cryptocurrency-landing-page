<template>
  <div
    class="relative flex-col justify-start items-center gap-4 flex mt-10 h-[400px]"
  >
    <div
      class="absolute -top-[180px] left-0 -z-10 w-full h-[937px] bg-[url(assets/img/circles.webp)] bg-no-repeat bg-contain-height bg-center"
    ></div>
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
