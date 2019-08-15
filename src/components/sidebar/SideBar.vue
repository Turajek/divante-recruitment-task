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
  width: 262px;
  padding: 30px;
  background: $light-blue;
  color: $white;
}
</style>