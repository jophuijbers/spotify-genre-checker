import ApiService from "../../services/api.service";
import {
    FETCH_PLAYLISTS
} from '../actions.type'
import {
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
}

export default actions

  