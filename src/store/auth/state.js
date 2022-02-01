import {getToken, JWT_TOKEN_KEY} from "../../services/local_storage.service";

export default function () {
    return {
        authUrl: `${process.env.VUE_APP_AUTH_URL}?client_id=${process.env.VUE_APP_CLIENT_ID}&redirect_uri=${process.env.VUE_APP_REDIRECT_URL}&response_type=token&scope=${process.env.VUE_APP_SCOPE}`,
        isAuthenticated: getToken(JWT_TOKEN_KEY) !== null
    }
}