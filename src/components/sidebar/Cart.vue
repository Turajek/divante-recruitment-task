<template>
  <div class="cart">
    <div class="cart-header">
      <div class="cart-header-icon">
        <img src="@/assets/icons/shopping-cart.svg" />
      </div>
      <h4>Cart</h4>
    </div>
    <div class="cart-wrap" :class="{empty: cart.length === 0}">
      <template v-if="cart.length === 0">Cart is empty</template>
      <template v-else>
        <CartItem v-for="(product, key) in cart" :key="key" :product="product" />
      </template>
    </div>
    <div class="cart-total" v-if="cartTotal > 0">
      Total:
      <b>{{cartTotal.toFixed(2)}} PLN</b>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: {
    CartItem
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    cartTotal() {
      return this.$store.getters.getCartTotal;
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  &-header {
    display: flex;
    align-items: center;
    &-icon {
      margin-right: 20px;
    }
  }
  &-wrap {
    min-height: 130px;
    margin-top: 15px;
    border: dashed 2px $white;
    &.empty {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &-total {
    padding: 10px;
    b {
      color: $accent;
    }
  }
}
</style>