export default {
    methods: {
        totalPlayTime(playlist) {
            let total = 0
            playlist.tracks.items.forEach(track => {
                total += track.track.duration_ms / 1000
            })
            let hours = Math.floor(total / 3600);
            total %= 3600;
            let minutes = Math.floor(total / 60);
            return `${hours} hr ${minutes} min`
        }
    }
}