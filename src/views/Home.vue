<template>
  <div class="home">
    <LoginButton v-if="!isAuthenticated" @click.native="login"/>
    <div v-if="isAuthenticated" class="items row">
      <ItemCard @click.native="$router.push('/playlist/' + playlist.id)" v-for="playlist in playlists" :key="playlist.id" :name="playlist.name" :image="playlist.images[0].url" class="m-3"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LoginButton from '@/components/LoginButton.vue'
import ItemCard from '@/components/ItemCard.vue'
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
