<template>
  <div class="cartItem">
    <div class="cartItem-title">{{product.title}}</div>
    <div class="cartItem-price">{{product.price.toFixed(2)}} PLN</div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  display: flex;
  justify-content: space-between;
  background: $dark-blue;
  padding: 10px;
  margin: 5px;

  &-price {
    color: $accent;
  }
}
</style>