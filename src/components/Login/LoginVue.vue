<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between"
      >Войти <v-btn icon><v-icon>mdi-close</v-icon></v-btn></v-card-title
    >
    <v-card-text class="login__inputs">
      <v-text-field
        hide-details
        class="elevation-0 rounded-lg"
        placeholder="Логин"
        solo
        flat
        height="50px"
        background-color="#eee"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-text-field
        hide-details
        class="elevation-0 rounded-lg"
        placeholder="Пароль"
        solo
        flat
        height="50px"
        background-color="#eee"
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="px-6">
      <v-btn elevation="0" color="primary">{{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}}</v-btn>
      <v-btn elevation="0" color="primary" @click="changeMode">{{mode === 'login' ? 'Регистрация' : 'Войти'}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      mode: 'login'
    }
  },
  methods: {
    changeMode () {
      if (this.mode === 'login') {
        this.mode = 'reg'
      } else {
        this.mode = 'login'
      }
    }
  }
}
</script>

<style lang="scss">
  .login {
    &__inputs {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>