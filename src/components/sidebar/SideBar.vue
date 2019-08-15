<template>
  <div class="sidebar">
    <Contact />
    <Cart />
  </div>
</template>

<script>
import Contact from "./Contact.vue";
import Cart from "./Cart.vue";
export default {
  components: {
    Contact,
    Cart
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  font-family: "Lato", sans-serif;
  box-shadow: 0 0 14px 2px rgba($gray, 0.75);
  min-width: 262px;
  flex: 1;
  padding: 30px;
  background: $light-blue;
  color: $white;
  @media (max-width: 800px) {
    margin-bottom: 40px;
    flex: 1 100%;
  }
}
</style>