<template>
  <v-container class="pc mt-4">
    <div class="d-flex" v-if="category">
      <div v-for="(cat, index) in category" :key="index" class="ml-2">
        <div class="d-flex">
          <div class="pc__subcategory" @click="openCategory(cat.slug)">
            <img :src="cat.image" alt="" v-if="cat.image" class="pc__img" />
            <div class="category__icon" v-else>
              <v-icon size="50">mdi-image</v-icon>
            </div>
            <div class="pc__wrap">
              <div class="pc__subcategory__title">{{ cat.name }}</div>
              <div class="pc__subcategory__description">{{ cat.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="category?.length">
      <h2>Товары</h2>
      <div v-for="cat in category" :key="cat.slug" class="ml-2 d-flex">
        <div v-for="(prod, index) in cat.products" :key="index" class="ml-2">
          <ProductVue :item="prod" />
        </div>
      </div>
    </div>
    <div v-else class="mb-2">
      <h1>В данной категории нет товаров</h1>
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
  watch: {
    $route(to) {
      // This will run when the route changes
      this.id = to.params.id;
    },
    id(newVal) {
      this.getInfoCategory(newVal);
    },
  },
  mounted() {
    if (this.activeCatalogUrl) {
      this.getInfoCategory(this.activeCatalogUrl);
    }
  },
  methods: {
    openCategory(slug) {
      this.$router.push(`/catalog/${slug}`);
    },
    async getInfoCategory(url) {
      const _url = this.$config.API + "mycategories/" + url;
      try {
        const resp = await this.$axios.get(_url);
        this.category = resp.data;
        this.children = resp.data;
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
.pc__img {
  max-width: 50px;
  max-height: 50px;
  border-radius: 10px;
}
.pc__subcategory {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border: 1px solid #eaebec;
  max-width: 33%;
  gap: 10px;
  margin-bottom: 30px;
  min-width: 400px;
  min-height: 76px;
  cursor: pointer;
}
.pc__subcategory__title {
  font-size: 19px;
  font-weight: 600;
  line-height: 22px;
}
.pc__subcategory__description {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 300px;
}
.pc__wrap {
  display: flex;
  flex-direction: column;
}
</style>