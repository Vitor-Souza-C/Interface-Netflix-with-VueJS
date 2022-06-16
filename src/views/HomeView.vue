<template>
  <div>
    <div v-for="section in sections">
      <h4 class="section">{{section.title}} <span v-show="section.id === '0001'">{{user.name}}</span></h4>
      <movies-section :movies="movies"/>
    </div>
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
      user: {id:'198CN78', name: 'Vitor'},
      sections: [
        {id: '0000', title:'Populares na Vueflix'},
        {id: '0001', title:'Continuar assistindo como' },
        {id: '0002', title:'Mais assistidos'},
        {id: '0003', title:'Para os que apreciam um bom terror'},
        {id: '0004', title:'Para os apaixonados'},
        {id: '0005', title:'Ciência e suas diversidades'},
        {id: '0006', title:'Para tirar o fôlego'},
        {id: '0007', title:'Melhores comêdias'},
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
