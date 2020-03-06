import Vue from "vue"

Vue.filter("formatPopulation", population => {
    if (!population) return '0'
    population = Number(population).toLocaleString()
    return population
})