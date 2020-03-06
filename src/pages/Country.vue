<template>
  <div>
    <h1 v-if="err">Sorry, looks like something went wrong...</h1>
    <div v-else class="country-page">
      <button class="button" @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>

      <div class="content">
        <img class="card__flag" v-bind:src="country.flag" :alt="`Flag of ${country.name}`">
        <h1>{{country.name}}</h1>
        <p>Native Name: <span class="light">{{country.nativeName}}</span></p>
        <p>Population: <span class="light">{{country.population | formatPopulation}}</span></p>
        <p>Region: <span class="light">{{country.region}}</span></p>
        <p>Sub Region: <span class="light">{{country.subRegion}}</span></p>
        <p>Capital: <span class="light">{{country.capital}}</span></p>

        <br>

        <p>Top Level Domain: <span class="light" v-for="domain in country.topLevelDomain" :key="domain">{{domain}}</span></p>
        <p>Currencies: <span class="light" v-for="currency in country.currencies" :key="currency.code">{{currency.code}}</span></p>
        <p>Languages: <span class="light" v-for="lang in country.languages" :key="lang.name">{{lang.name}}</span></p>

        <br>

        <div v-if="country.borders && country.borders.length > 0">
          <h3>Border Countries:</h3>
          <div class="borders">
            <router-link 
              v-for="border in country.borders" :key="border"
              :to="{ name: 'country', params: { countryCode: border } }" 
              class="button"
            >{{border}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../filters/formatPopulation"

export default {
  name: 'Country',
  props: ['countryCode'],
  data() {
    return {
      country: {},
      err: false
    }
  },

  mounted: function() {
    this.getCountry()
  },

  methods: {
    getCountry: function() {
      // console.log(`getting country: ${this.countryCode}`);
      // is this the same data that we got from the homeage? 
      fetch('https://restcountries.eu/rest/v2/alpha/' + this.countryCode)
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response.json()
        })
        .then((data) => {
          this.country = data
          console.log(this.country)
        })
        .catch(() => {
          //redirect to 404
          this.err = true
          console.log('Country not found')
        })
    },

    goBack: function() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/lib-styles/mixins.scss';

.country-page {
  padding: 38px 26px;
  display: grid;
  grid-gap: 64px;
}

h1 { 
  margin-bottom: 16px;
  font-size: 1.375em;
  line-height: 1.875em;
  font-weight: 800;
}
p { 
  margin-bottom: 18px;
  
  .light+.light:before {
    content: ", ";
  }
}
h3 { 
  font-size: 1.125em;
  line-height: 1.5em;
  font-weight: 600;
  margin: 20px 0;
}

.button {
  @include element;
  padding: 10px 24px;
  border-radius: 0px;
  width: fit-content;
  font-size: 1em;

  i { margin-right: 5px; }
}

img { margin-bottom: 30px; }

.borders {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  grid-gap: 10px;
  .button { 
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
}


</style>
