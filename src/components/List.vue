<template>
  <ul class="list">
    <li class="list__item" v-for="country in data" :key="country.name">
      <router-link v-if="country" :to="{ name: 'country', params: { countryCode: country.alpha3Code } }">
        <div class="card">
          <img class="card__flag" v-bind:src="country.flag" :alt="`Flag of ${country.name}`">
          <div class="card__content">
            <h3>{{country.name}}</h3>
            <ul class="stats">
              <li class="stat">Population: <span class="light">{{country.population | formatPopulation}}</span> </li>
              <li class="stat">Region: <span class="light">{{country.region}}</span> </li>
              <li class="stat">Capital: <span class="light">{{country.capital}}</span> </li>
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

export default {
  name: 'List',
  props: ['data'],

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
  @media screen and (min-width: $mobile-xl) {
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
  }
}


.card {
  display: grid;

  &__content {
    padding: 30px 25px 40px 25px;
    h3 {
      font-size: 1.125em;
      line-height: 1.5em;
      margin-bottom: 22px;
    }

    ul {
      display: grid;
      grid-gap: 12px;
    }
  }
}

</style>
