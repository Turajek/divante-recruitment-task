<template>
  <div class="search">
    <div class="search-input" :class="{active}">
      <input placeholder="search..." @change="search($event.target.value)" />
    </div>

    <div class="search-icon" @click="active = !active">
      <img src="@/assets/icons/magnifying-glass.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    search(val) {
      this.$store.commit("SET_PRODUCTS_FILTER", val);
      if (this.$route.name != "home") {
        this.$router.push("/");
      } else {
        this.$store.dispatch("fetchProducts");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  margin: 0 25px;
  display: flex;
  align-items: center;
  background: $search;
  @media (max-width: 500px) {
    margin: 0;
  }
  &-input {
    max-width: 0;
    overflow: hidden;
    transition: all 1s;
    &.active {
      max-width: 500px;
      padding: 0 20px;
    }
    input {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      border: 1px solid $gray;
      font-size: 1rem;
      line-height: 1.5;
      background-color: $white;
      background-clip: padding-box;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }
  &-icon {
    width: 90px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>