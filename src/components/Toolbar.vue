<template>
<div class="toolbar">
  <div class="toolbar__inner">
    <p class="title">Where in the world?</p>
    <button v-on:click="toggleTheme"> 
      <i v-if="darkTheme" class="fas fa-moon"></i>
      <i v-else class="far fa-moon"></i> 
      Dark Mode 
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Toolbar',

  data() {
    return {
      darkTheme: false
    }
  },

  methods: {
    toggleTheme: function() {
      this.darkTheme = !this.darkTheme
      this.darkTheme ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/breakpoints.scss';
@import '../assets/lib-styles/mixins.scss';

.toolbar {
  padding: 12px;
  box-shadow: var(--box-shadow);
  background: var(--bg-color);

  @media screen and (min-width: $tablet) {
    padding: 20px 16px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;  
    align-items: center;

    @media screen and (min-width: $tablet) {
      max-width: 1280px;
      margin: 0 auto;
    }
  }

  .title {
    font-size: 1em;
    line-height: 20px;
    font-weight: 800;
    @media screen and (min-width: $tablet) {
      font-size: 1.2em;
    }
  }


  button {
    border: none;
    padding: 10px;
    font-size: 1em;
    font-weight: 300;
    background: var(--bg-color);
    color: var(--text-color);
    font-weight: 600;
    .fa-moon {margin-right: 5px;}
  }
}


</style>
