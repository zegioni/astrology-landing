import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Здесь вы можете обрабатывать данные формы
  const { product, firstName, part, lastName, phone, callBack } = body

  // Пример: отправка данных на почту, сохранение в базе данных и т.д.
  // Для отправки email вы можете использовать любой почтовый сервис (например, SendGrid, Nodemailer и т.д.)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true для 465, false для других портов
    auth: {
      user: 'elenaoniua@gmail.com',
      pass: 'risd johe rmak lgdu',
    },
  })

  const mailOptions = {
    from: 'elenaoniua@gmail.com',
    to: 'elenaoniua@gmail.com',
    subject: `Замовлення на оплату частинами з сайта від ${firstName}`,
    html: `
        <h3>Деталі замовлення:</h3>
        <ul>
            <li><strong>Пакет послуг:</strong> ${product.name}</li>
            <li><strong>Ціна:</strong> ${product.price}$</li>
            <li><strong>Обрана кількість платежів:</strong> ${part}</li>
            <li><strong>Ім'я:</strong> ${firstName}</li>
            <li><strong>Призвіще:</strong> ${lastName}</li>
            <li><strong>Номер телефону:</strong> ${phone}</li>
            <li><strong>Передзвонити:</strong> ${callBack ? 'Так' : 'Ні'}</li>
        </ul>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Сообщение успешно отправлено!' }
  } catch (error) {
    console.error('Ошибка отправки сообщения:', error)
    return { success: false, message: 'Ошибка отправки сообщения.' }
  }
})
