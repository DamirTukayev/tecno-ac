<template>
  <v-container class="catalog">
    <div class="catalog__wrap d-flex justify-space-between align-center mb-5">
      <div class="catalog__title">Продукция</div>
      <div class="catalog__price">
        <v-btn style="border-radius: 2px;" dark color="#e10018" class="elevation-0 catalog__btn" @click="downloadFile">Прайс-лист</v-btn>
        <span>от 01.02.2024 с НДС</span>
      </div>
    </div>
    <div class="category" v-show="this.category.length">
      <div v-for="(item, index) in category" :key="index" @click="openProducts(item)">
        <div class="category__item">
          <img :src="item.image" alt="" v-if="item.image">
          <div class="category__icon" v-else><v-icon size="70">mdi-image</v-icon></div>
          <div class="category__wrap">
            <div class="category__title">
              {{ item.name }}
            </div>
            <div class="category__subtitle">
              Производство и поставка передвижных измерительных лабораторий для решения различных задач.
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        category: []
      }
    },
    async mounted () {
      try {
        const url = this.$config.API + 'mycategories/'
        const resp = await this.$axios.get(url)
        this.category = resp.data
      } catch (error) {
        console.log(error);
      }
    },
    methods: {
      downloadFile() {
        const fileUrl = 'https://www.technoac.ru/files/price_01.02.24.xlsx'

        const link = document.createElement('a');
        link.href = fileUrl;

        link.setAttribute('download', 'price_01.02.24.xlsx');

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      },
      openProducts (category) {
        this.$store.dispatch("SET_VALUE", {
          key: "activeCatalogUrl",
          value: category.slug
        });
        this.$router.push(`catalog/${category.slug}`)
      }
    }
  }
</script>

<style scoped lang="scss">
.catalog{
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;
}

.catalog__title{
  color: #181818;
  font-size: 30px;
  font-weight: 600;
  line-height: 35px;
}
.catalog__price{
  display: flex;
  flex-direction: column;
}
.catalog__btn{
  text-transform: inherit;
  font-weight: 400;
  letter-spacing: -0.1px;
}
.catalog__price span {
  font-size: 13px;
  color: #707070;
}
.category {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  &__icon {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.category__item{
  border: 1px solid #e8e8e8;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 120px;
    height: 120px;
  }
}
.category__wrap{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
}
.category__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #1d2029;
}
.category__subtitle {
  color: #888888;
  font-size: 13px;
}
</style>