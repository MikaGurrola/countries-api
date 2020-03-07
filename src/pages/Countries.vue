<template>
  <div class="countries-page">

    <Search v-on:search="filterSearch" :searchQuery="filterState.searchQuery" />
    <Dropdown :regions="regions" :selectedRegion="filterState.regionQuery" v-on:filter="filterRegion"/>
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
      filterState: { searchQuery: '', regionQuery: '' }
    }
  },

  mounted: function() {
    if(localStorage.getItem('countries')) {
      this.countries = [...JSON.parse(localStorage.getItem('countries'))]
      this.filteredCountries = [...this.countries]
      this.getRegions()
    } else {
      this.getCountries()
    }
    if(localStorage.getItem('filterState')) {
      this.filterState =  {...JSON.parse(localStorage.getItem('filterState'))}
      this.doFilter()
    }
  },

  methods: {

    getCountries: function() {

      fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.countries = [...data]
          this.filteredCountries = [...this.countries]
          localStorage.setItem('countries', JSON.stringify(data))
          this.getRegions()
        });

    },

    getRegions: function() {
      const allRegions = this.countries.map(country => country.region).filter(region => region.length)
      allRegions.sort()
       this.regions = [...new Set(allRegions)]
    },

    filterSearch: function(query) {
      this.filterState.searchQuery = query
      this.doFilter()
    },

    filterRegion: function(region) {
      this.filterState.regionQuery = region
      this.doFilter()
    },

    doFilter: function() {
      if(this.filterState.searchQuery && this.filterState.regionQuery){
        this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().indexOf(this.filterState.searchQuery.toLowerCase()) > -1).filter(country => country.region === this.filterState.regionQuery )
      } else if(this.filterState.searchQuery && !this.filterState.regionQuery) {
        this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().indexOf(this.filterState.searchQuery.toLowerCase()) > -1)
      } else if(!this.filterState.searchQuery && this.filterState.regionQuery) {
        this.filteredCountries = this.countries.filter(country => country.region === this.filterState.regionQuery )
      } else {
        this.filteredCountries = [...this.countries]
      }
    }

  },

  beforeDestroy: function() {
    localStorage.setItem('filterState', JSON.stringify(this.filterState))
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/breakpoints.scss';

.countries-page {
  padding: 22px 16px;

  @media screen and (min-width: $phone-xl) {
    display: grid;
    grid-template-areas: 
      "search dropdown"
      "list     list"
    ;
    grid-template-columns: 2fr auto;
    grid-gap: 48px;
  }
  

  @media screen and (min-width: $tablet) {
    padding: 48px 16px;
    max-width: 1312px;
    margin: 0 auto;
  }

  .search { grid-area: search; }
  .dropDown { grid-area: dropdown; }
  .list { grid-area: list; }
  

}

</style>
