<template>
  <div class="playlist p-5">
    <div class="playlist-details d-flex p-3 mb-5">
      <img class="image" :src="playlist.images[0].url" alt="">
      <div class="ml-4">
        <p class="title font-weight-bold h2">{{ playlist.name }}</p>
        <p>{{ playlist.description }}</p>
        <p class="">{{ playlist.tracks.items.length }} tracks</p>
        <p>{{ playlist.followers.total }} followers</p>
      </div>
    </div>
    <div class="genres w-50 mb-5">
      <p class="font-weight-bold h3 mb-3">Genres</p>
      <div v-for="(genre, index) in top3" :key="genre.name" class="genre d-flex px-4 py-3 mb-3">
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
      <div v-for="(item,index) in tracks" :key="index" class="track d-flex mb-3 p-2">
        <img class="image" :src="item.track.album.images[0].url" alt="">
        <div class="d-flex flex-column justify-content-between ml-3">
          <p class="title h5 font-weight-bold">{{ item.track.name }}</p>
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
      tracks: [],
      top3: []
    }
  },
  methods: {
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
    await this.$store.dispatch(FETCH_PLAYLIST, this.$route.params.id)
    this.tracks = this.playlist.tracks.items
    this.top3 = this.calcTop3()
    console.log(this.playlist)
  },
  computed: {
    ...mapGetters(['playlist'])
  }
}
</script>

<style lang="scss">
@use '../styles/base/variables.scss' as *;

.playlist {
  .playlist-details {
    background-color: $default-cardColor;
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
    border-radius: 16px;
    .image {
      width: 200px;
      border-radius: 16px;
    }
  }
  .genres {
    .genre {
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
      background-color: $default-cardColor;
      border-radius: 16px;
      .rank {
        width: 25px;
      }
    }
  }
  .tracks {
    .track {
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
      background-color: $default-cardColor;
      color: white;
      border-radius: 20px;
      .image {
        max-height: 100px;
        border-radius: 16px;
      }
    }
  }
}
</style>