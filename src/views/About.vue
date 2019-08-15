<template>
  <section class="contact">
    <InfoTile name="About">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam purus est, placerat sed ante vel, ultrices congue augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </InfoTile>
  </section>
</template>

<script>
import InfoTile from "@/components/ui/InfoTile.vue";
export default {
  components: {
    InfoTile
  }
};
</script>

<style lang="scss" scoped>
p {
  max-width: 400px;
  margin: 10px auto 50px auto;
  color: $light-text;
  font-size: 18px;
  line-height: 22px;
}
</style>