const getters = {
    isAuthenticated: state => state.isAuthenticated,
    authUrl: state => state.authUrl(),
    playlists: state => state.playlists,
    playlist: state => state.playlist
}

export default getters
