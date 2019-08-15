<template>
  <div class="productItem" @click="$router.push('/product/' + product.id)">
    <div class="productItem-photo" :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }"></div>
    <h4>{{product.title}}</h4>
    <div class="product-price">
      <b>{{product.price.toFixed(2)}}</b>
      PLN
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.productItem {
  cursor: pointer;
  width: 215px;
  height: 302px;
  margin: 0 0 40px 40px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0 0 14px 2px rgba($gray, 0.75);
  @media (max-width: 800px) {
    margin: 20px;
  }
  &-photo {
    width: 100%;
    height: 216px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  h4 {
    margin-bottom: 20px;
  }
  b {
    color: $accent;
  }
}
</style>