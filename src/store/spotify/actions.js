import ApiService from "../../services/api.service";
import {
    FETCH_PLAYLISTS, FETCH_TRACKS
} from '../actions.type'
import {
    SET_PLAYLISTS, SET_TRACKS
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
    async [FETCH_TRACKS] (context, playlist) {
        ApiService.setHeader()
        try {
            const {data} = await ApiService.get(`/playlists/${playlist}/tracks`)
            let tracks = []
            for (const item of data.items) {
                const { data } = await ApiService.get(`/artists/${item.track.artists[0].id}`)
                item.genres = data.genres
                tracks.push(item)
            }
            context.commit(SET_TRACKS, tracks)
            console.log('fetched')
        } catch ({ response }) {
            console.log(response)
        }
    },
}

export default actions

  