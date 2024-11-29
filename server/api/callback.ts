import crypto from 'crypto'
import { useRuntimeConfig } from '#imports'
import { confirmOrder } from './order/confirm'


export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const body = await readBody(event) // Отримуємо тіло запиту
  const signature = getHeader(event, 'signature') // Отримуємо підпис із заголовка

  function verifySignature(SIGN_KEY: any, body: any, signature: string | undefined) {
    const hash = crypto
      .createHmac('sha256', SIGN_KEY)
      .update(JSON.stringify(body))
      .digest('base64')
    return hash === signature
  }

  if (!verifySignature(config.private.SIGN_KEY, body, signature)) {
    console.error('Invalid callback signature')
    return { status: 401, message: 'Unauthorized' }
  }

  console.log('Callback received:', body)

  // Обробка callback залежно від статусу заявки
  if (body.state === 'SUCCESS') {
    // Замовлення успішно завершено
    await confirmOrder(body.order_id)
    console.log('Замовлення підтверджено:', body.order_id)
    // Виконати додаткові дії (оновити базу даних тощо)
  } else if (body.state === 'FAIL') {
    console.error('Замовлення відхилено:', body.order_id)
  }

  return { status: 200, message: 'Callback processed' }
})
