<template>
  <div>

    <Search />
    

  </div>

</template>

<script>
import Search from '../components/Search.vue'

export default {
  name: 'Countries',
  props: {
    msg: String
  },
  components: {
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
