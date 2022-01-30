<template>
  <div class="home p-5">
    <div class="w-75 d-flex flex-column mx-auto mb-5">
      <p class="text-center h2 font-weight-bold mb-3">Check genres of public playlist</p>
      <b-input placeholder="Paste Spotify url/id here" class="mb-3"></b-input>
      <b-button class="button mx-auto">Find playlist</b-button>
    </div>

    <div class="mb-5">
      <p class="h2 mb-3 font-weight-bold text-center">Your Spotify playlists</p>
      <p v-if="!isAuthenticated" class="h5 text-center">Give access to your Spotify playlists by logging in to your account</p>
      <div v-else class="row justify-content-around">
        <PlaylistCard
            @click.native="$router.push('/playlist/' + playlist.id)"
            v-for="playlist in playlists" :key="playlist.id"
            :name="playlist.name" :image=" playlist.images[0] ? playlist.images[0].url : null"
            class="m-3"
        />
      </div>
    </div>
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
  methods: {
  },
  async created() {
    if (this.isAuthenticated) {
      await this.$store.dispatch(FETCH_PLAYLISTS)
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'playlists'])
  }
}
</script>

<style scoped lang='scss'>
</style>
