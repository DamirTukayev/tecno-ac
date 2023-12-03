<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="indigo" dark v-bind="attrs" v-on="on" icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </template>

      <CartEmptyVue @close-popup="menu = false"/>
    </v-menu>
  </div>
</template>

<script>
import CartEmptyVue from './CartEmptyVue.vue'

export default {
  components: {CartEmptyVue},
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
};
</script>