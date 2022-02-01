import Vue from 'vue'
import Vuex from 'vuex'
import playlists from './playlists'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    playlists,
    auth
  }
})
