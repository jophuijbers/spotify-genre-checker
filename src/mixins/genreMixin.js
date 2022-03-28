export default {
    methods: {
        calcTop3(tracks) {
            let counted = []
            this.uniqueGenres(this.totalGenres(tracks)).forEach(genre => {
                counted.push({name: genre, count: this.totalGenres(tracks).filter(x => x === genre).length})
            })
            counted.sort((a, b) => {
                return b.count - a.count
            })
            return counted.slice(0, 3)
        },
        uniqueGenres(genres) {
            let uniqueGenres = []
            genres.forEach(genre => {
                if (!uniqueGenres.includes(genre)) {
                    uniqueGenres.push(genre)
                }
            })
            return uniqueGenres
        },
        totalGenres(tracks) {
            let genres = []
            tracks.forEach(track => {
                track.genres.forEach(genre => {
                    genres.push(genre)
                })
            })
            return genres
        },
    }
}