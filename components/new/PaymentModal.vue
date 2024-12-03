<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-[50%] backdrop-blur-[4px] border-[1px] border-[#ffffff42] flex items-center justify-center z-20 pr-6 pl-6"
  >
    <div
      class="bg-[#0B0A2A] p-6 rounded shadow-lg max-w-[350px]"
      v-if="!sendEmail"
    >
      <h2 class="text-xl mb-4">Оплата за {{ item[0].name }}</h2>
      <p>Ціна: {{ item[0].price }}$</p>
      <div class="mt-4 flex flex-col">
        <label class="mb-4">
          Ім'я:
          <input
            v-model="firstName"
            type="text"
            class="border p-1 w-full text-black"
          />
          <span v-if="!isFirstNameValid" class="text-red-500"
            >Ім'я обов'язкове</span
          >
        </label>
        <label class="mb-4">
          Призвіще:
          <input
            v-model="lastName"
            type="text"
            class="border p-1 w-full text-black"
          />
        </label>
        <label class="mb-4">
          Номер телефону:
          <input
            v-model="phone"
            type="text"
            class="border p-1 w-full text-black"
          />
          <span v-if="!isPhoneValid" class="text-red-500"
            >Неправильний номер телефону. Формат: +380XXXXXXXXX</span
          >
        </label>
        <label class="mb-4">
          <p>Оберіть кількість платежів:</p>
          <div class="grid grid-cols-4 gap-4">
            <label>
              <input type="radio" v-model="part" :value="3" />
              3 платежі
            </label>
            <label>
              <input type="radio" v-model="part" :value="4" />
              4 платежі
            </label>
            <label>
              <input type="radio" v-model="part" :value="6" />
              6 платежів
            </label>
            <label>
              <input type="radio" v-model="part" :value="8" />
              8 платежів
            </label>
            <label>
              <input type="radio" v-model="part" :value="10" />
              10 платежів
            </label>
            <label>
              <input type="radio" v-model="part" :value="12" />
              12 платежів
            </label>
          </div>
        </label>
        <label class="mb-4">
          <input type="checkbox" v-model="callBack" /> Передзвонити
        </label>
      </div>
      <button
        class="bg-gradient-to-r from-[#361B6C] to-[#25196B] text-white p-2 rounded mr-6"
        @click="submitForm"
      >
        Відправити
      </button>
      <button
        class="bg-gradient-to-r from-[#361B6C] to-[#25196B] text-white p-2 rounded"
        @click="$emit('close')"
      >
        Відмінити
      </button>
    </div>
    <div class="bg-[#0B0A2A] p-6 rounded shadow-lg max-w-[350px]" v-else>
      Ваша Заявка відправлена.
    </div>
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
  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      part: 3,
      callBack: false,
      sendEmail: false,
    }
  },
  computed: {
    isFirstNameValid() {
      return this.firstName.trim() !== ''
    },
    isPhoneValid() {
      const phonePattern = /^\+380\d{9}$/ // Проверка на формат +380XXXXXXXXX
      return phonePattern.test(this.phone)
    },
  },
  methods: {
    async submitForm() {
      if (!this.isFirstNameValid || !this.isPhoneValid) {
        // Если данные не валидны, выходим из метода
        return
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            product: this.item[0],
            part: this.part,
            firstName: this.firstName,
            lastName: this.lastName || 'Не введено',
            phone: this.phone,
            callBack: this.callBack,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        this.sendEmail = true
        setTimeout(() => {
          this.$emit('close')
        }, 2000)
      } catch (error) {
        console.error('Помилка відправки повідомлення:', error)
        alert('Ошибка при отправке заявки. Попробуйте снова.')
      }
    },
  },
}
</script>

<style scoped>
.fixed {
  transition: transform 0.3s ease;
}
.text-red-500 {
  font-size: 0.875rem; /* Размер текста для сообщений об ошибках */
}
</style>
