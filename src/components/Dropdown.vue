<template>
  <div class="input-group">
    <div class="dropdown">
      <button v-if="filter === ''" v-on:click="isOpen = !isOpen">Filter by region <i class="fas fa-sort-down"></i></button>
      <button v-else v-on:click="isOpen = !isOpen">{{filter}} <i class="fas fa-sort-down"></i></button>
      <div class="options" v-bind:class="{ open: isOpen }">
        <button v-for="region in regions" :key="region" v-on:click="selectFilter(region)">{{region}}</button>
        <button v-if="filter !== ''" v-on:click="selectFilter('')">CLEAR FILTER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['regions'],
  data() {
    return {
      filter: '',
      isOpen: false
    }
  },

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
@import '../assets/lib-styles/mixins.scss';

.dropdown {
  @include element;
  width: fit-content;
  min-width: 200px;
  padding: 8px 0;
  z-index: 1;
}

.options {
  @include element;
  display: none;

  &.open {
    position: absolute;
    top: 56px;
    right: 0;
    left: 0;
    width: 100%;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
  }
}

button {
  border: none;
  padding: 8px 25px;
  background: transparent;
  color: var(--text-color);
  text-align: left;
  font-size: 1em;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
