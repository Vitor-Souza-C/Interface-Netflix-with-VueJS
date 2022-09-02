<template>
  <div>
    <MainCatalog v-slot="{user, sections, movies}">
      <div v-for="section in sections">
        <h4 class="section">{{section.title}} <span v-show="section.id === '0001'">{{user.name}}</span></h4>
        <movies-section :movies="movies"/>
      </div>
    </MainCatalog>
  </div>
</template>

<script>

import MoviesSection from '../components/MoviesSection.vue'           
import MainCatalog from '../models/catalog/MainCatalog.vue'

export default {
  name: 'HomeView',
  components: {
    MoviesSection,
    MainCatalog
}
}
</script>

<style>
.section{
  color: white;
  padding-left: 6vh
}
</style>
