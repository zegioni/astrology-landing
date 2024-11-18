<template>
  <button @click="createInvoice">Онлайн оплата</button>
</template>

<script setup lang="ts">
import { useCookies } from '@vueuse/integrations/useCookies'

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

const createInvoice = async () => {
  try {
    const response = await fetch('/api/create-invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: props.productPrice * 100, // Укажите сумму счета в копейках
        ccy: 840, // Код валюты (980 - гривна)
        merchantPaymInfo: {
          reference: `order-${Math.floor(Math.random() * 1000000)}`,
          destination: props.productName,
        },
        redirectUrl: 'https://neo18.com.ua?check-pay=true', // Замените на ваш URL для перенаправления
      })
    })

    const result = await response.json()
    if (!result.invoiceId || !result.pageUrl) {
      throw new Error('Invalid response from API')
    }

    const cookies = useCookies()
    cookies.set('invoiceId', result.invoiceId)

    window.location.href = result.pageUrl
  } catch (error) {
    console.error('Ошибка при создании счета:', error)
  }
}
</script>