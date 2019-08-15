<template>
  <div class="burger">
    <div class="burger-icon" @click="active = true">&#9776;</div>
    <div class="burger-content" :class="{active}" @click="active = false">
      <div class="burger-close">&times;</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
.burger {
  @media (min-width: 550px) {
    display: none;
  }
  &-icon {
    font-size: 50px;
    cursor: pointer;
  }
  &-content {
    position: fixed;
    right: 0;
    top: 0;
    padding: 40px 20px;
    z-index: 1000;
    background: $white;
    height: 100vh;
    width: 300px;
    transform: translateX(300px);
    transition: transform 1s;
    box-shadow: 0 0 14px 2px rgba($gray, 0.75);
    div {
      padding: 10px;
    }
    &.active {
      transform: translateX(0);
    }
  }
  &-close {
    font-size: 30px;
    padding: 10px 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>