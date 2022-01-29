const getters = {
    isAuthenticated: state => state.isAuthenticated,
    authUrl: state => state.authUrl(),
    playlists: state => state.playlists,
    tracks: state => state.tracks
}

export default getters
