import {PURGE_AUTH, SET_AUTH} from "../mutations.type"
import {destroyToken, JWT_TOKEN_KEY, saveToken} from "../../services/local_storage.service";

const mutations = {
    [SET_AUTH] (state, token) {
        saveToken(JWT_TOKEN_KEY, token)
        state.isAuthenticated = true
    },
    [PURGE_AUTH] (state) {
        destroyToken(JWT_TOKEN_KEY)
        state.isAuthenticated = false
    }
}

export default mutations
