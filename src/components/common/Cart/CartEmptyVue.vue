<template>
  <v-card>
    <v-card-title>{{
      !cartItems.length ? "К сожалению, ваша корзина пуста" : "Корзина"
    }}</v-card-title>
    <v-card-text v-if="!cartItems.length">
      Исправить это недоразумение очень просто: выберите в каталоге интересующий
      товар и нажмите кнопку «В корзину».
    </v-card-text>
    <v-card-text v-else>
      <v-data-table
        :headers="headers"
        :items="cartItems"
        :items-per-page="5"
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              <img :src="item.preview" alt="" />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <v-text-field
                v-model.number="item.quantity"
                type="number"
                min="1"
                outlined
                hide-details
                @input="changeQuantity(item)"
                dense
              />
            </td>
            <td>{{ getAmount(item.price, item.quantity) }}</td>
            <td>
              <v-btn @click="removeFromCart(item)" color="red" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" v-if="cartItems" depressed @click="openBuy">
        Быстрый заказ
      </v-btn>
      <v-btn color="primary" depressed outlined @click="closePopup">
        Закрыть
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isBuyReady: false,
      headers: [
        { text: "Превью", value: "preview", sortable: false },
        { text: "Наименование", value: "name", sortable: false },
        { text: "Цена", value: "price", sortable: false },
        { text: "Количество", value: "quantity", sortable: false },
        { text: "Сумма", value: "amount", sortable: false },
        { text: "Действия", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.appStore.cartItems,
    }),
  },
  methods: {
    openBuy() {
      this.$store.dispatch("SET_VALUE", {
        key: "triggerBuy",
        value: this.$store.state.appStore.triggerBuy + 1,
      });
    },
    closePopup() {
      this.$emit("close-popup");
    },
    getAmount(price, count) {
      return price * count + " ₽";
    },
    changeQuantity(item) {
      const updatedCartItems = this.$store.state.appStore.cartItems.map(
        (cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: item.quantity };
          }
          return cartItem;
        }
      );

      this.$store.dispatch("SET_VALUE", {
        key: "cartItems",
        value: updatedCartItems,
      });
    },
    removeFromCart(product) {
      const existingProductIndex =
        this.$store.state.appStore.cartItems.findIndex(
          (item) => item.id === product.id
        );

      if (existingProductIndex !== -1) {
        // Продукт найден в корзине, удаляем его
        const updatedCartItems = [...this.$store.state.appStore.cartItems];
        updatedCartItems.splice(existingProductIndex, 1);

        this.$store.dispatch("SET_VALUE", {
          key: "cartItems",
          value: updatedCartItems,
        });
      }
    },
  },
};
</script>