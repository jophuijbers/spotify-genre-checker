<template>
  <div class="genres">
    <p class="font-weight-bold h3 mb-3">Genres</p>
    <div v-for="(genre, index) in top3" :key="genre.name" class="genres__card custom-card d-flex px-4 mb-3">
      <p class="genres__card__rank h1 text-center font-weight-bold">{{ index+1 }}</p>
      <div class="ml-4">
        <p class="h5 font-weight-bold">{{ toPascalCase(genre.name) }}</p>
        <p>{{ `${genre.count} out of ${tracks.length}` }} tracks</p>
      </div>
      <p class="h1 font-weight-bold ml-auto">{{ Math.round(genre.count / tracks.length * 100) }}%</p>
    </div>
  </div>
</template>

<script>
import utilMixin from "../../mixins/utilMixin";
import genreMixin from "../../mixins/genreMixin";

export default {
  name: "Genres",
  props: ['tracks'],
  mixins: [utilMixin, genreMixin],
  computed: {
    top3() {
      return this.calcTop3(this.tracks)
    }
  }
}
</script>

<style scoped>

</style>