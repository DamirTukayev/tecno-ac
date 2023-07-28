<template>
  <div class="brands">
    <v-sheet
      class="brands__wrap py-5"
    >
      <v-slide-group multiple show-arrows height="50px">
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
  &__wrap {
    max-width: 1200px;
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
}


</style>
