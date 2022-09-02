<template>
  <div>
    <MoviesCatalog  v-slot="{sections, movies}">
      <div v-for="section in sections">
        <h4 class="section">{{section.title}}</h4>
        <movies-section :movies="movies"/>
      </div>
    </MoviesCatalog>
  </div>
</template>

<script>

import MoviesSection from '../components/MoviesSection.vue'
import MoviesCatalog from '../models/catalog/MoviesCatalog.vue'

export default {
  name: 'movies',
  components: {
    MoviesSection,
    MoviesCatalog
  },
}
</script>

<style>
.section{
  color: white;
  padding-left: 6vh
}
</style>