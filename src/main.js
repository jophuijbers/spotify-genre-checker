import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


// Setup axios
Vue.prototype.$axios = axios
Vue.prototype.$axios.defaults.baseURL = 'https://api.spotify.com/v1'
Vue.prototype.$devMode = true // devmode

Vue.config.productionTip = false

// Import main.scss
import './styles/main.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
