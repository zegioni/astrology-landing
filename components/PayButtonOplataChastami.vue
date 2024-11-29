<template>
  <CustomToast
    v-if="toast.visible"
    :title="toast.title"
    :message="toast.message"
    :type="toast.type"
  />
  <div class="mb-4 text-center">
    <h2 class="text-lg mb-4">Ваше Замовлення:</h2>
    <span class="font-bold"
      >{{ productName }}<br />
      за ціною ${{ productPrice }}</span
    >
  </div>
  <div class="flex flex-col z-50 items-center">
    <h2 class="text-lg mb-4 text-center">
      Введіть Ваші данні для оформлення плати частинами
      <span class="font-bold">Monobank</span>
    </h2>

    <div class="w-full">
      <div class="mb-4">
        <label for="clientPhone" class="mb-2 block text-sm font-medium"
          >Ведіть Номер телефону:</label
        >
        <div class="relative">
          <span
            class="absolute inset-y-0 left-0 flex items-center pl-3 text-black"
            >+38</span
          >
          <input
            v-model="phoneInput"
            @input="filterDigits"
            @blur="validatePhone"
            type="tel"
            id="clientPhone"
            placeholder="0XXXXXXXXX"
            inputmode="numeric"
            class="mt-1 block w-full p-2 pl-10 border border-gray-300 rounded-md text-black"
            maxlength="10"
            required
          />
        </div>
        <p v-if="phoneError" class="text-red-500 text-sm mt-1">
          {{ phoneError }}
        </p>
      </div>

      <div class="mb-4">
        <span class="mb-4 block text-sm font-medium"
          >Оберіть Кількість Платежів:</span
        >
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <label class="flex items-center">
            <input type="radio" v-model="partsCount" value="3" class="mr-2" />
            3 місяці
          </label>
          <label class="flex items-center">
            <input type="radio" v-model="partsCount" value="4" class="mr-2" />
            4 місяці
          </label>
          <label class="flex items-center">
            <input type="radio" v-model="partsCount" value="6" class="mr-2" />
            6 місяців
          </label>
          <label class="flex items-center">
            <input type="radio" v-model="partsCount" value="9" class="mr-2" />
            9 місяців
          </label>
          <label class="flex items-center">
            <input type="radio" v-model="partsCount" value="12" class="mr-2" />
            12 місяців
          </label>
        </div>
      </div>
    </div>

    <button
      @click="submitForm"
      class="mt-4 py-2 w-[215px] h-[80px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
    >
      Підтвердити заявку
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
})

const phoneInput = ref('') // Ввод телефона
const phoneError = ref('') // Ошибка телефона
const partsCount = ref('3') // По умолчанию 3 месяца

const toast = ref({
  visible: false,
  title: '',
  message: '',
  type: 'info',
})

const showToast = (title: string, message: string, type = 'info') => {
  toast.value = { visible: true, title, message, type }
  setTimeout(() => {
    toast.value.visible = false
  }, 3000)
}

async function getExchangeRate() {
  try {
    const response = await axios.get('https://api.monobank.ua/bank/currency') // Используем axios для запроса
    console.log('response :>> ', response)

    const currencyData = await response.data
    const usdToUah = currencyData.find(
      (rate: { currencyCodeA: number; currencyCodeB: number }) =>
        rate.currencyCodeA === 840 && rate.currencyCodeB === 980,
    )

    if (!usdToUah) throw new Error('Курс USD → UAH не найден')

    return usdToUah.rateSell // Используем rateSell
  } catch (error) {
    showToast(
      'Не вдалося отримати курс валют від банку',
      'Спробуйте ще раз через декілька хвилин',
      'error',
    )
    return null
  }
}

// Фильтрация ввода (только цифры)
const filterDigits = () => {
  phoneInput.value = phoneInput.value.replace(/\D/g, '')
}

const validatePhone = () => {
  if (!phoneInput.value.startsWith('0')) {
    phoneInput.value = `0${phoneInput.value}`
    phoneError.value = 'Додано 0 на початку номера'
  }
  if (!/^\d{10}$/.test(phoneInput.value)) {
    phoneError.value = 'Введіть правильний номер формату 0XXXXXXXXX'
  } else {
    phoneError.value = ''
  }
}

// Генерация уникальных значений
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9).toUpperCase()
}

// Отправка формы
async function submitForm() {
  validatePhone()
  if (phoneError.value) return

  const clientPhone = `+38${phoneInput.value}` //вернуть client_phone

  // Получаем курс и конвертируем
  const exchangeRate = await getExchangeRate()
  console.log('exchangeRate :>> ', exchangeRate)
  if (!exchangeRate) return // Прерываем выполнение при ошибке

  const priceInUAH = (props.productPrice * exchangeRate).toFixed(2) // Конвертация в гривны

  const formData = {
    store_order_id: generateUniqueId(),
    client_phone: '+380509098760',
    total_sum: 100,
    invoice: {
      date: new Date().toISOString().split('T')[0],
      number: generateUniqueId(),
      source: 'INTERNET',
    },
    available_programs: [
      {
        available_parts_count: [10], //вернуть partsCount
        type: 'payment_installments',
      },
    ],
    products: [
      {
        name: props.productName,
        count: 1,
        sum: 100,
      },
    ],
    result_callback: 'https://neo18.com.ua/api/callback',
  }

  try {
    const response = await fetch('/api/monobank-create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) throw new Error('Network response was not ok')

    showToast('Заявка успішно надіслана!', 'Очікуйте на деталі.', 'success')
  } catch (error) {
    showToast('Помилка створення заявки.', 'Спробуйте ще раз', 'error')
  }
}
</script>

<style scoped></style>
