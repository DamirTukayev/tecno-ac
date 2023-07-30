<template>
  <div class="brands">
    <v-sheet class="mx-auto" max-width="1240" >
      <v-slide-group multiple show-arrows style="height: 49.6px !important;">
        <v-slide-item v-for="(n, index) in 20" :key="n" v-slot="{ active, toggle }">
          <v-btn
            class="brands__item"
            depressed
            text
            plain
          > 
            <v-img
              :src="require(`@/assets/home/brands/brands_${index + 1}.jpg`)"
              :style="{
                filter: active ? 'none' : 'grayscale(100%)',
                opacity: active ? '1' : '0.6',
                objectFit: 'contain',
              }"
              @mouseenter="toggle"
              @mouseleave="toggle"
            ></v-img>
          </v-btn>
            
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>

<style lang="scss">

.brands {
  border-top: 1px solid #eaebec;
  margin-top: 40px;
  &__wrap {
    max-width: 1200px;
  }
  .v-sheet:not(.v-sheet--outlined) {
  margin-top: 20px; 
  margin-bottom: 80px;
  }
  .v-slide-group__content{
    height: 50px;
    align-items: center;
    
  }
  &__item {
    margin-right: 100px;
    &:last-child{
      margin-right: 0px;
    }
  }
  &__btn{
    .v-btn__content{
      height: 50px;
    }
  }
  .brands__item {
  box-shadow: none !important;
  transform: none !important;
  transition: none !important;
}

.brands__item .v-image__image {
  transform: none !important;
  transition: none !important;
}
}


</style>
