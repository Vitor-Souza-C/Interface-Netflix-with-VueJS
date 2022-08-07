<template>
  <div>
    <SeriesCatalog v-slot="{sections, movies}">
      <div v-for="section in sections">
        <h4 class="section">{{section.title}}</h4>
        <movies-section :movies="movies"/>
      </div>
    </SeriesCatalog>
  </div>
</template>

<script>

import MoviesSection from '../components/MoviesSection.vue'
import SeriesCatalog from '../models/catalog/SeriesCatalog.vue'

export default {
  name: 'series',
  components: {
    MoviesSection,
    SeriesCatalog
  },
}
</script>

<style>
.section{
  color: white
}
</style>