import { shallowMount, createLocalVue } from '@vue/test-utils'
import List from '../../src/components/List'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('List', () => {
  const wrapper = shallowMount(List, {
    localVue,
    router,
    propsData: {
      data: [
        {
          "name": "Honduras",
          "alpha3Code": "HND",
          "capital": "Tegucigalpa",
          "population": 8576532,
          "flag": "https://restcountries.eu/data/hnd.svg"
        },

        {
          "name": "Iceland",
          "alpha3Code": "ISL",
          "capital": "Reykjavík",
          "population": 334300,
          "flag": "https://restcountries.eu/data/isl.svg"
        },

        {
          "name": "Lao People's Democratic Republic",
          "alpha3Code": "LAO",
          "capital": "Vientiane",
          "population": 6492400,
          "flag": "https://restcountries.eu/data/lao.svg"
        }
      ]
    }
  })

  it('Contains a list of countries', () => {
    expect(wrapper.findAll('.list__item').length).toEqual(3)
  })



})