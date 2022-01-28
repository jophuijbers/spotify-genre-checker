<template>
  <div class="home">
    <ItemCard/>
    <LoginButton/>
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
