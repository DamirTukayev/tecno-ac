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
          height="100%"
          width="50%"
          object-fit="cover"
          z-index="0"
        ></v-img>
          <!-- <div class="d-flex fill-height justify-end align-center" style="margin-right: 90px; width: 50%;" > -->
            <div class="text-h4" style="width: 50%;">
                
              <h3 class="slider__title">{{ slide.title }} Slide</h3>
              <p class="text-body-2">{{ slide.text }}</p>
              <span class="slider__price">{{ slide.price }}</span>
              <v-row>
                <v-btn v-for="(button, index) in slide.buttons" :key="index" :color="button.color" class="white--text" style="gap: 10px;">{{ button.text }}</v-btn>
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
        colors: ['grey', 'grey', 'grey', 'grey', 'grey'],
        slides: [
          {
            image: '../src/assets/header/img/slider_1.jpg',
            title: 'Атлет ГЗЧ-2500 генератор звуковой частоты',
            text: 'Текст первой страницы',
            price: '170',
            buttons: [
              { text: 'Кнопка 1', color: '#e10018' },
              { text: 'Кнопка 2', color: '#e10018' },
            ],
          },
          {
            image: '../../assets/header/img/Slider_1.jpg',
            title: 'Bhdkv',
            text: 'Текст второй страницы',
            price: '170',
            buttons: [
              { text: 'Кнопка 1', color: '#e10018' },
              { text: 'Кнопка 2', color: '#e10018' },
            ],
          },
          // Добавьте остальные слайды с разным текстом и кнопками
        ],
      };
    },
  };
  </script>
  
  

