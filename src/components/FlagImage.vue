<template>
  <figure v-lazyload class="card__flag">
    <span class="loading"></span>
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
  position: relative;
  img {
    height: 160px;
    object-fit: cover;
    opacity: 0;
  }

  &.loaded img {
    opacity: 1;
  }
  &.loaded .loading {
    opacity: 0;
  }

  
}

.loading {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border: 3px solid var(--text-color);
  border-radius: 50%;
  border-top-color: var(--app-bg);
  animation: spin 1s ease-in-out infinite;
  opacity: 1;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

</style>
