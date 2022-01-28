<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import {FETCH_PLAYLISTS} from '../store/actions.type'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
