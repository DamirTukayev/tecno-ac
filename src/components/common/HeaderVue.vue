<template>
  <div class="header">
    <div class="header__up">
      <v-container class="d-flex justify-space-between align-center">
        <div class="header__up__tel">
          <a href="tel:8 (718) 265-01-11">8 (718) 265-01-11</a>
          <a href="tel:8 (778) 590-59-77">8 (778) 590-59-77</a>
        </div>
        <a href="mailto:info1technoac@gmail.com" class="header__up__contacts">
          <v-icon>mdi-email-outline</v-icon>
          <span class="header__up__contacts__text"
            >info1technoac@gmail.com</span
          >
        </a>
      </v-container>
    </div>
    <div class="header__down">
      <v-container class="d-flex justify-space-between align-center">
        <router-link to="/">
          <img
            class="header__down__logo"
            src="@/assets/header/logo.png"
            alt=""
          />
        </router-link>
        <v-text-field
          hide-details
          class="header__down__search elevation-0 rounded-lg"
          placeholder="Поиск по товарам"
          solo
          flat
          height="50px"
          background-color="#eee"
          append-icon="mdi-magnify"
        >
        </v-text-field>
        <div class="header__down__icons">
          <CartMenuVue/>
          <v-btn icon>
            <v-icon color="#d60117">mdi-phone-outline</v-icon>
          </v-btn>
        </div>
      </v-container>
    </div>
    <v-dialog v-model="isOpenLogin" max-width="500px">
      <LoginVue @close-popup="isOpenLogin = false"/>
    </v-dialog>
  </div>
</template>

<script>
import LoginVue from "../Login/LoginVue";
import CartMenuVue from "./Cart/CartMenuVue";
export default {
  components: { LoginVue, CartMenuVue },
  data() {
    return {
      isOpenLogin: false,
    };
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &__up {
    background-color: #f7f7f7;
    padding: 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    &__tel {
      display: flex;
      gap: 10px;
      position: relative;
      a {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #1d2029 !important;
        text-decoration: none;
        font-size: 0.9rem;
        &:first-child {
          &::after {
            content: "";
            background-color: #cd0016;
            height: 4px;
            width: 4px;
            border-radius: 5px;
          }
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
    &__contacts {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      &__text {
        font-size: 0.9rem;
        color: #1d2029 !important;
        &:hover {
          text-decoration: underline;
        }
      }
      img {
        cursor: pointer;
      }
    }
  }
  &__down {
    width: 100%;
    padding: 20px 0;
    &__logo {
      width: 150px;
    }
    &__search {
      max-width: 700px;
    }
    &__icons {
      display: flex;
      gap: 15px;
      i {
        cursor: pointer;
      }
    }
  }
}
</style>