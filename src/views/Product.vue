<template>
  <section class="product">
    <SideBar />
    <SingleProduct />
  </section>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
import SingleProduct from "@/components/products/SingleProduct.vue";
export default {
  components: {
    SideBar,
    SingleProduct
  }
};
</script>

<style lang="scss">
.product {
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 10vh;
}
</style>