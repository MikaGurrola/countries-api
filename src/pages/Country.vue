<template>
  <div class="country-page">
    <button class="button" @click="goBack"><i class="fas fa-arrow-left"></i> Back</button>

    <div class="country">
      <div class="country__flag">
        <img v-bind:src="country.flag" :alt="`Flag of ${country.name}`">
      </div>
      <div class="country__content">
        <h1 class="country-name">{{country.name}}</h1>
        <div class="stats">
          <p>Native Name: <span class="light">{{country.nativeName}}</span></p>
          <p>Population: <span class="light">{{country.population | formatPopulation}}</span></p>
          <p>Region: <span class="light">{{country.region}}</span></p>
          <p>Sub Region: <span class="light" v-if="country.subRegion">{{country.subRegion}}</span> <span v-else class="light">None</span></p>
          <p>Capital: <span v-if="country.capital" class="light">{{country.capital}}</span> <span v-else class="light">None</span></p>
        </div>

        <div class="etc">
          <p>Top Level Domain: <span class="light" v-for="domain in country.topLevelDomain" :key="domain">{{domain}}</span></p>
          <p>Currencies: <span class="light" v-for="currency in country.currencies" :key="currency.code">{{currency.code}}</span></p>
          <p>Languages: <span class="light" v-for="lang in country.languages" :key="lang.name">{{lang.name}}</span></p>
        </div>

        <div class="country-borders">
          <h3>Border Countries:</h3>
          <div class="borders" v-if="borders && borders.length > 0">
            <router-link 
              v-for="border in borders" :key="border.name"
              :to="{ name: 'country', params: { countryCode: border.alpha3Code } }" 
              class="button"
            >{{border.name}}</router-link>
          </div>
          <div v-else class="borders"><span>None</span></div>
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
      countries: [],
      borders: []
    }
  },

  mounted: function() {
    this.getCountry()
  },

  methods: {
    getCountry: function() {
      this.countries = [...JSON.parse(localStorage.getItem('countries'))];
      this.country = this.countries.find(country => country.alpha3Code === this.countryCode);
      this.getBorders();
    },

    getBorders: function() {
      this.borders = this.country.borders.map(borderCountry => { 
        return this.countries.find(country => country.alpha3Code === borderCountry);
      });
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
@import '../assets/lib-styles/breakpoints.scss';

.country-page {
  padding: 38px 26px;
  display: grid;
  grid-gap: 64px;

  @media screen and (min-width: $tablet) {
    padding: 80px 16px;
    max-width: 1312px;
    margin: 0 auto;
    grid-gap: 80px;
  }
}

.country {
   @media screen and (min-width: $mobile-xl) {
    grid-template-columns: minmax(300px,400px) 1fr;
   }
  @media screen and (min-width: $tablet) {
    display: grid;
    grid-gap: 60px;
  }

  @media screen and (min-width: $desktop) {
    grid-template-columns: minmax(400px,560px) 1fr;
    grid-gap: 120px;
  }

  &__flag {
    height: 230px;
    margin-bottom: 50px;
    img { height: 230px; object-fit: cover; }
    @media screen and (min-width: $tablet) {
      margin-bottom: 0;
      height: 400px;
      img { height: 400px }
    }
  }


  &__content {
    @media screen and (min-width: $mobile-xl) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
        "name name"
        "stats etc"
        "borders borders"
      ;
    }

    @media screen and (min-width: $tablet) {
      grid-gap: 20px 50px;
      height: fit-content;
      margin: auto 0;
    }
  }



  .country-name { grid-area: name; }
  .stats { 
    grid-area: stats;
    margin-bottom: 40px;
  }
  .etc { 
    grid-area: etc;
    margin-bottom: 40px;
    @media screen and (min-width: $tablet) {
      margin: 0;
    }
  }

  .country-borders {
    grid-area: borders; 
    @media screen and (min-width: $desktop) {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 15px;
    }
  }
}

h1 { 
  margin-bottom: 16px;
  font-size: 1.375em;
  line-height: 1.875em;
  font-weight: 800;

  @media screen and (min-width: $tablet) {
    margin-bottom: 0;
  }
}
p { 
  margin-bottom: 16px;
  
  .light+.light:before {
    content: ", ";
  }
}
h3 { 
  font-size: 1.125em;
  line-height: 1.5em;
  font-weight: 600;
  margin: 16px 0;
  @media screen and (min-width: $tablet) {
    margin: 5px 0;
  }
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
  align-items: center;
  grid-gap: 10px;
  .button { 
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
}


</style>
