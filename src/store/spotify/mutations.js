import {SET_AUTH, SET_PLAYLISTS} from "../mutations.type"

const mutations = {
    [SET_AUTH] (state) {
        state.isAuthenticated = true
    },
    [SET_PLAYLISTS] (state, playlists) {
        state.playlists = playlists
    }
}

export default mutations
