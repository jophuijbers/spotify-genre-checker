<template>
  <div class="track-list">
    <p class="font-weight-bold h3 mb-3">Tracks</p>
    <div v-for="(item,index) in tracks" :key="index" class="track-list__card custom-card d-flex mb-3">
      <img class="track-list__card__image" :src="item.track.album.images[0].url" alt="">
      <div class="d-flex flex-column justify-content-between ml-3">
        <a :href="item.track.external_urls.spotify" target="_blank" class="title text-white h5 font-weight-bold">{{ item.track.name }}</a>
        <div class="details">
          <p class="artist">Artist: <a :href="item.track.artists[0].external_urls.spotify" target="_blank" class="text-white">{{ item.track.artists[0].name }}</a></p>
          <p>
            Genres: <span v-for="(genre,index) in item.genres" :key="index" class="genres">{{ toPascalCase(genre) }}{{ item.genres.length !== index+1 ? ', ' : '' }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utilMixin from "../../mixins/utilMixin";

export default {
  name: "TrackList",
  props: ['tracks'],
  mixins: [utilMixin],
}
</script>

<style scoped>

</style>