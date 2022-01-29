import ApiService from "../../services/api.service";
import {
    FETCH_PLAYLIST,
    FETCH_PLAYLISTS
} from '../actions.type'
import {
    SET_PLAYLIST,
    SET_PLAYLISTS
} from '../mutations.type'

const actions = {
    async [FETCH_PLAYLISTS] (context) {
        ApiService.setHeader()
        try {
            const {data} = await ApiService.get('/me/playlists')
            context.commit(SET_PLAYLISTS, data.items)
        } catch ({ response }) {
            console.log(response)
        }
    },
    async [FETCH_PLAYLIST] (context, playlist) {
        ApiService.setHeader()
        try {
            const {data} = await ApiService.get(`/playlists/${playlist}`)
            for (const item of data.tracks.items) {
                const { data } = await ApiService.get(`/artists/${item.track.artists[0].id}`)
                item.genres = data.genres
            }
            context.commit(SET_PLAYLIST, data)
        } catch ({ response }) {
            console.log(response)
        }
    }
}

export default actions

  