import { SET_PLAYLISTS } from "../mutations.type"

const mutations = {
    [SET_PLAYLISTS] (state, playlists) {
        state.playlists = playlists
    }
}

export default mutations
