<template>
  <header class="header">
    <div class="container header-wrap">
      <router-link to="/">
        <div class="header-logo">LOGO</div>
      </router-link>
      <div class="header-right">
        <Menu />
        <Search />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";
export default {
  components: {
    Menu,
    Search
  }
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $gray;
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    @media (max-width: 500px) {
      padding: 0;
    }
  }
  &-logo {
    color: $light-text;
    padding: 0 1em;
    font-size: 24px;
  }
  &-right {
    display: flex;
    height: 100%;
    align-items: center;
  }
}
</style>