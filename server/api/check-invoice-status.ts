import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const response = await $fetch(
    `https://api.monobank.ua/api/merchant/invoice/status?invoiceId=${query.invoiceId}`,
    {
      method: 'GET',
      headers: {
        'X-Token': config.private.MONOBANK_API_KEY,
      },
    },
  )

  if (!response.invoiceId || !response.status) {
    throw new Error('Invalid response from Monobank API')
  }

  return response
})
