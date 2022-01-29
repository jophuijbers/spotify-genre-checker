<template>
  <div class="home">
      <div class="buttonWrapper" v-if="!isAuthenticated">
          <h2 class="my-3" v-if="!isAuthenticated">Login to your Spotify</h2>
          <LoginButton class="LoginButton" v-if="!isAuthenticated" @click.native="login"/>
      </div>
        <div v-if="isAuthenticated" class="items row playlistCardWrapper">
          <div class="headerWrapper mt-4 mb-3 mx-3">
            <h2 class="">Playlist Overview</h2>
          </div>
          <ItemCard @click.native="$router.push('/playlist/' + playlist.id)" v-for="playlist in playlists" :key="playlist.id" :name="playlist.name" :image=" playlist.images[0] ? playlist.images[0].url : null" class="m-3"/>
        </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LoginButton from '@/components/LoginButton.vue'
import ItemCard from '@/components/PlaylistCard.vue'
import {FETCH_PLAYLISTS} from '../store/actions.type'
import authMixin from "../mixins/authMixin"

export default {
  name: 'Home',
  components: {
    LoginButton,
    ItemCard
  },
  mixins: [authMixin],
  methods: {
    login() {
      window.open(this.authUrl, '_self')
    },
  },
  async created() {
    if (this.isAuthenticated) {
      await this.$store.dispatch(FETCH_PLAYLISTS)
    }
    if (this.$route.hash) {
      await this.storeTokenFromUrl(this.$route.hash)
      await this.$store.dispatch(FETCH_PLAYLISTS)
      await this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'authUrl', 'playlists'])
  }
}
</script>

<style scoped lang='scss'>
  h2{
    color: white;
    font-weight: bold;
  }
  .headerWrapper{
    width: 100vw;
  }
  .home {
    min-height: 100vh;
    width: 100vw;
    .playlistCardWrapper{
      display: flex;
      justify-content: space-evenly;
    }
    .buttonWrapper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      align-items: center;
      h2{
        font-weight: bold;
        color: white;
      }
      .LoginButton {
        cursor: pointer;
      }
    }
  }
</style>
