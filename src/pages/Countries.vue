<template>
  <div class="countries-page">

    <Search />
    <Dropdown />

  </div>

</template>

<script>
import Search from '../components/Search.vue'
import Dropdown from '../components/Dropdown.vue'

export default {
  name: 'Countries',
  components: {
    Search,
    Dropdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.countries-page {
  padding: 22px 16px;

}

</style>
