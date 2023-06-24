<template>
  <div>
    <v-btn-toggle
      v-model="toggle_exclusive"
      class="mt-5 navigation rounded-0"
      borderless
      mandatory 
    >
      <v-btn  class="navigation__btn">
        <v-icon class="mr-1" size="16px" color="#fff">mdi-menu</v-icon>
        Продукция
      </v-btn>
      <v-btn  class="navigation__btn">
        Импортозамещение
      </v-btn>
      <v-btn  class="navigation__btn">
        Акции
      </v-btn>
      <v-btn  class="navigation__btn">
        О компании
      </v-btn>
      <v-btn  class="navigation__btn">
        Дилерам
      </v-btn>
      <v-btn  class="navigation__btn">
        Тендеры
      </v-btn>
      <v-btn  class="navigation__btn">
        Информация
      </v-btn>
      <v-btn  class="navigation__btn">
        Помощь
      </v-btn>
      <v-btn  class="navigation__btn">
        Контакты
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
 
  &__btn{
    border: none;
    color: white!important;
    padding: 0 16px!important;
    background: #e50119!important;
    opacity: 1!important;
  }
  .v-btn--active {
    opacity: 1!important;
  }
}
</style>