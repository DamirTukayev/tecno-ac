<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <v-sheet :color="colors[index]" height="100%" class="d-flex">
        <v-img
          :src="slide.image"
          height="100%"
          width="50%"
          object-fit="cover"
          :class="{'order-2': index % 2 === 0, 'order-1': index % 2 !== 0}"
        ></v-img>
        <div
          class="text-h4"
          :class="{
            'order-1': index % 2 === 0,
            'order-2': index % 2 !== 0,
            'left-padding': index % 2 === 0
          }"
        >
          <h3 class="slider__title">{{ slide.title }}</h3>
          <h6 class="slider__titla">{{ slide.titla }}</h6>
          <p class="slider__text-body-2">{{ slide.text }}</p>
          <span class="slider__price">{{ slide.price }}</span>
          <v-row class="slider__button">
            <v-btn v-for="(button, btnIndex) in slide.buttons" :key="btnIndex" :color="button.color" class="slider__btn">{{ button.text }}</v-btn>
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
        colors: ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
        slides: [
          {
            image: require('@/assets/home/slider/slider_1.jpg'),
            title: 'Атлет ГЗЧ-2500 генератор звуковой частоты',
            titla: 'ДВА РЕЖИМА ГЕНЕРАЦИИ • ЗАЩИТА ОТ ПЕРЕГРУЗКИ ПО ТОКУ',
            text: 'Определение трассы подземного кабеля или трубопровода при непосредственном подключении к коммуникации.',
            price: '197 860 руб.',
            buttons: [
              { text: 'Подробнее', color: '#e10018' },
            ],
          },
          {
            image: require('@/assets/home/slider/slider_2.jpg'),
            title: 'Передвижная лаборатория на базе Газель NN',
            text: 'Электротехническая лаборатория для кабельных линий напряжением от 0,4 до 10 кВ.',
            price: '11 900 000 руб.',
            buttons: [
              { text: 'Подробнее', color: '#e10018' },
            ],
          },
          {
            image: require('@/assets/home/slider/slider_3.jpg'),
            title: 'Трассоискатель подземных коммуникаций Успех АГ-309.50Ц',
            text: 'Современный цифровой трассопоисковый приемник-моноблок с цветным дисплем.Трассировочный генератор с выходной мощностью до 100 Вт.',
            price: '296 400 руб.',
            buttons: [
              { text: 'Подробнее', color: '#e10018' },
            ],
          },
          {
            image: require('@/assets/home/slider/slider_4.jpg'),
            title: 'Распродажа складских остатков!Успейте купить!',
            text: 'Клещи электроизмерительные DT-351 8 020 руб. 4 400 руб. Счетчик МЕРКУРИЙ 200.04 1ф 5-60А 6 054 руб. 3 900 руб.',
            price: '11 900 000 руб.',
            buttons: [
              { text: 'Клещи DT-351', color: '#e10018' },
              { text: 'Счетчик МЕРКУРИЙ', color: '#e10018' },
            ],
          },
          {
            image: require('@/assets/home/slider/slider_5.jpg'),
            title: 'Арочные металлодетекторы UltraScan',
            titla: 'ПОСТАВКА + ДОСТАВКА + УСТАНОВКА',
            text: 'Высокая точность обнаружения и современный дизайн позволяют использовать рамочные металлодетекторы UltraScan в местах с повышенными требованиями к безопасности.',
            price: '11 900 000 руб.',
            buttons: [
              { text: 'Металлодетекторы', color: '#e10018' },
            ],
          },
          // Добавьте остальные слайды с разным текстом и кнопками
        ],
      };
    },
  };
  </script>
  
<style lang="scss">
.v-window--show-arrows-on-hover {
    overflow: hidden;
    height: 274px !important;
    border-bottom: 2px solid #dc0017;
}
.text-h4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 15px;
  margin-right: 90px;
}

.left-padding {
  padding-left: 30px;
}

.v-sheet{
  height: auto !important;
}
.v-application--is-ltr .v-responsive__sizer ~ .v-responsive__content {
    margin-left: -100%;
    width: 537px !important;
}
.v-image__image--cover {
    background-size: cover;
    background-position: inherit !important;
}
.text-h4{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 15px;
  margin-right: 90px;
}
.slider__title {
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
}
.slider__titla {
  color: #555;
  font-size: 10px;
  margin: 0px 0px 0px;
}
.slider__price{
  font-size: 18px;
  color: #181818;
}
.slider__button{
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 auto;
  margin: 0;
  gap: 10px;
}
.slider__btn{
  color: #fff !important;
  border-radius: 0% !important;
  padding: 15px 15px 15px 15px !important;
  &:hover{
    opacity: 0.8;
  }
}
.slider__text-body-2{
  font-size: 0.65rem;
  line-height: 18px;
  margin-top: 10px;
}
.v-application p {
  margin-bottom: 0;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 0px;
    min-width: 64px;
    padding: 0 16px;
}
.v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    position: absolute;
    margin: 0 16px;
    top: calc(50% - 20px);
    z-index: 1;
}
.v-btn.v-size--default {
    font-size: 0.7rem;
}
</style>

