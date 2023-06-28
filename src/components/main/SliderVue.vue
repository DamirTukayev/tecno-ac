<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%" class="d-flex">
        <div class="d-flex fill-height justify-end align-center" style="width: 50%;">
          <v-img
            :src="slide.image"
            height="100%"
            width="100%"
            object-fit="cover"
          ></v-img>
        </div>
        <div class="text-h4" style="width: 50%;">
          <h3 class="slider__title">{{ slide.title }} Slide</h3>
          <p class="text-body-2">{{ slide.text }}</p>
          <span class="slider__price">{{ slide.price }}</span>
          <v-row>
            <v-btn v-for="(button, index) in slide.buttons" :key="index" :color="button.color" class="white--text">{{ button.text }}</v-btn>
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
      colors: ['grey', 'grey', 'grey', 'grey', 'grey'],
      slides: [
        {
          image: '../../assets/header/img/import.jpg',
          title: 'Атлет ГЗЧ-2500 генератор звуковой частоты',
          text: 'Текст первой страницы',
          price: '170',
          buttons: [
            { text: 'Кнопка 1', color: '#e10018' },
            { text: 'Кнопка 2', color: '#e10018' },
          ],
        },
        // {
        //   image: '../../assets/header/img/slider.jpg',
        //   title: 'Атлет ГЗЧ-2500 генератор звуковой частоты',
        //   text: 'Текст второй страницы',
        //   buttons: [
        //     { text: 'Кнопка 1', color: '#e10018' },
        //     { text: 'Кнопка 2', color: '#e10018' },
        //   ],
        // },
        ],
      };
    },
  };
  </script>
  
  

<Style lang="scss">

</Style>