<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between">
      Войти 
      <v-btn icon @click="closePopup">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title
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
      ></v-text-field>
      <v-text-field
        hide-details
        class="elevation-0 rounded-lg"
        placeholder="Пароль"
        solo
        flat
        height="50px"
        background-color="#eee"
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="px-6 d-flex justify-space-between">
      <v-btn elevation="0" color="primary">{{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}}</v-btn>
      <span style="color: #cd0016; cursor: pointer;" @click="changeMode">{{mode === 'login' ? 'Регистрация' : 'У меня уже есть аккаунт'}}</span>
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
    },
    closePopup () {
      this.$emit('close-popup')
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