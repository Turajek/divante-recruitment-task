<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
