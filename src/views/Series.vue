<template>
  <div>
    <div v-for="section in sections">
      <h4 class="section">{{section.title}}</h4>
      <movies-section :movies="movies"/>
    </div>
  </div>
</template>

<script>

import MoviesSection from '../components/MoviesSection.vue'

export default {
  name: 'series',
  components: {
    MoviesSection
  },
  data() {
    return{
      //user: {id:'198CN78', name: 'Vitor'},
      sections: [
        {id: '0000', title:'Terror'},
        {id: '0001', title:'Ação' },
        {id: '0002', title:'Animação'},
        {id: '0003', title:'Ficção Cientifica'},
        {id: '0004', title:'Romance'},
        {id: '0005', title:'Guerra'},
      ],
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
      ]
    }
  }
}
</script>

<style>
.section{
  color: white
}
</style>