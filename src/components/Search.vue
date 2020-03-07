<template>
  <div class="search">
    <i class="fas fa-search"></i>
    <input 
      v-model="search"
      @input="searching"
      type="text" 
      placeholder="Search for a country" 
      autocomplete="off" 
      name="search"
    >
  </div>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      search: ''
    }
  },

  methods: {
    searching() {
      this.$emit('search', this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/mixins.scss';
@import '../assets/lib-styles/breakpoints.scss';

.search { 
  color: var(--input-color);
  margin-bottom: 38px;
  @media screen and (min-width: $phone-xl) {
    max-width: 480px;
    margin: 0;
  }
}

i {
  position: absolute;
  top: 16px;
  left: 32px;
}

input {
  @include element;
  font-size: 1em;
  padding: 15px 15px 15px 73px;
  box-shadow: var(--box-shadow);
  background: var(--bg-color);
  border-radius: 6px;
  width: 100%;
  border: none;
  box-sizing: border-box;
  margin: 0;
}

</style>
