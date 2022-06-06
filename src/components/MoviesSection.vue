<template>
    <div>
        <div v-for="section in sections" :key="section.id">
            <h3>{{section.name}}</h3>
        
            <Carousel :per-page="6">
                <slide v-for="movie in movies" :key="movie.id">
                    <b-card  no-body
                        border-variant="dark" 
                        align="center"
                        :img-src="movie.banner"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem; background-color: black;"
                        class="mb-2 toucheble"
                    >
                    </b-card>
                </slide>
            </Carousel>
        </div>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default{
    components: {Carousel, Slide},
    props:{
        movies: {type: Array},
        sections: {type: Array}
    }
}
</script>

<style>
.toucheble:hover { 
  margin-left: 0;
  margin-top: 0;
  height: 200px;
  width: 400px;
  opacity: 1;
}
</style>