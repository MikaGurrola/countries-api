<template>
  <div class="countries-page">

    <Search v-on:search="filterSearch" />
    <Dropdown :regions="regions" v-on:filter="filterRegion"/>
    <List :data="filteredCountries" />

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
      countries: [],
      filteredCountries: [],
      regions: [],
      searchQuery: '',
      regionQuery: '',
      searchIsActive: false,
      regionIsActive: false
    }
  },

  mounted: function() {
    if(localStorage.getItem('countries')) {
      this.countries = [...JSON.parse(localStorage.getItem('countries'))]
      this.filteredCountries = [...this.countries]
      this.getRegions();
      // console.log('already have countries:', this.countries)
    } else {
      this.getCountries()
    }
  },

  methods: {

    getCountries: function() {
      // console.log('getting countries!')

      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          // console.log('data', data)
          this.countries = [...data]
          this.filteredCountries = [...this.countries]
          localStorage.setItem('countries', JSON.stringify(data))
        });

    },

    getRegions: function() {
      const allRegions = this.countries.map(country => country.region).filter(region => region.length)
      allRegions.sort()
      // Sets are a thing?!
      this.regions = [...new Set(allRegions)]
    },


    filterSearch: function(query) {
      if(query.length) {
        this.searchIsActive = true
        this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().indexOf(query.toLowerCase()) > -1)
      } else {
        this.searchIsActive = false
        this.filteredCountries = [...this.countries]
      }


      // this.filteredCountries = query.length ? this.countries.filter(country => country.name.toLowerCase().indexOf(query.toLowerCase()) > -1) : [...this.countries];
    },

    filterRegion: function(region) {
      console.log('hello?', region);
      if(region.length){
        this.filteredCountries = this.countries.filter(country => country.region === region )
        console.log(this.filteredCountries.length);
      } else {
        this.filteredCountries = [...this.countries]
      }
    },

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.countries-page {
  padding: 22px 16px;
}

</style>
