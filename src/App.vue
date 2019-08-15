<template>
  <div id="app" class="app">
    <Header />
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Loader v-if="isLoading" />
    <notifications group="foo" />
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Loader from "@/components/ui/Loader.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Header,
    Loader
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
