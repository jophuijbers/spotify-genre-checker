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

export default {
  name: 'Home',
  components: {
    LoginButton,
    ItemCard
  },
  methods: {

  },
  async created() {
    await this.$store.dispatch(FETCH_PLAYLISTS)
    console.log(this.playlists);
  },
  computed: {
    ...mapGetters(['playlists'])
  }
}
</script>
