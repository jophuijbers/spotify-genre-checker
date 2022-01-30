
import {LOGIN, LOGOUT} from "../actions.type";
import {PURGE_AUTH, SET_AUTH} from "../mutations.type";

const actions = {
    async [LOGIN] (context, token) {
        context.commit(SET_AUTH, token)
    },
    async [LOGOUT] (context) {
        context.commit(PURGE_AUTH)
    },
}

export default actions

  