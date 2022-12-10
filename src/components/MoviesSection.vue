<template>
  <div>
    <div>
      <Carousel :per-page="6" :paginationEnabled="false" :spacePadding='50'>
        <slide  v-for="movie in movies" class="spacing-slide">
            <div class="swiper-wrapper">
                <b-img :src="movie.banner" fluid-grow alt="Banner Movie"  class="bind-b-img swiper-slide"></b-img>
            </div>
        </slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default{
  components: {Carousel, Slide},
  props:{
      movies: {type: Array},
      sections: {type: Array}
  }
}
</script>

<style>
.swiper-slide { 
  transition: 250ms all;
}
.swiper-slide:hover {
  z-index: 1 !important;
  transform: scale(1.3);
}
.bind-b-img{
  height: 19vh;
  object-fit: cover;
}
.swiper-wrapper{
  padding: 0px 8px 30px 0px;
}
.spacing-slide{
  width: 100%;
  position: relative;
  margin: 20px 0;
}
</style>