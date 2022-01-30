<template>
  <div class="home p-5">
    <div v-if="isAuthenticated">
      <div class="w-75 d-flex flex-column mx-auto mb-5">
        <p class="text-center h2 font-weight-bold mb-3">Check genres of public playlist</p>
        <div v-if="isAuthenticated" class="d-flex flex-column">
          <b-input v-model="searchPlaylist" placeholder="Paste Spotify url/id here" class="mb-3"></b-input>
          <b-button @click="goToPlaylist" class="button mx-auto">Find playlist</b-button>
        </div>
      </div>

      <div class="mb-5">
        <p class="h2 mb-3 font-weight-bold text-center">Your Spotify playlists</p>
        <div v-if="isAuthenticated" class="row justify-content-around">
          <PlaylistCard
              @click.native="$router.push('/playlist/' + playlist.id)"
              v-for="playlist in playlists" :key="playlist.id"
              :name="playlist.name" :image=" playlist.images[0] ? playlist.images[0].url : null"
              class="m-3"
          />
        </div>
      </div>
    </div>
    <p v-else class="h3 w-50 mx-auto font-weight-bold text-center">In order to use this website you need to log in to your Spotify account.</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PlaylistCard from '@/components/PlaylistCard.vue'
import {FETCH_PLAYLISTS} from '../store/actions.type'
import authMixin from "../mixins/authMixin"

export default {
  name: 'Home',
  components: {
    PlaylistCard
  },
  mixins: [authMixin],
  data() {
    return {
      searchPlaylist: ''
    }
  },
  methods: {
    async goToPlaylist() {
      if (this.searchPlaylist.includes('http')) {
        // let id = this.searchPlaylist.substring(this.searchPlaylist.indexOf('playlists/')+1, this.searchPlaylist.indexOf('&'))
        // console.log(id)
        // console.log(this.searchPlaylist.split('playlists/'))
        let split = this.searchPlaylist.split('/')
        let index = split.indexOf('playlist')+1
        let id = split[index].substring(0, split[index].indexOf('?'))
        await this.$router.push('/playlist/' + id)
      }
    }
  },
  async created() {
    if (this.isAuthenticated) {
      await this.$store.dispatch(FETCH_PLAYLISTS)
    } else {
      window.open(this.authUrl, '_self')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'authUrl', 'playlists'])
  }
}
</script>

<style scoped lang='scss'>
</style>
