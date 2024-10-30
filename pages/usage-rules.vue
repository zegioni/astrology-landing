<template>
  <section class="py-16 relative">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14 flex flex-col items-center"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">
          ПРАВИЛА КОРИСТУВАННЯ ІНФОРМАЦІЙНИМИ ПОСЛУГАМИ
        </h2>
        <NuxtLink :to="{ path: '/' }">
          <button
            class="mt-14 w-[220px] font-[400] text-[#252525] text-[16px] mx-auto max-w-[100%] py-6 px-6 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-[30px]"
          >
            НАЗАД
          </button>
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center">
        <div
          data-aos="fade-up"
          class="max-w-full bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white p-6 rounded-lg"
        >
          TEXT
        </div>
      </div>
    </div>
  </section>
</template>
