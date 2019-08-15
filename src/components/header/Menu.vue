<template>
  <div class="menu">
    <div class="menu-desktop">
      <router-link
        v-for="(item,key) in menuItems"
        :key="key"
        class="menu-item"
        :to="item.link"
        exact
      >{{item.name}}</router-link>
    </div>
    <Burger>
      <div v-for="(item,key) in menuItems" :key="key">
        <router-link class="menu-item" :to="item.link" exact>{{item.name}}</router-link>
      </div>
    </Burger>
  </div>
</template>

<script>
import Burger from "./Burger.vue";
export default {
  data() {
    return {
      menuItems: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" }
      ]
    };
  },
  components: {
    Burger
  }
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  &-desktop {
    width: 250px;
    justify-content: space-around;
    display: none;
    height: 100%;
    @media (min-width: 550px) {
      display: flex;
      align-items: center;
    }
  }
  &-item {
    &.router-link-active {
      color: $light-blue;
    }
  }
}
</style>