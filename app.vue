<template>
  <NuxtLayout>
    <NuxtPage class="z-10 relative"/>
    <Footer class="z-10 relative" />
  </NuxtLayout>
</template>

<script setup>
import Footer from '@/components/footer.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-optical-sizing: auto;
  font-weight: 400;
  color: white;
  background-color: black;
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
  opacity: 0.5;
  z-index: 0;
}
</style>
