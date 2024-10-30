<template>
  <NuxtLayout>
    <div class="z-10 relative">
      <NuxtPage />
    </div>
    <div class="z-10 relative">
      <Footer />
    </div>
  </NuxtLayout>
</template>

<script setup>
import Footer from '@/components/footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(async () => {
  await nextTick()
  AOS.init()
})

onUpdated(async () => {
  await nextTick()
  AOS.refresh()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
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
}
</style>
