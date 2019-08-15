<template>
  <section class="contact">
    <InfoTile name="Contact">
      <div class="contact-item">
        <a href="mailto:divante@divante.pl">divante@divante.pl</a>
      </div>
      <div class="contact-item">
        <div>
          <a href="tel:123456789">tel. 123- 456 - 789</a>
        </div>
        <div>
          <a href="tel:887236324">tel. 887 - 236 - 324</a>
        </div>
      </div>
      <div class="contact-item">
        <div>ul. Dmowskiego 17</div>
        <div>00 - 000 Wrocław</div>
      </div>
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
.contact-item {
  margin: 15px 0;
  line-height: 22px;
}
</style>