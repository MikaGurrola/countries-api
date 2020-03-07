<template>
  <ul class="list">
    <li class="list__item" v-for="country in data" :key="country.name">
      <router-link v-if="country" :to="{ name: 'country', params: { countryCode: country.alpha3Code } }">
        <div class="card">
          <FlagImage :country="country" />
          <div class="card__content">
            <h3>{{country.name}}</h3>
            <ul class="stats">
              <li class="stat">Population: <span class="light">{{country.population | formatPopulation}}</span> </li>
              <li class="stat">Region: <span class="light">{{country.region}}</span> </li>
              <p>Capital: <span v-if="country.capital" class="light">{{country.capital}}</span> <span v-else class="light">None</span></p>
            </ul>
          </div>
        </div>
      </router-link>
    </li>
    <li v-if="!data.length">
      <p>
        <b>Whoops</b> <br>
        No Countries found
      </p>
    </li>
  </ul>
</template>

<script>
import "../filters/formatPopulation"
import FlagImage from './FlagImage.vue'

export default {
  name: 'List',
  props: ['data'],

  components: {
    FlagImage
  },

}
</script>

<style scoped lang="scss">
@import '../assets/lib-styles/mixins.scss';
@import '../assets/lib-styles/breakpoints.scss';

ul { list-style: none; }

.list {
  padding: 30px 15px;
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  @media screen and (min-width: $phone-xl) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0;
  }

  @media screen and (min-width: $tablet) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: $desktop) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 75px;
  }

  &__item {
    @include element;
    overflow: hidden;
    max-width: 264px;

    a {
      height: 100%;
      display: inline-block;
      box-sizing: border-box;
    }
  }
}


.card {
  display: grid;
  height: 100%;

  &__content {
    padding: 25px 25px 40px 25px;
    align-self: end;

    ul {
      display: grid;
      grid-gap: 8px;
    }
  }
}

</style>
