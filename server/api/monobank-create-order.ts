import crypto from 'crypto'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event) // Отримуємо дані з форми

  const requestBody = {
    store_order_id: body.store_order_id, //Унікальний ідентифікатор транзакції на боці магазину. Потрібен для відсікання дублікатів
    client_phone: body.client_phone,
    total_sum: body.total_sum, //Загальна сума заявки. Розділювач – точка. Має бути 2 знаки після точки
    invoice: body.invoice,
    available_programs: body.available_programs, //Можливі варіанти розстрочки
    products: body.products, //Список продуктів, вибраних для оплати частинами
    result_callback: body.result_callback, //Адреса сервісу, куди буде надіслано відповідь під час отримання заявкою кінцевого стану. Формат запиту буде аналогічним відповіді сервісу перевірки станів
  }

  function generateSignature(SIGN_KEY: any, requestBody: any) {
    const hash = crypto
      .createHmac('sha256', SIGN_KEY)
      .update(JSON.stringify(requestBody))
      .digest('base64')
    return hash
  }

  const signature = generateSignature(config.private.SIGN_KEY, requestBody)

  try {
    const response = await $fetch(
      `${config.public.MONOBANK_API_URL}/api/order/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'store-id': config.private.STORE_ID,
          signature: signature,
        },
        body: JSON.stringify(requestBody),
      },
    )
    console.log('Response from Monobank:', response)

    return response
  } catch (error) {
    return error
  }
})
