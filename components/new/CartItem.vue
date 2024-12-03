<template>
  <div class="border-b mb-4 pb-2 flex flex-row justify-between items-center">
    <div>
      <h3 class="font-semibold">{{ item.name }}</h3>
      <p>Ціна: {{ item.price }}₴</p>
    </div>
    <button @click="removeItem" class="text-red-500">Видалити</button>
    <!-- Кнопка удаления -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeItem() {
      this.$emit('remove') // Генерируем событие удаления
    },
  },
}
</script>

<style scoped>
.border-b {
  border-bottom: 1px solid #ccc;
}
</style>
