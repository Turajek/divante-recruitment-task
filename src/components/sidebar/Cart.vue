<template>
  <div class="cart">
    <div class="cart-header">
      <div class="cart-header-icon">
        <img src="@/assets/icons/shopping-cart.svg" />
      </div>
      <h4>Cart</h4>
    </div>
    <div class="cart-wrap empty">
      <template>Cart is empty</template>
    </div>
  </div>
</template>

<script>
export default {};
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
}
</style>