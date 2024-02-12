<template>
  <div class="footer">
    <v-container>
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-menu">
            <div class="footer-menu-left">
              <div class="footer-menu-left__block">
                <div class="footer-menu__copyright">
                  © «ТЕХНО-АС», 1992-2023
                </div>
                <div class="footer-menu__submenu">
                  <a class="footer-menu__linkk" @click="goTo('https://www.technoac.ru/policy/')">Политика конфиденциальности</a>
                </div>
              </div>
            </div>
            <div class="footer-menu-column">
              <a href="#" class="footer-menu__title">КОМПАНИЯ</a>
              <a href="#" class="footer-menu__link" @click="goTo('https://www.technoac.ru/company/news/')">Новости</a>
              <a class="footer-menu__link" @click="goToRoute('/dealers')">Дилерам</a>
              <a class="footer-menu__link" @click="goToRoute('/tenders')">Тендеры</a>
              <a class="footer-menu__link" @click="goTo('https://www.technoac.ru/contacts/')">Контакты</a>
            </div>
            <div class="footer-menu-column">
              <a href="#" class="footer-menu__title">ПОМОЩЬ</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/help')">Условия оплаты</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/help')">Условия доставки</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/help')">Условия возврата товара</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/help')">Как оформить заказ</a>
            </div>
            <div class="footer-menu-column">
              <a href="#" class="footer-menu__title" @click="goToRoute('/info')">ИНФОРМАЦИЯ</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/info')">Обучение</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/info')">Методики</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/info')">Производители</a>
              <a href="#" class="footer-menu__link" @click="goToRoute('/info')">Материалы для скачивания</a>
            </div>
          </div>
          <div class="footer-phone__block">
            <span class="footer-phone__wrap">
              <img src="../../assets/header/phone.svg" style=";" class="mr-2" alt="">
              <div class="d-flex flex-column">
                <a class="footer__phone mb-1" href="tel:8 (718) 265-01-11">8 (718) 265-01-11</a>
                <a class="footer__phone" href="tel:8 (778) 590-59-77">8 (778) 590-59-77</a>
              </div>
            </span>
            <span class="footer-order-wrap__btn">
              <span class="footer-callback__btnn" @click="openBuy"> Заказать звонок</span>
            </span>
            <div class="footer-social__wrapper">
              <div class="footer-sociall">
                <div class="footer-small__title">Мы в социальных сетях:</div>
                <div class="footer-soc__icons">
                  <img src="../../assets/header/social-icons/Vkontakte.svg" alt="" @click="goTo('https://vk.com/technoac')">
                  <img src="../../assets/header/social-icons/youtube.svg" alt="" @click="goTo('https://www.youtube.com/user/TheTechnoac')">
                  <img src="../../assets/header/social-icons/Telegram.svg" alt="" @click="goTo('https://t.me/technoac_ru')">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      window.open(path)
    },
    goToRoute (path) {
      this.$router.push(path)
    },
    openBuy() {
      this.$store.dispatch("SET_VALUE", {
        key: "triggerBuy",
        value: this.$store.state.appStore.triggerBuy + 1,
      });
    },
  },
}
</script>

<style lang="scss">
.footer {
  background: #f6f6f7;

  &-content {
    padding: 25px 0 39px;
  }

  &-top {
    display: grid;
    grid-template-columns: 830px 1fr;
    column-gap: 90px;
  }

  &-menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    &-left__block {
      margin-top: 4px;
    }

    &__copyright {
      font-size: 12px;
      opacity: 0.6;
      color: #666666 !important;
      padding: 0 0 17px;
    }

    &__linkk {
      text-decoration: none;
      font-size: 12px;
      opacity: 0.6;
      color: #666666 !important;

      &:hover {
        opacity: 1;
        color: #666666 !important;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 13px;
      text-decoration: none;
      color: #1D2029 !important;

      &:hover {
        color: #cd0016 !important;
      }
    }

    &__link {
      display: block;
      text-decoration: none;
      font-size: 13px;
      color: #666666 !important;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        color: #cd0016 !important;
      }
    }
  }

  &__phone {
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  }

  &-phone__block {
    display: flex;
    flex-direction: column;
  }

  &-phone__wrap {
    display: flex;
    justify-content: center;
  }

  &-callback__btnn {
    display: inline-block;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1px;
    color: #cd0016;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  &-small__title {
    color: #888888;
    font-size: 13px;
    font-weight: 500;
    margin: 0px 0px 3px;
    font-weight: 400;
  }

  &-social__wrapper {
    margin-top: 15px;
    text-align: center;
  }

  &-soc__icons {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-right: 46px;
    img {
      cursor: pointer;
    }
  }
}

.footer-menu-column {
  margin-left: 30px;
}
</style>