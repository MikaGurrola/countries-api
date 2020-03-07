<template>
  <figure v-lazyload class="card__flag">
    <img
      :data-url="country.flag"
      :alt="`Flag of ${country.name}`"
    >
  </figure>
</template>

<script>
export default {
  name: 'FlagImage',
  props: ['country'],

  methods: {
    selectFilter(region) {
      this.filter = region
      this.isOpen = false
      this.$emit('filter', this.filter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/breakpoints.scss';

.card__flag {
  height: 160px;
  img {
    height: 160px;
    object-fit: cover;
  }
}

</style>
