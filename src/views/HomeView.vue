<template>
  <div class="home">
    <h1>Séries</h1>
    <movies-section :movies="movies" :sections="sections"/>

    <h1>Filmes</h1>
    <movies-section :movies="movies" :sections="sections"/>

    <h1>Documentarios</h1>
    <movies-section :movies="movies" :sections="sections"/>
  </div>
</template>

<script>

import MoviesSection from '../components/MoviesSection.vue'

export default {
  name: 'HomeView',
  components: {
    MoviesSection
  },
  data() {
    return{
      movies: [
        {id: 1, banner: "https://img.elo7.com.br/product/original/2960190/stranger-things-painel-festa-1x0-65cm-crianca.jpg"},
        {id: 2, banner: "https://cafecomnerd.com.br/wp-content/uploads/2019/09/Supernatural-Cartaz-Ultima-Temporada.jpg"},
        {id: 3, banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ833Gc6L8gwRE4R-nVO7OSorsSed-LiHUXFw&usqp=CAU"},
        {id: 1, banner: "https://img.elo7.com.br/product/original/2960190/stranger-things-painel-festa-1x0-65cm-crianca.jpg"},
        {id: 2, banner: "https://cafecomnerd.com.br/wp-content/uploads/2019/09/Supernatural-Cartaz-Ultima-Temporada.jpg"},
        {id: 3, banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ833Gc6L8gwRE4R-nVO7OSorsSed-LiHUXFw&usqp=CAU"},
        {id: 1, banner: "https://img.elo7.com.br/product/original/2960190/stranger-things-painel-festa-1x0-65cm-crianca.jpg"},
        {id: 2, banner: "https://cafecomnerd.com.br/wp-content/uploads/2019/09/Supernatural-Cartaz-Ultima-Temporada.jpg"},
        {id: 3, banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ833Gc6L8gwRE4R-nVO7OSorsSed-LiHUXFw&usqp=CAU"}
      ],
      sections: [
        {id: 1, name: "Terror"}, 
        {id: 2, name: "Animação"}, 
        {id: 3, name: "Drama"}, 
        {id: 4, name: "Romance"}, 
        {id: 5, name: "Suspense"}, 
        {id: 6, name: "Ficção Científica"}, 
      ]
    }
  }
}
</script>
