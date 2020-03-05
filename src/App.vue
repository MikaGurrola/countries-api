<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Toolbar/>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/">Countries</router-link>
      <router-link to="/country">Country</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>


    
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
