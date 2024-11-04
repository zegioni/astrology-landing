import HmacMD5 from 'crypto-js/hmac-md5'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  console.log('SECRET_KEY:', config.private.SECRET_KEY) // Временный лог для проверки
  const body = await readBody(event)

  const {
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    productName,
    productPrice,
    productCount,
  } = body

  const signString = [
    merchantAccount,
    merchantDomainName,
    orderReference,
    orderDate,
    amount,
    currency,
    ...productName,
    ...productCount,
    ...productPrice,
  ].join(';')

  console.log('Sign string:', signString)

  try {
    const signature = HmacMD5(signString, config.private.SECRET_KEY).toString()
    console.log('Generated signature:', signature)
    return { signature }
  } catch (error) {
    console.error('Error generating signature:', error)
    throw error
  }
})
