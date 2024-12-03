<template>
  <div
    v-show="cartItems.length > 0"
    class="fixed right-0 top-0 w-80 bg-[#0B0A2A] shadow-lg p-4 z-10 border-l border-b border-[#45445D]"
  >
    <div class="flex flex-row justify-between items-baseline">
      <h2 class="text-xl font-bold mb-4">Кошик</h2>
      <button class="text-white" @click="closeCart">✖</button>
    </div>

    <div v-if="cartItems.length > 0">
      <CartItem
        v-for="(item, index) in cartItems"
        :key="index"
        :item="item"
        @remove="removeFromCart(index)"
      />
      <div class="mt-4">
        <p class="font-semibold mb-4">Сума: {{ totalPrice }}$</p>
        <div class="flex flex-col">
          <span class="font-bold text-center">Онлайн карткою</span>
          <PaymentButton
            class="mt-2 bg-gradient-to-r from-[#361B6C] to-[#25196B] text-white p-2 rounded"
            :productName="cartItems[0].name"
            :productPrice="totalPrice"
          >
            Оплата Онлайн
          </PaymentButton>
          <img
            src="@/assets/images/pdf/2-raw.png"
            alt=""
            class="bg-white border rounded-xl mt-12 mb-2"
          />
          <span class="font-bold text-center">Покупка частинами monobank<br> БЕЗ ПЕРЕПЛАТ</span>
          <span>Опис продукту</span>
          <ul class="list-decimal ml-4">
            <li>Наявність кредитної картки від Монобанку</li>
            <li>Доступний кредитний ліміт за сервісом "Покупка частинами"</li>
            <li>Перший платіж буде списаний у день оформлення</li>
          </ul>
          <button
            class="mt-2 bg-gradient-to-r from-[#361B6C] to-[#25196B] text-white p-2 rounded"
            @click="showPaymentModal = true"
          >
            Покупка Частинами
          </button>
        </div>
      </div>
    </div>
    <PaymentModal
      v-if="showPaymentModal"
      @close="handleCloseCart"
      :item="cartItems"
    />
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
import PaymentModal from './PaymentModal.vue'

export default {
  components: { CartItem, PaymentModal },
  data() {
    return {
      cartItems: [],
      showCart: false, 
      showPaymentModal: false,
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    },
  },
  methods: {
    addToCart(item) {
      console.log('Adding to cart:', item) // Отладочный вывод
      this.cartItems.push(item) // Добавляем элемент в массив
      document.body.style.overflow = 'hidden'
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1) // Удаляем элемент по индексу
      document.body.style.overflow = ''
    },
    closeCart() {
      this.cartItems = [] // Очищаем корзину или используйте другой метод для скрытия
      this.showCart = false
      this.showPaymentModal = false
      document.body.style.overflow = ''
    },
    handleCloseCart() {
      this.cartItems = [] // Очищаем содержимое корзины
      this.showPaymentModal = false // Закрываем модальное окно
      this.showCart = false
      document.body.style.overflow = '' // Восстанавливаем прокрутку
    },
    isOpen(value) {
      this.showCart = value
    }
  },
}
</script>

<style scoped>
.fixed {
  transition: transform 0.3s ease;
}
</style>
