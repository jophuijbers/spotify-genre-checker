import {JWT_TOKEN_KEY, saveToken} from "../services/local_storage.service";
import {SET_AUTH} from "../store/mutations.type";

export default {
    methods: {
        async storeTokenFromUrl(url) {
            let token = url.substring(url.indexOf('=')+1, url.indexOf('&'))
            saveToken(JWT_TOKEN_KEY, token)
            await this.$store.commit(SET_AUTH)
        }
    }
}