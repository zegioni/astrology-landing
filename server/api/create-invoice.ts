import { defineEventHandler, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const response = await $fetch(
    'https://api.monobank.ua/api/merchant/invoice/create',
    {
      method: 'POST',
      headers: {
        'X-Token': config.private.MONOBANK_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: body.amount,
        ccy: 980, // Код валюты (980 - гривна)
        merchantPaymInfo: {
          reference: body.reference,
          destination: body.destination,
        },
        redirectUrl: body.redirectUrl, // URL для перенаправления после оплаты
      }),
    },
  )

  if (!response.invoiceId || !response.pageUrl) {
    throw new Error('Invalid response from Monobank API')
  }

  return response
})
