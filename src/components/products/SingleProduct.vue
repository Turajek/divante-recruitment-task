<template>
  <div class="singleProduct">
    <div class="singleProduct-photo">
      <img :src="singleProduct.imageUrl" />
    </div>
    <div class="singleProduct-info">
      <h3>{{singleProduct.title}}</h3>
      <p>{{singleProduct.description}}</p>
      <button class="btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    singleProduct() {
      return this.$store.getters.getSingleProduct;
    }
  },
  created() {
    this.$store.dispatch("fetchSingleProduct", this.$route.params.productId);
  }
};
</script>

<style lang="scss" scoped>
.singleProduct {
  flex: 4;
  margin: 0 40px 20px 40px;
  box-shadow: 0 0 14px 2px rgba($gray, 0.75);
  @media (max-width: 800px) {
    margin: 20px;
  }
  @media (max-width: 450px) {
    margin: 0;
  }
  &-info {
    box-shadow: 0 0 14px 2px rgba($gray, 0.75);
    margin: 15px;
    height: calc(30% - 30px);
    padding: 40px;
  }
  &-photo {
    text-align: center;
    width: 100%;
    height: 300px;
    padding: 5px;
  }
}
</style>