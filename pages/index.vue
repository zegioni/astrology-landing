<template>
  <section>
    <div class="bg-hero-image pb-[1px]">
      <div class="mb-5">
        <div class="max-w-[500px] mx-auto">
          <div class="flex justify-end p-4">
            <h2
              class="bg-black bg-opacity-[32%] backdrop-blur-[25px] p-5 border-2 border-[#ffffff42] rounded-[8px] text-primary font-bold text-[32px]"
            >
              СТАРТ 10.11
            </h2>
          </div>
        </div>
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
                      <span class="font-[200]">МАРАФОН</span>
                      <br />
                      <span class="text-primary font-bold text-[32px]">
                        ЗЦІЛЕННЯ ДУШІ: СИЛА КАРМИ ТА ЄНЕРГІЇ
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
                class="font-[400] text-[#252525] text-[22px] mx-auto max-w-[100%] py-6 px-6 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-[30px]"
              >
                ХОЧУ НА МАРАФОН
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
        <h2 class="grad gradient-text text-center leading-none">
          ДЛЯ КОГО МАРАФОН <br />ЭНЕРГІЇ ДУШІ
        </h2>
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
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            Ви хочите знайти баланс між духовним та матеріальним
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-astrology-wheel.png"
            alt=""
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            Ви відчуваєте, що щось заважає жити повноцінно
          </p>
        </div>
        <div
          data-aos="fade-up"
          class="shadow-pink-shadow bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] rounded-lg p-3 flex flex-col justify-center items-center max-w-[250px] text-center border-[1px] border-[#ffffff42]"
        >
          <img
            class="max-w-[100%]"
            src="@/assets/images/memoji-man.png.png"
            alt=""
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            В Вашому житті повторюються проблеми в стосунках та з грошима
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
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            Ви хочете вийти з кола невдач та страхів
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
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            Ви не розумієте, чого хочете насправді в житті
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
          />
          <h3 class="text-primary text-[18px] font-[800]">Для Вас якщо</h3>
          <p class="text-white text-[16px]">
            Ви відчуваєте, що потребуєте змін, але не знаєте, з чого почати
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
        <h2 class="grad gradient-text text-center leading-none">
          ФОРМАТ МАРАФОНУ <br />ЭНЕРГІЇ ДУШІ
        </h2>
      </div>
      <div class="flex items-center justify-center">
        <div
          data-aos="fade-up"
          class="max-w-[300px] bg-[#4b4b4b52] bg-opacity-[32%] backdrop-blur-[2px] border-[1px] border-[#ffffff42] text-white p-6 rounded-lg"
        >
          <div class="flex flex-row gap-4 relative">
            <div
              class="absolute w-[5px] rounded-full bg-[red] h-[80%] left-[2.1%] top-[0%] bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F]"
            ></div>

            <ul class="text-[22px]">
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  <span class="text-primary font-bold">30 хвилин</span> в день
                  Вашого часу
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Ви слухаєте
                  <span class="text-primary font-bold">медитацію на вибір</span>
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Ви приходите на першій вебінар:
                  <span class="text-primary font-bold"
                    >«Карма і Доля: секрети душі які змінити твоє життя»
                  </span>
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Ви приходите на другий вебінар:
                  <span class="text-primary font-bold"
                    >«Відкрий прихований потенціал: як зрозуміти налаштування
                    своєї душі»</span
                  >
                </h3>
              </li>
              <li class="text-before mb-4 leading-8" data-aos="fade-right">
                <h3>
                  Ви насолоджуєтесь
                  <span class="text-primary font-bold"
                    >від змін які відбуваються</span
                  >
                  в Вашому житті
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
                />
                <h3>
                  Ви розкриєте
                  <span class="text-primary font-bold"
                    >базові налаштування</span
                  >
                  своєї душі
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
                />
                <h3>
                  Ви <span class="text-primary font-bold">звільнитеся</span> від
                  енергетичних блоків
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
                />
                <h3>
                  Ви
                  <span class="text-primary font-bold">усвідомите</span>
                  кармічні впливи на своє життя
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
                />
                <h3>
                  Ви
                  <span class="text-primary font-bold">посилите енергію</span>
                  своєї душі та життеву силу
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
                />
                <h3>
                  Ви
                  <span class="text-primary font-bold"
                    >створите чіткий план</span
                  >
                  дій для реалізації свого призначення
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
        <h2 class="grad gradient-text text-center leading-none">
          ПРОПОНУЄМО ДВА ПАКЕТИ<br />
          УЧАСТІ
        </h2>
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
                  STANDART
                </h2>
                <ul class="list-decimal list-inside mb-4 text-[18px] flex-1">
                  <li>
                    Доступ до
                    <span class="text-primary font-bold">марафону</span>
                  </li>
                  <li>
                    Доступ до
                    <span class="text-primary font-bold">п’яти медитацій</span>
                    під час марафону
                  </li>
                  <li>
                    Доступ в спільний чат
                    <span class="text-primary font-bold">зі мною</span>
                  </li>
                  <li>
                    Можливість
                    <span class="text-primary font-bold">задати питання</span>
                    та
                    <span class="text-primary font-bold">отримати</span>
                    відповідь
                  </li>
                  <li>
                    <span class="text-primary font-bold">Два</span> вебінари
                  </li>
                  <li>
                    Одна медитація (на вибір) в
                    <span class="text-primary font-bold">постійний</span> доступ
                  </li>
                </ul>
                <div class="text-center flex flex-col mt-12">
                  <span class="text-4xl font-bold text-white">701</span>
                </div>
                <div class="flex flex-col justify-center items-center mt-12">
                  <button
                    class="w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                    @click="openModal('ПАКЕТ ПОСЛУГ STANDART', '701')"
                  >
                    ОПЛАТИТИ
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
                  <li>
                    Доступ до
                    <span class="text-primary font-bold">марафону</span>
                  </li>
                  <li>
                    Доступ до
                    <span class="text-primary font-bold">п’яти медитацій</span>
                    під час марафону
                  </li>
                  <li>
                    Доступ в спільний чат
                    <span class="text-primary font-bold">зі мною</span>
                  </li>
                  <li>
                    Можливість
                    <span class="text-primary font-bold">задати питання</span>
                    та
                    <span class="text-primary font-bold">отримати</span>
                    відповідь
                  </li>
                  <li>
                    <span class="text-primary font-bold">Два</span> вебінари
                  </li>
                  <li>
                    Одна медитація (на вибір) в
                    <span class="text-primary font-bold">постійний</span>
                    доступ
                  </li>
                  <li class="text-primary font-bold">
                    5 медитацій в доступ назавжди
                  </li>
                  <li class="text-primary font-bold">
                    Вебінар з можливістю отримати особистий розбір та відповіді
                    на питання.
                  </li>
                  <li class="text-primary font-bold">
                    VIP-чат зі мною з моім власним супроводом
                  </li>
                </ul>
                <div class="text-center flex flex-col mt-12">
                  <span class="text-4xl font-bold">1901</span>
                </div>
                <div class="flex flex-col justify-center items-center mt-12">
                  <button
                    @click="openModal('ПАКЕТ ПОСЛУГ VIP', '1901')"
                    class="w-[215px] text-black py-5 px-5 bg-gradient-to-r from-[#FADA8F] via-[#FFFFFF] to-[#FADA8F] rounded-full"
                  >
                    ОПЛАТИТИ
                  </button>
                </div>
              </div>
              <div
                class="absolute top-[-8%] right-[-19%] z-10 p-2 rotate-[13deg] hue-rotate-custom"
              >
                <span class="">
                  <img width="128" src="@/assets/images/vip-price.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <payButton
    v-if="isModalOpen"
    :packageName="selectedPackage.packageName"
    :amount="selectedPackage.amount"
    @close="closeModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false)
const selectedPackage = ref({
  packageName: '',
  amount: '',
})

const openModal = (packageName: string, amount: string) => {
  selectedPackage.value = { packageName, amount }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style>
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
