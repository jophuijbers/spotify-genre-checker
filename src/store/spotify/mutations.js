import {SET_AUTH, SET_PLAYLISTS, SET_TRACKS} from "../mutations.type"

const mutations = {
    [SET_AUTH] (state) {
        state.isAuthenticated = true
    },
    [SET_PLAYLISTS] (state, playlists) {
        state.playlists = playlists
    },
    [SET_TRACKS] (state, tracks) {
        state.tracks = tracks
    }
}

export default mutations
