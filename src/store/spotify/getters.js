const getters = {
    isAuthenticated: state => state.isAuthenticated,
    authUrl: state => state.authUrl(),
    playlists: state => state.playlists,
}

export default getters
