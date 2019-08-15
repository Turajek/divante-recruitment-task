<template>
  <div class="contact">
    <div class="contact-header">
      <div class="contact-header-icon">
        <img src="@/assets/icons/phone-book.svg" />
      </div>
      <h4>Contact</h4>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue.</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  &-header {
    display: flex;
    align-items: center;
    &-icon {
      margin-right: 20px;
    }
  }
  p {
    line-height: 16px;
    font-size: 13px;
  }
  margin-bottom: 40px;
}
</style>