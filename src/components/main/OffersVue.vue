<template>
  <div class="offer">
    <div class="offer__title">
      Выгодные предложения
    </div>

    <div class="offer__tabs">
      <v-tabs
        v-model="tab"
        class="pl-4"
      >
      <v-tab
        v-for="item in items"
        :key="item"
        active-class="offer__tabs__active"
        @click="getProducts(item)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

      <v-tabs-items v-model="tab">
      <v-tab-item
        class="d-flex flex-wrap"
      >
        <div class="pa-2 " style="width: 25%;" v-for="(product, index) in products" :key="index">
          <ProductVue :item="product"/>
        </div>
      </v-tab-item>
    </v-tabs-items>
    </div>
  </div>
</template>

<script>
import ProductVue from './ProductVue.vue'
  export default {
    components: {
      ProductVue
    },
    data () {
      return {
        tab: 0,
        items: [
          'Новинки', 'Хиты продаж', 'По акции', 'В наличии',
        ],
        products: null
      }
    },
    mounted () {
      this.getProducts()
    },
    methods: {
      async getProducts (item) {
        const tag = item ? item : 'Новинки'
        const url = this.$config.API + 'goods/' + '?tags__name=' + tag + '&limit=8'
        try {
          const resp = await this.$axios.get(url)
          this.products = resp.data.results
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>

<style lang="scss">
  .offer{
    margin-top: 30px;
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    &__tabs {
      .v-tab {
        color: black!important;
      }
      .v-tabs-slider-wrapper{
        color: #ff0000 !important;
      }
      &__active {
        color: black!important;
        
      }
    }
  }
</style>