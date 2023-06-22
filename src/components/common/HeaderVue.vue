<template>
  <div class="header">
    <img class="header__logo" src="../../assets/header/logo.svg" alt="">
    <div class="header__social">
      <div class="header__text">
        Успешно работаем на рынке уже более 30 лет
      </div>
      <div class="header__social__icons">
        <img src="../../assets/header/social-icons/Vkontakte.svg" alt="">
        <img src="../../assets/header/social-icons/youtube.svg" alt="">
        <img src="../../assets/header/social-icons/Telegram.svg" alt="">
      </div>
    </div>
    <v-text-field
      hide-details
      class="header__search elevation-0 rounded-0"
      placeholder="Поиск по товарам"
      solo
      flat
      height="50px"
      background-color="#eee"
      append-icon="mdi-magnify"
    >
    </v-text-field>

    <div class="header__contacts">
      <div class="header__mail">sales@technoac.ru</div>
      <div class="header__numbers">
        <img src="../../assets/header/phone.svg" class="mr-2" alt="">
        <div>
          <div class="header__phone mb-1">8 (800) 500-39-73</div>
          <div class="header__phone">8 (499) 110-02-16</div>
        </div>
      </div>
      <div class="header__order">Заказать звонок</div>
    </div>
  </div>
</template>

<style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__logo {
      max-width: 195px;
      margin-right: 50px;
    }
    &__social{
      max-width: 240px;
      margin-right: 20px;
      &__icons{
        display: flex;
        gap: 10px;
      }
    }
    &__text{
      font-size: 14px;
      padding-bottom: 7px;
      line-height: 1.25;
    }
    &__search{
      font-size: 14px;
      color: #969696;
    }
    &__mail{
      color: #cd0016;
      font-size: 14px;
      margin-bottom: 8px;
    }
    &__contacts{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-left: 20px;
    }
    &__numbers{
      display: flex;
    }
    &__phone{
      font-size: 18px;
      font-weight: 600;
      line-height: 18px;
      color: #1d2029;
    }
    &__order{
      display: inline-block;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.1px;
      color: #cd0016;
      margin-top: 8px;
    }
  }
</style>