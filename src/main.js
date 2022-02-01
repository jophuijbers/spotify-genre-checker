import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue } from 'bootstrap-vue'

// Setup axios
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = process.env.VUE_APP_API_URL
Vue.prototype.$devMode = true // devmode

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import main.scss
import './styles/main.scss'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
