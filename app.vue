<template>
  <NuxtLayout>
    <Header />
    <Container>
      <NuxtPage />
    </Container>
    <Footer />
  </NuxtLayout>
</template>

<script setup>
import Header from "@/components/header.vue"
import Footer from "@/components/footer.vue"
import Container from "@/components/container.vue"
</script>