import { useRuntimeConfig } from '#imports'
import crypto from 'crypto'

export async function confirmOrder(orderId: any) {
  const config = useRuntimeConfig()

  const requestBody = { order_id: orderId }

  function generateSignature(SIGN_KEY: any, body: { order_id: any }) {
    const hash = crypto
      .createHmac('sha256', SIGN_KEY)
      .update(JSON.stringify(body))
      .digest('base64')
    return hash
  }

  const signature = generateSignature(config.private.SIGN_KEY, requestBody)

  try {
    const response = await $fetch(config.public.MONOBANK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'store-id': config.private.STORE_ID,
        signature: signature,
      },
      body: JSON.stringify(requestBody),
    })

    console.log('Order confirmed:', response)
    return response
  } catch (error) {
    console.error('Error confirming order:', error)
    throw error
  }
}
