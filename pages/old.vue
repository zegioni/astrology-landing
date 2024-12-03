<template>
  <CustomToast
    v-if="toast.visible"
    :title="toast.title"
    :message="toast.message"
    :type="toast.type"
  />
  <section>
    <div class="bg-hero-image pb-[1px]">
      <div class="mb-5">
        <!-- <div class="max-w-[500px] mx-auto">
          <div class="flex justify-end p-4">
            <h2
              class="bg-black bg-opacity-[32%] backdrop-blur-[25px] p-5 border-2 border-[#ffffff42] rounded-[8px] text-primary font-bold text-[32px]"
            >
              СТАРТ 10.11
            </h2>
          </div>
        </div> -->
        <div class="flex flex-col items-center">
          <div class="container-2xl mx-auto pl-3 pr-3 mt-11">
            <div class="relative">
              <img
                class="hero-image mx-auto max-w-[100%]"
                width="800"
                src="@/assets/images/hero-image.png"
                alt=""
              />
              <div
                class="absolute h-auto w-full left-1/2 transform -translate-x-1/2 -bottom-[120px]"
              >
                <div
                  class="max-w-[600px] mx-auto bg-black bg-opacity-[32%] backdrop-blur-[25px] p-5 rounded-[10px] border-2 border-[#80808045]"
                >
                  <div class="text-left">
                    <h2 class="text-white text-[22px]">
                      <span class="font-[200]">Продажі на максимум:</span>
                      <br />
                      <span class="text-primary font-bold text-[32px]">
                        ЗАПУСКАЙ, ЗАРОБЛЯЙ, МАСШТАБУЙСЯ
                      </span>
                      <br />
                      <span class="font-[200]">ОЛЕНА ОНІЩЕНКО</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-[150px]" style="z-index: 1">
            <NuxtLink :to="{ path: '/', hash: '#price' }">
              <button
                class="font-[400] text-[#252525] text-[22px] mx-auto w-[220px] py-6 px-6 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-[30px]"
              >
                ХОЧУ
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 relative">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">ДЛЯ КОГО?</h2>
      </div>

      <div
        class="w-fit mx-auto grid grid-cols-2 md:grid-cols-3 justify-items-center mt-8 gap-[20px]"
      >
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-white text-white bg-opacity-[15%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-astrology-girl-make-natal-map.png"
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">Хто сумнівається у своїх силах</p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-astrology-wheel.png"
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">
            Хто вважає, що продажі — це не для них
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-man.png"
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">
            Хто не знає, з чого почати запуск або продажі
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-moon.png"
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">
            Хто хоче збільшити дохід, але не знає як
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-spiritual.png"
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">
            Хто втомився працювати без системи
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-mystical-moon.png "
            alt=""
            loading="lazy"
          />
          <h3 class="text-primary text-[18px] font-[800]">Для тих</h3>
          <p class="text-white text-[16px]">
            Хто хоче змінити мислення та вийти на новий рівень
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 relative">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">ФОРМАТ:</h2>
      </div>
      <div class="flex items-center justify-center">
        <div
          data-aos="fade-up"
          class="max-w-[300px] bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white p-6 rounded-lg"
        >
          <div class="flex flex-row gap-4 relative">
            <div
              class="absolute w-[5px] rounded-full bg-[red] h-[90%] left-[2.1%] top-[0%] bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F]"
            ></div>

            <ul class="text-[22px]">
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  <span class="text-primary font-bold">10 днів </span>
                  інтенсивної роботи.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  <span class="text-primary font-bold"
                    >5 освітніх вебінарів
                  </span>
                  із практичними кейсами та техніками.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  3 групові
                  <span class="text-primary font-bold">практичні сесії</span>
                  для розбору особистих помилок.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Чат підтримки
                  <span class="text-primary font-bold">та нетворкінгу</span> з
                  учасниками.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Авторські
                  <span class="text-primary font-bold">медитації</span>
                  для роботи з мисленням і фінансовими блоками.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Використання
                  <span class="text-primary font-bold">реальних </span>
                  кейсів.
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Чіткий план дій
                  <span class="text-primary font-bold"
                    >для запусків і продажів.</span
                  >
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 relative">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">
          ЯКІ РЕЗУЛЬТАТИ ВИ ОТРИМУЄТЕ
          <br />ЗА 10 ДНІВ МАРАФОНУ?
        </h2>
      </div>
      <div class="flex items-center justify-center">
        <div
          data-aos="fade-up"
          class="max-w-[420px] bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white p-6 rounded-lg"
        >
          <div class="flex flex-row gap-4 relative">
            <ul class="text-[22px] text-white">
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Позбавлення
                  <span class="text-primary font-bold">від блоків</span>
                  і сумнівів у продажах.
                </h3>
              </li>
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Готовий алгоритм
                  <span class="text-primary font-bold">запуску</span> для
                  масштабування доходу.
                </h3>
              </li>
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Навичка
                  <span class="text-primary font-bold"> легкого </span>
                  спілкування з клієнтами та закриття угод.
                </h3>
              </li>
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Практичне
                  <span class="text-primary font-bold">
                    збільшення прибутку
                  </span>
                  через системний підхід.
                </h3>
              </li>
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Нове коло
                  <span class="text-primary font-bold">
                    спілкування для розвитку
                  </span>
                  та підтримки.
                </h3>
              </li>
              <li
                class="mb-4 leading-8 flex flex-row gap-5 items-center"
                data-aos="fade-up"
              >
                <img
                  width="32"
                  height="32"
                  src="@/assets/images/pink-checkbox-64.png"
                  alt=""
                  loading="lazy"
                />
                <h3>
                  Опанування
                  <span class="text-primary font-bold"> унікальних </span>
                  технік
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICE -->
  <section id="price" class="py-16 relative overflow-hidden">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">ТАРИФИ:</h2>
      </div>
      <div class="w-fit mx-auto">
        <div class="flex justify-center gap-11 flex-col lg:flex-row">
          <div class="flex gap-11 flex-col md:flex-row">
            <div
              data-aos="fade-right"
              class="relative max-w-[320px] bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white p-6 rounded-lg"
            >
              <div class="flex flex-col justify-between h-full">
                <h2 class="text-2xl font-bold mb-4 text-left text-[32px]">
                  Стандарт
                </h2>
                <ul class="list-decimal list-inside mb-4 text-[18px] flex-1">
                  <li>5 вебінарів.</li>
                  <li>3 групові практики з фідбеком.</li>
                  <li>Чат підтримки та нетворкінгу.</li>
                  <li>3 авторські медитації.</li>
                  <li>Доступ до записів усіх занять.</li>
                  <li>Можливість виграти приз 7 000 гривень.</li>
                </ul>
                <div class="text-center flex flex-col mt-12">
                  <span class="text-2xl font-bold line-through">400$</span>
                  <span class="text-4xl font-bold">199$</span>
                </div>
                <div class="flex flex-col justify-center items-center mt-12">
                  <PaymentButton
                    class="mb-4 w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                    :productName="'Пакет послуг STANDARD'"
                    :productPrice="199"
                  />
                  <button
                    class="w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                    @click="openModal('Пакет послуг STANDARD', 199)"
                  >
                    Оплата частинами
                  </button>
                </div>
              </div>
              <div
                class="absolute top-[-6%] right-[-19%] z-10 p-2 hue-rotate-custom"
              >
                <span class="">
                  <img
                    width="128"
                    src="@/assets/images/standard-price.png"
                    alt=""
                    loading="lazy"
                  />
                </span>
              </div>
              <div
                class="absolute top-[50%] right-[-19%] z-50 p-2 rotate-[13deg] hue-rotate-custom"
              >
                <span class="">
                  <img
                    width="128"
                    src="@/assets/images/white-stroke+shadow.png"
                    alt=""
                    loading="lazy"
                  />
                </span>
              </div>
            </div>

            <div
              data-aos="fade-right"
              class="relative max-w-[320px] bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] p-6 rounded-lg text-white"
            >
              <div class="flex flex-col justify-between h-full">
                <h2 class="text-2xl font-bold mb-4 text-left text-[32px]">
                  VIP
                </h2>
                <ul class="list-decimal list-inside mb-4 text-[18px] flex-1">
                  <li>5 вебінарів.</li>
                  <li>3 групові практики з фідбеком.</li>
                  <li>Чат підтримки та нетворкінгу.</li>
                  <li>3 авторські медитації.</li>
                  <li>Доступ до записів усіх занять.</li>
                  <li>Можливість виграти приз 7 000 гривень.</li>
                  <li>Особистий чат із вами протягом марафону.</li>
                  <li>Індивідуальний розбір 3 кейсів.</li>
                  <li>Додаткова медитація «Гроші».</li>
                </ul>
                <div class="text-center flex flex-col mt-12">
                  <span class="text-2xl font-bold line-through">900$</span>
                  <span class="text-4xl font-bold">700$</span>
                </div>
                <div class="flex flex-col justify-center items-center mt-12">
                  <PaymentButton
                    class="mb-4 w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                    style="gap: 10px"
                    :productName="'Пакет послуг VIP'"
                    :productPrice="700"
                  />
                  <button
                    class="w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                    @click="openModal('Пакет послуг VIP', 700)"
                  >
                    Оплата частинами
                  </button>
                </div>
              </div>
              <div
                class="absolute top-[-8%] right-[-19%] z-10 p-2 rotate-[13deg] hue-rotate-custom"
              >
                <span class="">
                  <img
                    width="128"
                    src="@/assets/images/vip-price.png"
                    alt=""
                    loading="lazy"
                  />
                </span>
              </div>
              <div
                class="absolute top-[50%] right-[-19%] z-10 p-2 rotate-[13deg] hue-rotate-custom"
              >
                <span class="">
                  <img
                    width="128"
                    src="@/assets/images/white-stroke+shadow.png"
                    alt=""
                    loading="lazy"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Модальное окно -->
  <div
    v-if="isModalOpen"
    class="modal bg-[#4b4b4b52] bg-opacity-[90%] backdrop-blur-[15px] border-[1px] border-[#ffffff42] p-6 rounded-lg text-white"
  >
    <div
      class="modal-content bg-[#4b4b4b52] border-[1px] border-[#ffffff42] p-6 rounded-lg text-white relative text-white"
    >
      <button class="absolute top-2 right-2 text-gray-600" @click="closeModal">
        ✖
      </button>
      <!-- Компонента оплаты частями -->
      <PayButtonOplataChastami
        :productName="modalData.productName"
        :productPrice="modalData.productPrice"
      />
    </div>
  </div>

  <section class="py-16 relative">
    <div class="container-xl mx-auto px-4">
      <div
        class="text-[32px] sm:text-[48px] font-bold mx-auto w-fit mb-14"
        data-aos="fade-up"
      >
        <h2 class="grad gradient-text text-center leading-none">ВІДГУКИ</h2>
      </div>
      <Carousel v-bind="config">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel__item">
            <img :src="image" alt="Image" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import PaymentButton from '@/components/paymentButton.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import img1 from '@/assets/images/vidguk/photo_1_2024-11-12_10-45-42.jpg'
import img2 from '@/assets/images/vidguk/photo_2_2024-11-12_10-45-42.jpg'
import img3 from '@/assets/images/vidguk/photo_3_2024-11-12_10-45-42.jpg'
import img4 from '@/assets/images/vidguk/photo_4_2024-11-12_10-45-42.jpg'
import img5 from '@/assets/images/vidguk/photo_5_2024-11-12_10-45-42.jpg'
import img6 from '@/assets/images/vidguk/photo_6_2024-11-12_10-45-42.jpg'
import img7 from '@/assets/images/vidguk/photo_7_2024-11-12_10-45-42.jpg'
import img8 from '@/assets/images/vidguk/photo_8_2024-11-12_10-45-42.jpg'
import img9 from '@/assets/images/vidguk/photo_9_2024-11-12_10-45-42.jpg'
import img10 from '@/assets/images/vidguk/photo_10_2024-11-12_10-45-42.jpg'
import PayButtonOplataChastami from '~/components/PayButtonOplataChastami.vue'

const isModalOpen = ref(false)
const modalData = ref({
  productName: '',
  productPrice: 0,
})

// Открытие модального окна с передачей данных
const openModal = (productName, productPrice) => {
  modalData.value = { productName, productPrice }
  isModalOpen.value = true
  document.body.classList.add('no-scroll')
}

// Закрытие модального окна
const closeModal = () => {
  isModalOpen.value = false
  modalData.value = { productName: '', productPrice: 0 }
  document.body.classList.remove('no-scroll')
}

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const config = {
  itemsToShow: 1,
  wrapAround: true,
  transition: 300,
  mouseDrag: true,
  touchDrag: true,
  snapAlign: 'center',
  breakpointMode: 'viewport',
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1.2,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 1.2,
      snapAlign: 'center',
    },
    // 500px and up
    500: {
      itemsToShow: 1.2,
      snapAlign: 'center',
    },
  },
}

const route = useRoute()
const router = useRouter()
const cookies = useCookies()

const toast = ref({
  visible: false,
  title: '',
  message: '',
  type: 'info',
})

const showToast = (title, message, type = 'info') => {
  toast.value = { visible: true, title, message, type }
  setTimeout(() => {
    toast.value.visible = false
  }, 3000)
}

const checkPaymentStatus = async () => {
  const invoiceId = cookies.get('invoiceId')
  if (!invoiceId) return

  try {
    const response = await $fetch('/api/check-invoice-status', {
      method: 'GET',
      query: {
        invoiceId,
      },
    })

    if (response.status === 'success') {
      showToast(
        'Оплата успішна',
        'Ваш платіж був успішно оброблений.',
        'success',
      )
    } else {
      showToast(
        'Оплата не вдалася',
        'Сталася помилка під час обробки вашого платежу.',
        'error',
      )
    }

    cookies.remove('invoiceId')
  } catch (error) {
    console.error('Ошибка при проверке статуса счета:', error)
  }
}

onMounted(() => {
  if (route.query['check-pay']) {
    checkPaymentStatus()
    router.replace({ query: null })
  }
  setTimeout(() => {
    AOS.init()
  }, 1000)
})
onUpdated(async () => {
  AOS.refreshHard()
})
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}
.modal-content {
  width: 350px;
}
body.no-scroll {
  overflow: hidden;
}
.carousel__item {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}

.bg-hero-image {
  position: relative;
}

.bg-hero-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/images/background-hero-section.png');
  background-size: cover;
  background-position-x: left;
  opacity: 0.7;
  z-index: 0;
}

.hero-image {
  content-visibility: auto;
  contain-intrinsic-size: auto 100px;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.31))
    drop-shadow(0 0 30px rgba(255, 255, 255, 0.295));
}

.gradient-text {
  background: linear-gradient(
    149deg,
    rgba(83, 83, 83, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(83, 83, 83, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-before {
  padding-left: 35px;
}

.text-before::before {
  content: '';
  width: 16px;
  height: 16px;
  background: linear-gradient(to right, #fada8f, #ffffff, #fada8f);
  border-radius: 50%;
  display: inline-block;
  z-index: 10;
  content: '';
  left: 0;
  position: absolute;
}
</style>
