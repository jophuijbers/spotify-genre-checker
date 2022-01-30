import {getToken, JWT_TOKEN_KEY} from "../../services/local_storage.service";

export default function () {
    return {
        authUrl: () => {
            let source_url = 'https://accounts.spotify.com/authorize'
            let client_id = '13b19dabd45144abaa1a7f588db2573e'
            let redirect_url = 'http://localhost:8080'
            let response_type = 'token'
            let scope = 'playlist-read-private playlist-read-collaborative'
            return `${source_url}?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=${response_type}&scope=${scope}`
        },
        isAuthenticated: getToken(JWT_TOKEN_KEY) !== null
    }
}