<template>
  <div class="playlist-grid row justify-content-between">
    <div v-for="playlist in playlists" :key="playlist.id" class="col-lg-3 col-md-4 col-sm-6 mb-3 h-100">
      <div
          @click="goToPlaylist(playlist)"
          class="playlist-grid__card custom-card" role="button"
      >
        <img :src="playlist.images[0].url" class="playlist-grid__card__img">
        <p class="playlist-grid__card__name">{{ playlist.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlaylistGrid",
  props: ['playlists'],
  methods: {
    goToPlaylist(playlist) {
      this.$router.push('/playlist/' + playlist.id)
    }
  }
}
</script>

<style scoped>

</style>