<template>
  <v-container v-if="category">
    <div v-for="(cat, index) in category" :key="index">
      <img :src="cat.image" alt="" v-if="cat.image" />
      <div class="category__icon" v-else>
        <v-icon size="70">mdi-image</v-icon>
      </div>
      <h1>{{ cat.name }}</h1>
      <div class="category__description mb-3">{{ cat.description }}</div>
      <div class="d-flex" style="gap: 10px;">
        <div v-for="(subcat, index) in cat.children" :key="index" class="category__item">
          <img :src="subcat.image" alt="" v-if="subcat.image" />
          <div class="category__icon" v-else>
            <v-icon size="70">mdi-image</v-icon>
          </div>
          <h1>{{ subcat.name }}</h1>
          <h4>{{ subcat.description }}</h4>
        </div>
      </div>
      <h2>Товары</h2>
      <div class="products">
        <div v-for="product in cat.products" :key="product.id">
          <product-vue :item="product" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import ProductVue from "../main/ProductVue.vue";
export default {
  components: { ProductVue },
  data() {
    return {
      id: 1,
      products: null,
      category: null,
      children: null,
    };
  },
  computed: {
    ...mapState({
      activeCatalogUrl: (state) => state.appStore.activeCatalogUrl,
    }),
  },
  mounted() {
    if (this.activeCatalogUrl) {
      this.getInfoCategory(this.activeCatalogUrl);
    }
  },
  methods: {
    async getInfoCategory(url) {
      const _url = this.$config.API + "mycategories/" + url;
      try {
        const resp = await this.$axios.get(_url);
        console.log(resp.data);
        this.category = resp.data;
        await this.getChildren(this.category.children);
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    },
    async getChildren(url) {
      try {
        const resp = await this.$axios.get(url);
        this.children = resp.data;
        console.log(resp.data);
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
.category__description {
  color: #424141;
}
.category__item {
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
}
</style>