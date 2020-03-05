import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Country from './pages/Country.vue'
import Countries from './pages/Countries.vue'
import '@fortawesome/fontawesome-free/css/all.css'

const routes = [
  { 
    path: '/', 
    name: 'Countries',
    component: Countries
  },
  { path: '/country', component: Country }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
