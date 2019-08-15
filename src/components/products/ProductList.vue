<template>
  <div class="productList">
    <ProductItem v-for="(product, key) in getProducts" :key="key" :product="product" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  created() {
    this.$store.dispatch("fetchProducts");
  }
};
</script>

<style lang="scss" scoped>
.productList {
  flex: 4;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
}
</style>