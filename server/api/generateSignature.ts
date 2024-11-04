import { useRuntimeConfig } from '#imports'

// Используем require для импорта crypto-js
import CryptoJS from 'crypto-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  console.log('Received body:', body)
  console.log('SECRET_KEY:', config.private.SECRET_KEY)

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
    const signature = CryptoJS.HmacMD5(
      signString,
      config.private.SECRET_KEY,
    ).toString()
    console.log('Generated signature:', signature)
    return { signature }
  } catch (error) {
    console.error('Error generating signature:', error)
    throw error
  }
})
