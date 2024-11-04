<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[25px]"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, defineProps, defineEmits } from 'vue'
import { useRuntimeConfig } from '#imports'

const { MERCHANT_ACCOUNT } = useRuntimeConfig().public
const { MERCHANT_DOMAIN_NAME } = useRuntimeConfig().public

declare global {
  interface Window {
    Wayforpay: any
  }
}

interface WayforpayResponse {
  merchantAccount: string
  orderReference: string
  merchantSignature: string
  amount: number
  currency: string
  authCode: string
  email: string
  phone: string
  createdDate: number
  processingDate: number
  cardPan: string
  cardType: string
  issuerBankCountry: string
  issuerBankName: string
  recToken: string
  transactionStatus: string
  reason: string
  reasonCode: string
  fee: number
  paymentSystem: string
}

const props = defineProps({
  packageName: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['close'])

onMounted(() => {
  document.body.classList.add('overflow-hidden')

  const script = document.createElement('script')
  script.id = 'widget-wfp-script'
  script.src = 'https://secure.wayforpay.com/server/pay-widget.js'
  script.type = 'text/javascript'
  script.async = true

  script.onload = async () => {
    console.log('Wayforpay script loaded')

    const merchantAccount = MERCHANT_ACCOUNT
    const merchantDomainName = MERCHANT_DOMAIN_NAME
    const randomDigits = Math.floor(100000 + Math.random() * 900000).toString()

    const orderReference = `NEO${randomDigits}`
    const orderDate = Math.floor(Date.now() / 1000).toString()
    const amount = props.amount
    const currency = 'UAH'
    const productName = [props.packageName]
    const productPrice = [props.amount]
    const productCount = ['1']

    try {
      const response = await $fetch('/api/generateSignature', {
        method: 'POST',
        body: {
          merchantAccount,
          merchantDomainName,
          orderReference,
          orderDate,
          amount,
          currency,
          productName,
          productPrice,
          productCount,
        },
      })

      const merchantSignature = response.signature

      const wayforpay = new window.Wayforpay()
      wayforpay.run(
        {
          merchantAccount: merchantAccount,
          merchantDomainName: merchantDomainName,
          authorizationType: 'SimpleSignature',
          merchantSignature: merchantSignature,
          orderReference: orderReference,
          orderDate: orderDate,
          amount: amount,
          currency: currency,
          productName: productName[0],
          productPrice: productPrice[0],
          productCount: productCount[0],
          clientFirstName: '',
          clientLastName: '',
          clientEmail: '',
          clientPhone: '',
          language: 'UA',
          straightWidget: true,
        },
        function (response: WayforpayResponse) {
          window.postMessage('WfpWidgetEventApproved', '*')
        },
        function (response: WayforpayResponse) {
          window.postMessage('WfpWidgetEventDeclined', '*')
        },
        function (response: WayforpayResponse) {
          window.postMessage('WfpWidgetEventPending', '*')
        },
      )
    } catch (error) {
      console.error('Error fetching signature:', error)
    }
  }

  document.body.appendChild(script)
  window.addEventListener('message', handlePaymentEvents)
})

const closeModal = () => {
  document.body.classList.remove('overflow-hidden')
  emit('close')
}

const handlePaymentEvents = (event: any) => {
  const response: WayforpayResponse = event.data
  switch (event.data) {
    case 'WfpWidgetEventApproved':
      console.log('Оплата пройшла успішно!', response)
      break
    case 'WfpWidgetEventDeclined':
      console.log('Оплата отклонена!', response)
      break
    case 'WfpWidgetEventPending':
      console.log('Оплата в процессе обработки.', response)
      break
    case 'WfpWidgetEventClose':
      closeModal()
      break
    default:
      break
  }
}

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden')
  window.removeEventListener('message', handlePaymentEvents)
})
</script>

<style scoped>
.fixed {
  position: fixed;
}
.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.modal-content {
  width: 600px;
  height: 600px;
  padding: 1.5rem;
  position: relative;
  z-index: 1000;
  background: white;
  border-radius: 24px;
  color: black;
}
.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (min-width: 480px) {
  .wfp-widget-frame.secure {
    width: 480px;
    padding: 20px;
    left: 50%;
    top: 50%;
    margin-left: -240px;
    margin-top: -350px;
    max-height: 618px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    background-color: #fafafa;
  }
}
</style>
