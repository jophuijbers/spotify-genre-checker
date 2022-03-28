<template>
  <div class="playlist-details">
    <div class="playlist-details__card custom-card d-flex p-3 mb-5">
      <img class="playlist-details__card__image" :src="playlist.images[0].url" alt="">
      <div class="playlist-details__card__info d-flex flex-column ml-4">
        <a :href="playlist.external_urls.spotify" target="_blank" class="playlist-details__card__info__title text-white font-weight-bold h2">{{ playlist.name }}</a>
        <p class="playlist-details__card__info__description mt-1">{{ playlist.description }}</p>
        <div class="d-flex mt-auto flex-column text-white">
          <p class="">{{ playlist.tracks.total }} tracks, {{ totalPlayTime(playlist) }}</p>
          <p>
            <a :href="playlist.owner.external_urls.spotify" target="_blank" class="text-white">{{ playlist.owner.display_name }}</a>
            <span> &#8226; {{ playlist.followers.total }} followers</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playlistMixin from "../../mixins/playlistMixin";

export default {
  name: "PlaylistDetails",
  props: ['playlist'],
  mixins: [playlistMixin]
}
</script>

<style scoped>

</style>