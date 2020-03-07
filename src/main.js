import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Country from './pages/Country.vue'
import Countries from './pages/Countries.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import LazyLoadDirective from "./directives/LazyLoadDirective";

Vue.directive("lazyload", LazyLoadDirective);

const routes = [
  { 
    path: '/', 
    name: 'countries',
    component: Countries
  },
  { 
    path: '/country/:countryCode', 
    name: 'country',
    component: Country,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
