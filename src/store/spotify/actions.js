import {
    FETCH_PLAYLISTS
} from '../actions.type'
import {
    SET_PLAYLISTS
} from '../mutations.type'


const actions = {
    async [FETCH_PLAYLISTS] (context) {
        context.commit(SET_PLAYLISTS, ['hoi','hoi2'])
    },
}

export default actions

  