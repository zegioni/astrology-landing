<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let animationFrameId = null

onMounted(() => {
  const ctx = canvas.value.getContext('2d')
  ctx.font = 'Source Code Pro'

  let timer = 0
  const radius = 220 // Увеличенный радиус
  const nbLetters = 12
  const numParts = 275
  const tabParts = []

  // Функция для получения символа и его цвета
  function catchSymbol(rawValue) {
    const letter = { Model: 'N', Color: '#fff' }
    switch (rawValue) {
      case 0:
        letter.Model = 'N'
        letter.Color = '#fff'
        break
      case 1:
        letter.Model = 'E'
        letter.Color = '#fff'
        break
      case 2:
        letter.Model = 'O'
        letter.Color = '#fff'
        break
      case 3:
        letter.Model = '1'
        letter.Color = '#fff'
        break
      case 4:
        letter.Model = '8'
        letter.Color = '#fff'
        break
      case 5:
        letter.Model = '.'
        letter.Color = '#fff'
        break
      case 6:
        letter.Model = 'C'
        letter.Color = '#fff'
        break
      case 7:
        letter.Model = 'O'
        letter.Color = '#fff'
        break
      case 8:
        letter.Model = 'M'
        letter.Color = '#fff'
        break
      case 9:
        letter.Model = '.'
        letter.Color = '#fff'
        break
      case 10:
        letter.Model = 'U'
        letter.Color = '#fff'
        break
      case 11:
        letter.Model = 'A'
        letter.Color = '#fff'
        break
    }
    return letter
  }

  // Класс для создания частиц
  function particles() {
    this.x = 0
    this.y = 0
    this.r = Math.random() * radius
    this.v = Math.random()
    this.color = 'rgba(255, 255, 255, 1)'
  }

  // Создание массива частиц
  for (let i = 0; i < numParts; i++) {
    tabParts.push(new particles())
  }

  // Функция для рисования на холсте
  function draw() {
    const w = canvas.value.width
    const h = canvas.value.height

    // Создание радиального градиента для фона
    const grd = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) / 2)
    grd.addColorStop(0.01, 'rgba(255,134,219,1)')
    grd.addColorStop(0.4, 'rgba(113,31,115,1)')
    grd.addColorStop(1, 'rgba(25,25,52,1)')

    ctx.save()
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, w, h)

    // Рисование центрального квадрата
    ctx.beginPath()
    ctx.fillStyle = grd
    ctx.fillRect(210, 210, 230, 230)
    ctx.closePath()

    // Рисование символов по кругу
    for (let i = 0; i < nbLetters; i++) {
      ctx.beginPath()
      ctx.closePath()
      ctx.font = '22px Arial'
      ctx.fillStyle = catchSymbol(i).Color
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        catchSymbol(i).Model,
        w / 2 + Math.cos(i * (Math.PI * 2) / nbLetters + timer) * (radius - 45),
        h / 2 + Math.sin(i * (Math.PI * 2) / nbLetters + timer) * (radius - 45)
      )
      ctx.closePath()

      ctx.beginPath()
      ctx.strokeStyle = catchSymbol(i).Color

      ctx.moveTo(
        w / 2 + Math.cos(i * (Math.PI * 2) / nbLetters + timer) * radius,
        w / 2 + Math.sin(i * (Math.PI * 2) / nbLetters + timer) * radius
      )
      ctx.lineTo(
        w / 2 + Math.cos(i * (Math.PI * 2) / nbLetters + timer) * (radius + 200),
        h / 2 + Math.sin(i * (Math.PI * 2) / nbLetters + timer) * (radius + 200)
      )
      ctx.lineWidth = 0.025
      ctx.stroke()
      ctx.closePath()
    }

    // Рисование двух кругов
    for (let i = 0; i < 2; i++) {
      ctx.beginPath()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.arc(w / 2, h / 2, 195 - i * 40, 0, 2 * Math.PI, false)
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 0.055
      ctx.stroke()
      ctx.closePath()
    }

    // Рисование частиц
    for (let i = 0; i < numParts; i++) {
      ctx.beginPath()
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = tabParts[i].color
      ctx.arc(
        w / 2 + Math.cos(i + timer + tabParts[i].v) * (tabParts[i].r * 1.9),
        h / 2 + Math.sin(i + timer) * (tabParts[i].r + tabParts[i].v),
        tabParts[i].v,
        0,
        2 * Math.PI,
        true
      )
      ctx.fill()
      ctx.closePath()
    }

    timer += 1 / 250
    ctx.restore()
  }

  // Функция для запроса анимации кадра
  const requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()

  // Основной цикл анимации
  function loop() {
    draw()
    animationFrameId = requestAnimFrame(loop)
  }

  // Функция для изменения размера холста
  function resizeCanvas() {
    canvas.value.width = window.innerWidth * 1 // 100% от ширины окна
    canvas.value.height = window.innerHeight * 1 // 100% от высоты окна
    restartAnimation()
  }

  // Функция для перезапуска анимации
  function restartAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    loop()
  }

  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  loop()

  // Очистка при размонтировании компонента
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  })
})
</script>

<style scoped>
canvas {
  display: block;
  margin: 0 auto;
}
</style>