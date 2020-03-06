<template>
  <div id="app">
    <Toolbar/>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view :key="$route.fullPath"></router-view>
    
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style lang="scss">

@import './assets/lib-styles/main.scss';




</style>
