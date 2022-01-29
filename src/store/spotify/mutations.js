import {SET_AUTH, SET_PLAYLIST, SET_PLAYLISTS} from "../mutations.type"

const mutations = {
    [SET_AUTH] (state) {
        state.isAuthenticated = true
    },
    [SET_PLAYLISTS] (state, playlists) {
        state.playlists = playlists
    },
    [SET_PLAYLIST] (state, playlist) {
        state.playlist = playlist
    }
}

export default mutations
