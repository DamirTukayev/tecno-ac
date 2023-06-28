<template>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, index) in slides"
        :key="index"
      >
        <v-sheet
          :color="colors[index]"
          height="100%"
          class="d-flex"
        >
        <v-img
          :src="slide.image"
          pading-top="20px"
          height="100%"
          width="50%"
          object-fit="cover"
          z-index="0"
        ></v-img>
          <!-- <div class="d-flex fill-height justify-end align-center" style="margin-right: 90px; width: 50%;" > -->
            <div class="text-h4 ">
                
              <h3 class="slider__title">{{ slide.title }}</h3>
              <h6 class="slider__titla">{{ slide.titla }}</h6>
              <p class="slider__text-body-2">{{ slide.text }}</p>
              <span class="slider__price">{{ slide.price }}</span>
              <v-row class="slider__button">
                <v-btn v-for="(button, index) in slide.buttons" :key="index" :color="button.color" class="slider__btn">{{ button.text }}</v-btn>
              </v-row>
            </div>
          <!-- </div> -->
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colors: ['#f2f2f2', '#f2f2f2', '', '', ''],
        slides: [
          {
            image: require('@/assets/header/img/slider_1.jpg'),
            title: 'Атлет ГЗЧ-2500 генератор звуковой частоты',
            titla: 'ДВА РЕЖИМА ГЕНЕРАЦИИ • ЗАЩИТА ОТ ПЕРЕГРУЗКИ ПО ТОКУ',
            text: 'Определение трассы подземного кабеля или трубопровода при непосредственном подключении к коммуникации.',
            price: '197 860 руб.',
            buttons: [
              { text: 'Подробнее', color: '#e10018' },
            ],
          },
          {
            image: require('@/assets/header/img/slider_2.jpg'),
            title: 'Передвижная лаборатория на базе Газель NN',
            text: 'Электротехническая лаборатория для кабельных линий напряжением от 0,4 до 10 кВ.',
            price: '11 900 000 руб.',
            buttons: [
              { text: 'Подробнее', color: '#e10018' },
            ],
          },
          // Добавьте остальные слайды с разным текстом и кнопками
        ],
      };
    },
  };
  </script>
  
<style lang="scss">
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
  margin-top: 0;
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
    top: calc(50% - 76px);
    z-index: 1;
}
.v-btn.v-size--default {
    font-size: 0.7rem;
}
</style>

