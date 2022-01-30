import Vue from 'vue'
import Vuex from 'vuex'
import spotify from './spotify'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spotify,
    auth
  }
})
