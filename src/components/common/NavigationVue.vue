<template>
  <div class="nav">
    <v-container class="d-flex align-center justify-space-between" style="width: 100%;">
      <div
        class="nav__item"
        :class="currentRouteName === '/catalog' ? 'nav__item__active' : ''"
        @click="goTo('/catalog')"
      >
        <v-icon class="mr-1" size="22" color="#fff">mdi-menu</v-icon>
        Товары
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/import' ? 'nav__item__active' : ''"
        @click="goTo('/import')"
      >
        Импорт
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/sale' ? 'nav__item__active' : ''"
        @click="goTo('/sale')"
      >
        Акции
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/about' ? 'nav__item__active' : ''"
        @click="goTo('/about')"
      >
        О нас
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/dealers' ? 'nav__item__active' : ''"
        @click="goTo('/dealers')"
      >
        Дилерам
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/tenders' ? 'nav__item__active' : ''"
        @click="goTo('/tenders')"
      >
        Тендеры
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/info' ? 'nav__item__active' : ''"
        @click="goTo('/info')"
      >
        Информация
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/help' ? 'nav__item__active' : ''"
        @click="goTo('/help')"
      >
        Помощь
      </div>
      <div
        class="nav__item"
        :class="currentRouteName === '/contacts' ? 'nav__item__active' : ''"
        @click="goToPage('https://www.technoac.ru/contacts/')"
      >
        Контакты
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
  methods: {
    goToPage (path) {
      window.open(path)
    },
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="scss">
.nav {
  background-color: #d60117;
  &__item {
    display: flex;
    align-items: center;
    padding: 15px 15px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    width: 100%;
    &:hover {
      background-color: #f4011994;
    }
    &__active {
      background-color: #f4011b;
    }
  }
}
</style>