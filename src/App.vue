<template>
  <v-app>
    <HeaderVue />
    <NavigationVue />
    <v-main>
      <router-view />
    </v-main>
    <FooterVue />
    <v-dialog v-model="isOpenBuy" max-width="400px">
      <BuyPopupVue @close-popup="isOpenBuy = false" />
    </v-dialog>
  </v-app>
</template>

<script>
import FooterVue from "./components/common/FooterVue.vue";
import HeaderVue from "@/components/common/HeaderVue.vue";
import NavigationVue from "@/components/common/NavigationVue.vue";
import BuyPopupVue from "./components/Buy/BuyPopupVue.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderVue,
    NavigationVue,
    FooterVue,
    BuyPopupVue,
  },
  data: () => ({
    isOpenBuy: false,
  }),
  computed: {
    ...mapState({
      triggerBuy: (state) => state.appStore.triggerBuy,
    }),
  },
  watch: {
    triggerBuy() {
      this.isOpenBuy = true;
    },
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  // padding: 0 24px;
}
@media (max-width: 768px) {
  .container {
    padding-top: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (min-width: 960px) {
  .container {
    max-width: 1499px;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1499px;
  }
}

@media (min-width: 1920px) {
  .container {
    max-width: 1499px;
    padding: 0 24px;
  }
}
</style>
