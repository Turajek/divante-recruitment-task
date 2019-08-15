<template>
  <section class="home">
    <SideBar />
  </section>
</template>

<script>
import SideBar from "@/components/sidebar/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
.home {
  justify-content: flex-start;
}
</style>