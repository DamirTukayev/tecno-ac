<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="500"
    class="carousel"
    delimiter-icon="mdi-brightness-1"
  >
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <v-sheet :color="colors[index]" class="d-flex carousel__wrap">
        <v-img
          :src="slide.image"
          width="50%"
          object-fit="cover"
          :class="{ 'order-2': index % 2 === 1, 'order-1': index % 2 !== 1 }"
        ></v-img>
        <div
          class="carousel__text"
          :class="{
            'order-1': index % 2 === 1,
            'order-2': index % 2 !== 1,
            'left-padding': index % 2 === 1,
          }"
        >
          <h3 class="slider__title mb-3">{{ slide.title }}</h3>
          <h6 class="slider__titla mb-2">{{ slide.titla }}</h6>
          <p class="slider__text-body-2 mb-4">{{ slide.text }}</p>
          <span class="slider__price mb-4">{{ slide.price }}</span>
          <v-row class="slider__button">
            <v-btn
              v-for="(button, btnIndex) in slide.buttons"
              :key="btnIndex"
              :color="button.color"
              class="slider__btn"
              >{{ button.text }}</v-btn
            >
          </v-row>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: ["#f2f2f2", "#f2f2f2", "#f2f2f2", "#f2f2f2", "#f2f2f2"],
      slides: [
        {
          image: require("@/assets/home/slider/slider_1.jpg"),
          title: "Атлет ГЗЧ-2500 генератор звуковой частоты",
          titla: "ДВА РЕЖИМА ГЕНЕРАЦИИ • ЗАЩИТА ОТ ПЕРЕГРУЗКИ ПО ТОКУ",
          text: "Определение трассы подземного кабеля или трубопровода при непосредственном подключении к коммуникации.",
          price: "197 860 руб.",
          buttons: [{ text: "Подробнее", color: "#e10018" }],
        },
        {
          image: require("@/assets/home/slider/slider_2.jpg"),
          title: "Передвижная лаборатория на базе Газель NN",
          text: "Электротехническая лаборатория для кабельных линий напряжением от 0,4 до 10 кВ.",
          price: "11 900 000 руб.",
          buttons: [{ text: "Подробнее", color: "#e10018" }],
        },
        {
          image: require("@/assets/home/slider/slider_3.jpg"),
          title: "Трассоискатель подземных коммуникаций Успех АГ-309.50Ц",
          text: "Современный цифровой трассопоисковый приемник-моноблок с цветным дисплем.Трассировочный генератор с выходной мощностью до 100 Вт.",
          price: "296 400 руб.",
          buttons: [{ text: "Подробнее", color: "#e10018" }],
        },
        {
          image: require("@/assets/home/slider/slider_4.jpg"),
          title: "Распродажа складских остатков!Успейте купить!",
          text: "Клещи электроизмерительные DT-351 8 020 руб. 4 400 руб. Счетчик МЕРКУРИЙ 200.04 1ф 5-60А 6 054 руб. 3 900 руб.",
          price: "11 900 000 руб.",
          buttons: [
            { text: "Клещи DT-351", color: "#e10018" },
            { text: "Счетчик МЕРКУРИЙ", color: "#e10018" },
          ],
        },
        {
          image: require("@/assets/home/slider/slider_5.jpg"),
          title: "Арочные металлодетекторы UltraScan",
          titla: "ПОСТАВКА + ДОСТАВКА + УСТАНОВКА",
          text: "Высокая точность обнаружения и современный дизайн позволяют использовать рамочные металлодетекторы UltraScan в местах с повышенными требованиями к безопасности.",
          price: "11 900 000 руб.",
          buttons: [{ text: "Металлодетекторы", color: "#e10018" }],
        },
        // Добавьте остальные слайды с разным текстом и кнопками
      ],
    };
  },
};
</script>
  
<style lang="scss">
.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev {
  background: #fff;
  border-radius: 20px;
}
.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next {
  background: #fff;
  border-radius: 20px;
}

.carousel {
  .slider__btn span {
    font-size: 15px;
    color: white !important;
  }
  .v-btn--icon.v-size--default {
    height: 43px;
    width: 43px;
  }
  .v-btn__content {
    color: #3a3737;
    &:hover {
      color: #fff;
    }
  }
  .theme--dark.v-btn.v-btn--icon {
    // color: #3a3737;
    &:hover {
      background: #e10018;
      color: #fff;
    }
  }
  .left-padding {
    padding-left: 90px;
  }
  .v-item-group {
    margin-bottom: -16px;
  }
  .v-sheet {
    height: 100% !important;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    margin-left: 0;
    margin-right: 0;
  }
  .v-btn--icon.v-size--small::before {
    opacity: 1;
    border: 2px solid black;
  }
  .v-btn--icon.v-size--small {
    height: 10px;
    width: 10px;
    margin: 0 4px;
  }
  .v-btn--active {
    color: black !important;
  }

  .v-btn--icon.v-size--small .v-icon,
  .v-btn--fab.v-size--small .v-icon {
    opacity: 0;
  }
}
.slider__title {
  width: 100%;
  font-size: 30px;
  line-height: 33px;
  font-weight: 600;
  padding-right: 10px;
}
.slider__titla {
  color: #181818;
  font-size: 15px;
}
.slider__price {
  color: #181818;
  font-size: 20px;
  font-weight: bold;
}
.slider__button {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  margin: 0;
  gap: 10px;
}
.slider__btn {
  color: #fff !important;
  border-radius: 0% !important;
  padding: 20px 15px !important;
  text-transform: initial;
  font-weight: 400;
  span {
    font-size: 15px;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>

