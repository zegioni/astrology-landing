<template>
  <footer
    class="z-10 bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white"
  >
    <div
      class="p-4 max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <!-- Contact Information -->
      <div class="mb-4 md:mb-0">
        <h3 class="text-lg font-bold">Ви можете зв'язатися зі мною</h3>
        <h3 class="text-lg font-bold mt-4">За телефоном</h3>
        <p class="hover:text-pink-300 text-left">
          <a href="tel:+380674871110">+380 67 487 11 10</a>
        </p>
        <h3 class="text-lg font-bold mt-4">За електронною поштою</h3>
        <p class="hover:text-pink-300 text-left">
          <a href="mailto:elenaoniua@gmail.com">elenaoniua@gmail.com</a>
        </p>
        <h3 class="text-lg font-bold">Надавач послуг:</h3>
        <p class="text-lg">ФОП Оніщенко Олена Олегівна ІНН 2963403027 Місце</p>
        <h3 class="text-lg font-bold">Реєстрації:</h3>
        <p class="text-lg">м.Чорноморськ , вул.Паркова 14а, кв.75</p>
      </div>

      <!-- Links -->
      <div class="mb-4 md:mb-0 text-center md:order-last">
        <h3 class="text-lg font-bold text-left">Інформація</h3>
        <ul>
          <li>
            <NuxtLink
              :to="'/oferta-documents'"
              class="block mt-2 hover:text-pink-300 text-left"
              >ПУБЛІЧНИЙ ДОГОВІР (ОФЕРТА)<br />ПРО НАДАННЯ ІНФОРМАЦІЙНИХ
              ПОСЛУГ</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="'/usage-rules'"
              class="block mt-2 hover:text-pink-300 text-left"
              >Правила користування<br />Інформаційними послугами</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="'/chat-rules'"
              class="block mt-2 hover:text-pink-300 text-left"
              >Правила для учасників чату</NuxtLink
            >
          </li>
        </ul>
      </div>

      <!-- Social -->
      <div class="mb-4 md:mb-0 text-left flex flex-col justify-between">
        <h3 class="text-lg font-bold">Я у соціальних мережах</h3>
        <ul class="text-left">
          <li>
            <a href="https://t.me/neo_astrology" class="hover:text-pink-300"
              >ДУША В ЕНЕРГІЇ</a
            >
          </li>
          <li>
            <a href="https://t.me/olenaonishchenko" class="hover:text-pink-300"
              >Чат зі мною</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/lena__onishchenko__/#"
              class="hover:text-pink-300"
              >Instagram</a
            >
          </li>
        </ul>
        <ul class="text-left flex flex-row justify-center md:justify-start">
          <li>
            <img width="100" src="@/assets/images/mastercard.svg" alt="" />
          </li>
          <li>
            <img width="100" src="@/assets/images/visa.svg" alt="" />
          </li>
          <li>
            <img
              width="40"
              src="@/assets/images/white-stroke+shadow.png"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style></style>
