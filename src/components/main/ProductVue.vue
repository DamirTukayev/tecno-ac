<template>
  <div
    class="product"
    @mouseover="showOther = true"
    @mouseleave="showOther = false"
  >
    <img class="product__img" :src="item.preview_photo" alt="" />
    <div class="product__title">{{ item.title }}</div>
    <div class="product__price" v-if="item.price">{{ item.price }} ₽</div>
    <div class="product__other" :class="{ visible: showOther }">
      <div class="product__counter">
        <div @click="minus" class="product__minus">-</div>
        <div class="product__count">{{ count }}</div>
        <div @click="count++" class="product__plus">+</div>
      </div>
      <div class="product__btn" @click="addCart">В корзину</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      count: 1,
      showOther: false,
    };
  },
  methods: {
    minus() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addCart() {
      const existingProductIndex =
        this.$store.state.appStore.cartItems.findIndex(
          (item) => item.id === this.item.id
        );

      if (existingProductIndex !== -1) {
        const updatedCartItems = [...this.$store.state.appStore.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;

        this.$store.dispatch("SET_VALUE", {
          key: "cartItems",
          value: updatedCartItems,
        });
      } else {
        const data = {
          id: this.item.id,
          preview: this.item.preview_photo,
          name: this.item.title,
          price: this.item.price,
          quantity: 1,
        };

        this.$store.dispatch("SET_VALUE", {
          key: "cartItems",
          value: [...this.$store.state.appStore.cartItems, data],
        });
      }
    },
  },
};
</script>

<style lang="scss">
.product {
  min-height: 380px;
  margin: 6px;
  padding: 25px;
  border: 1px solid #eaebec;
  transition: box-shadow ease-out 0.2s, border ease-out 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px !important;
  .visibility-hidden {
    visibility: hidden;
  }
  &:hover {
    border-color: #fff;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    .product__title {
      color: #1d2029;
    }
  }
  &__img {
    min-width: 170px;
    max-width: 170px;
    min-height: 170px;
    max-height: 170px;
  }
  &__title {
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
    color: #cd0016;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  &__price {
    color: #1d2029;
    font-size: 18px;
    font-weight: 600;
  }
  .visible {
    opacity: 1;
  }
  &__other {
    display: flex;
    align-items: center;
    margin-top: 20px;
    opacity: 0;
    overflow: hidden;
    transition: height 0.3s ease, opacity 0.3s ease;
  }
  &__counter {
    display: flex;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
    margin-right: 10px;
  }
  &__minus {
    padding: 3px 10px;
    border-right: 1px solid #e5e5e5;
    font-weight: 600;
  }
  &__count {
    padding: 3px 10px;
    border-right: 1px solid #e5e5e5;
    background: #f7f7f7;
    color: #666666;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  &__plus {
    padding: 3px 10px;
    font-weight: 600;
  }
  &__btn {
    padding: 6px 11px;
    background: #e10018;
    color: white;
    font-size: 15px;
    height: 32px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #d2323e;
    }
  }
}
</style>