<template>
  <section class="home">
    <SideBar />
    <ProductList />
  </section>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
import ProductList from "@/components/products/ProductList.vue";
export default {
  components: {
    SideBar,
    ProductList
  }
};
</script>

<style lang="scss">
.home {
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 10vh;
}
</style>