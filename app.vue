<template>
  <!-- <transition name="fade">
    <div v-if="loading" class="loading-screen">
      <ClientOnly>
        <PlanetAnimation />
      </ClientOnly>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="!loading" class="fade-in-layout">
      <NuxtLayout>
        <div class="z-20 relative">
          <NuxtPage />
        </div>
        <div class="z-10 relative">
          <Footer />
        </div>
      </NuxtLayout>
    </div>
  </transition> -->
  <div class="bg-color wrapper">
    <NuxtLayout>
      <div class="z-20 relative">
        <NuxtPage />
      </div>
      <div class="z-10 relative">
        <Footer />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
// import Footer from '@/components/footer.vue'
// import PlanetAnimation from '@/components/planetAnimation.vue'
// import background from '@/assets/images/background.jpg'
// import heroImage from '@/assets/images/hero-image.png'
// import mastercard from '@/assets/images/mastercard.svg'
// import visa from '@/assets/images/visa.svg'
// import backgroundHeroSection from '@/assets/images/background-hero-section.png'
// import astrologyGirl from '@/assets/images/memoji-astrology-girl-make-natal-map.png'
// import astrologyWheel from '@/assets/images/memoji-astrology-wheel.png'
// import man from '@/assets/images/memoji-man.png'
// import moon from '@/assets/images/memoji-moon.png'
// import spiritual from '@/assets/images/memoji-spiritual.png'
// import mysticalMoon from '@/assets/images/memoji-mystical-moon.png'
// import pinkCheckbox from '@/assets/images/pink-checkbox-64.png'
// import standardPrice from '@/assets/images/standard-price.png'
// import vipPrice from '@/assets/images/vip-price.png'

// const loading = ref(true)

// const setThemeColor = (color) => {
//   const metaThemeColor = document.querySelector('meta[name="theme-color"]');
//   if (metaThemeColor) {
//     metaThemeColor.setAttribute('content', color);
//   }
// };

// const imagesToLoad = [
//   background,
//   heroImage,
//   mastercard,
//   visa,
//   backgroundHeroSection,
//   astrologyGirl,
//   astrologyWheel,
//   man,
//   moon,
//   spiritual,
//   mysticalMoon,
//   pinkCheckbox,
//   standardPrice,
//   vipPrice,
// ];

// const preloadImages = () => {
//   return Promise.all(
//     imagesToLoad.map((src) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = resolve; // Разрешить, когда изображение загружено
//       });
//     })
//   );
// };

// onMounted(async () => {
//   setTimeout(() => {
//     setThemeColor('rgba(92, 38, 76)');
//     loading.value = false
//   }, 2499)
// })

// onUpdated(async () => {
//   setTimeout(() => {
//     loading.value = false
//   }, 2499)
// })
</script>

<style>
body {
  color: white;
  font-weight: 300;
  background-color: #0b0b2c;
}
/*@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-optical-sizing: auto;
  font-weight: 400;
  color: white;
  background: linear-gradient(
    177deg,
    rgba(255, 0, 181, 1) 0%,
    rgba(173, 66, 222, 1) 55%
  );
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/background.jpg');
  backdrop-filter: blur(10px);
  background-size: contain;
  opacity: 0.6;
  z-index: 0;
  transition: opacity 1s ease;
}

.loading-screen {
  position: fixed;
  height: 100vh;
  z-index: 10000;
  opacity: 1;
  -webkit-overflow-scrolling: touch;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-in-layout {
  opacity: 1;
  transition: opacity 1s ease;
}*/

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
