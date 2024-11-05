<template>
  <div :class="['toast', type]" v-if="visible">
    <strong>{{ title }}</strong>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'info',
  },
  duration: {
    type: Number,
    default: 3000,
  },
})

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

<style scoped>
.toast {
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-top: 16px;
  color: #fff;
  font-family: Arial, sans-serif;
  position: fixed;
  right: 20px;
  z-index: 1000;
}

.toast.info {
  background-color: #2196f3;
}

.toast.success {
  background-color: #4caf50;
}

.toast.error {
  background-color: #f44336;
}
</style>