<template>
  <div class="countries-page">

    <Search />
    <Dropdown />
    <List :data="countries" />

  </div>

</template>

<script>
import Search from '../components/Search.vue'
import Dropdown from '../components/Dropdown.vue'
import List from '../components/List.vue'

export default {
  name: 'Countries',
  components: {
    Search,
    Dropdown,
    List
  },

  data() {
    return {
      countries: []
    }
  },

  mounted: function() {
    if(localStorage.getItem('countries')) {
      this.countries = [...JSON.parse(localStorage.getItem('countries'))]
      console.log('already have countries:', this.countries)
    } else {
      this.getCountries()
    }
  },

  methods: {

    getCountries: function() {
      console.log('getting countries!')

      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log('data', data)
          this.countries = [...data]
          localStorage.setItem('countries', JSON.stringify(data))
        });

    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.countries-page {
  padding: 22px 16px;

}

</style>
