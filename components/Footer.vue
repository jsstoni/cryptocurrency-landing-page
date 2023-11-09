<template>
  <footer class="relative h-[400px] overflow-hidden pt-10">
    <img
      src="./../assets/img/bg-gradient-img-4.webp"
      class="absolute top-0 left-0 -z-10 select-none"
      alt=""
    />
    <div class="w-[990px] mx-auto grid md:grid-cols-3 gap-12 text-zinc-400">
      <div>
        <img src="/logo.png" class="mb-4" />
        <p class="mb-3">
          CoinFlip, the world’s leading bitcoin ATM operator, makes it so
          flippin’ easy to buy and sell bitcoin via cash, card, or bank
          transfer.
          <br /><br />
          Sign up to get the latest in CoinFlip news, discounts, and more.
        </p>

        <email-address />

        <p class="mt-3">© 2021 GPD Holdings, LLC FinCEN MSB</p>
      </div>
      <div class="flex flex-col items-center">
        <ul class="flex flex-col gap-6">
          <li><a href="#">Company</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Merch</a></li>
        </ul>
      </div>

      <div>
        <ul class="flex flex-col gap-6">
          <li><a href="#">Privacy Policy and Terms of Service</a></li>
          <li><a href="#">CoinFlip Privacy Policy</a></li>
          <li><a href="#">CoinFlip Biometrics Privacy Policy</a></li>
          <li><a href="#">CoinFlip Financial Privacy Notice</a></li>
          <li><a href="#">CoinFlip Terms of Service</a></li>
          <li><a href="#">CoinFlip Trade Desk Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
