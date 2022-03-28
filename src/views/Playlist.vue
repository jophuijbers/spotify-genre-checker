<template>
  <div class="playlist-page">
    <Loader v-if="isLoading" />

    <div v-else class="playlist p-3 p-sm-5">
      <div class="row">
        <div class="col-6">
          <PlaylistDetails :playlist="playlist" />
          <Genres :tracks="playlist.tracks.items" class="mb-5" />
        </div>

        <div class="col-6">
          <div class="graphCard custom-card mb-5">
            <div class="fakeGraph"></div>
          </div>
        </div>
      </div>

      <TrackList :tracks="playlist.tracks.items" />
    </div>
  </div>
</template>

<script>
import {FETCH_PLAYLIST} from "../store/actions.type";
import {mapGetters} from "vuex";
import Loader from "../components/Loader";
import TrackList from "../components/playlist/TrackList";
import Genres from "../components/playlist/Genres";
import PlaylistDetails from "../components/playlist/PlaylistDetails";

export default {
  name: "Playlist",
  components: {PlaylistDetails, Genres, TrackList, Loader},
  data() {
    return {
      isLoading: false
    }
  },
  async created() {
    this.isLoading = true
    await this.$store.dispatch(FETCH_PLAYLIST, this.$route.params.id)
    this.isLoading = false
  },
  computed: {
    ...mapGetters(['playlist'])
  }
}
</script>

<style lang="scss">

</style>