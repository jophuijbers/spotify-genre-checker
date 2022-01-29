<template>
  <div v-if="isLoading" class="playlist p-5">
    <div class="playlist-details custom-card d-flex p-3 mb-5">
      <img class="image" :src="playlist.images[0].url" alt="">
      <div class="d-flex flex-column ml-4">
        <a :href="playlist.owner.external_urls.spotify" target="_blank" class="title text-white font-weight-bold h1">{{ playlist.name }}</a>
        <p class="mt-1">{{ playlist.description }}</p>
        <div class="d-flex mt-auto text-white">
          <a :href="playlist.owner.external_urls.spotify" target="_blank" class="text-white">{{ playlist.owner.display_name }}</a><span class="mx-1">&#8226;</span>
          <p>{{ playlist.followers.total }} followers</p><span class="mx-1">&#8226;</span>
          <p class="">{{ playlist.tracks.items.length }} tracks, {{ totalTime() }}</p>
        </div>
      </div>
    </div>
    <div class="genres w-50 mb-5">
      <p class="font-weight-bold h3 mb-3">Genres</p>
      <div v-for="(genre, index) in top3" :key="genre.name" class="genre custom-card d-flex px-4 py-3 mb-3">
        <p class="rank h1 text-center font-weight-bold">{{ index+1 }}</p>
        <div class="ml-4">
          <p class="h5 font-weight-bold">{{ toPascalCase(genre.name) }}</p>
          <p>{{ `${genre.count} out of ${tracks.length}` }} tracks</p>
        </div>
        <p class="h1 font-weight-bold ml-auto">{{ Math.round(genre.count / tracks.length * 100) }}%</p>
      </div>
    </div>
    <div class="tracks">
      <p class="font-weight-bold h3 mb-3">Tracks</p>
      <div v-for="(item,index) in tracks" :key="index" class="track custom-card d-flex mb-3 p-2">
        <img class="image" :src="item.track.album.images[0].url" alt="">
        <div class="d-flex flex-column justify-content-between ml-3">
          <a :href="item.track.external_urls.spotify" target="_blank" class="title text-white h5 font-weight-bold">{{ item.track.name }}</a>
          <div class="details">
            <p class="artist">Artist: {{ item.track.artists[0].name }}</p>
            <p>
              Genres: <span v-for="(genre,index) in item.genres" :key="index" class="genres">{{ toPascalCase(genre) }}{{ item.genres.length !== index+1 ? ', ' : '' }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FETCH_PLAYLIST} from "../store/actions.type";
import {mapGetters} from "vuex";

export default {
  name: "Playlist",
  components: {},
  data() {
    return {
      isLoading: false,
      tracks: [],
      top3: []
    }
  },
  methods: {
    totalTime() {
      let total = 0
      this.tracks.forEach(track => {
        total += track.track.duration_ms / 1000
      })
      let hours = Math.floor(total / 3600);
      total %= 3600;
      let minutes = Math.floor(total / 60);
      return `${hours} hr ${minutes} min`
    },
    toPascalCase(s) {
      return s.replace(/(\w)(\w*)/g,
        function(g0,g1,g2) {
          return g1.toUpperCase() + g2.toLowerCase()
        }
      )
    },
    calcTop3() {
      let counted = []
      this.uniqueGenres().forEach(genre => {
        counted.push({name: genre, count: this.totalGenres().filter(x => x === genre).length})
      })
      counted.sort((a, b) => {
        return b.count - a.count
      })
      console.log(counted)
      return counted.slice(0, 3)
    },
    totalGenres() {
      let genres = []
      this.tracks.forEach(track => {
        track.genres.forEach(genre => {
          genres.push(genre)
        })
      })
      return genres
    },
    uniqueGenres() {
      let genres = []
      this.totalGenres().forEach(genre => {
        if (!genres.includes(genre)) {
          genres.push(genre)
        }
      })
      return genres
    },
  },
  async created() {
    this.isLoading = true
    await this.$store.dispatch(FETCH_PLAYLIST, this.$route.params.id)
    this.tracks = this.playlist.tracks.items
    this.top3 = this.calcTop3()
    this.isLoading = false
  },
  computed: {
    ...mapGetters(['playlist'])
  }
}
</script>

<style lang="scss">

</style>