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
            if (response.data.error.message === 'The access token expired') {
                window.open(context.rootGetters.authUrl, '_self')
            }
        }
    },
    async [FETCH_PLAYLIST] (context, playlist) {
        ApiService.setHeader()
        try {
            const {data} = await ApiService.get(`/playlists/${playlist}`)

            let tracks = data.tracks
            let offset = 0

            while (tracks.next !== null) {
                offset += 100
                const {data} = await ApiService.getWithParams(`/playlists/${playlist}/tracks`, {
                    offset: offset
                })
                tracks.items = tracks.items.concat(data.items)
                tracks.next = data.next
            }

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