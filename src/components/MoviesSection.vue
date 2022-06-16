<template>
    <div>
        <div>
            <Carousel :per-page="6">
                <slide v-for="movie in movies">
                    <b-card  no-body
                        border-variant="dark" 
                        :img-src="movie.banner"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="background-color: black;"
                        class="mb-2 toucheble cover"
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
.cover{
  background-repeat: no-repeat;
  background-size: cover;
}
</style>