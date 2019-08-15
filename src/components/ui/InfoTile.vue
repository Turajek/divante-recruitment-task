<template>
  <div class="info">
    <div class="info-icon">
      <img src="@/assets/icons/phone-book-blue.svg" />
    </div>
    <h3>{{name}}</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  text-align: center;
  max-width: 640px;
  width: 100%;
  padding: 25px 20px;
  box-shadow: 0 0 14px 2px rgba($gray, 0.4);

  h3 {
    text-transform: uppercase;
    color: $dark-text;
  }

  &-icon {
    width: 50px;
    margin: 15px auto 30px auto;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid $light-blue;
  }
}
</style>