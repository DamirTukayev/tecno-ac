<template>
  <v-container>
    <div class="products">
      <div v-for="product in products" :key="product.id">
        <!-- {{product.tags}}
        <img :src="product.preview_photo" alt="">
        <div class="product__title">
          {{product.title}}
        </div>
        {{product.price}} -->
        <product-vue :item="product" />
      </div>
    </div>
  </v-container>
</template>

<script>
import ProductVue from "../main/ProductVue.vue";
export default {
  components: { ProductVue },
  data() {
    return {
      id: 1,
      products: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getProductsById();
    }
  },
  methods: {
    async getProductsById() {
      try {
        const url = this.$config.API + "goods/?category__id=" + this.id;
        const resp = await this.$axios.get(url);
        this.products = resp.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.products {
  padding-top: 20px;
  padding-left: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.products__item {
  padding: 15px;
  border: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.products__item img {
  height: 170px;
  width: 170px;
  margin-bottom: 10px;
}
</style>