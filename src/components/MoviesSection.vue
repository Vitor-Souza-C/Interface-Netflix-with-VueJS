<template>
    <div class="relative px-10">
        <div class="overflow-hidden" ref="emblaRef">
            <div class="flex">
                <div
                    v-for="movie in movies"
                    :key="movie.id"
                    class="flex-none w-1/6 pr-2"
                >
                    <img
                        :src="movie.banner"
                        class="w-full h-[19vh] object-cover transition-transform duration-250 hover:scale-110 hover:z-10 relative cursor-pointer"
                        alt="Banner Movie"
                    />
                </div>
            </div>
        </div>
        <button
            @click="scrollPrev"
            class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Anterior"
        >
            <ChevronLeft class="w-5 h-5" />
        </button>
        <button
            @click="scrollNext"
            class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/90 transition-colors z-10"
            aria-label="Próximo"
        >
            <ChevronRight class="w-5 h-5" />
        </button>
    </div>
</template>

<script>
    import emblaCarouselVue from 'embla-carousel-vue'
    import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

    export default {
        components: { ChevronLeft, ChevronRight },
        props: {
            movies: { type: Array },
            sections: { type: Array },
        },
        setup() {
            const [emblaRef, emblaApi] = emblaCarouselVue({
                loop: true,
                align: 'start',
            })

            function scrollPrev() {
                emblaApi.value?.scrollPrev()
            }
            function scrollNext() {
                emblaApi.value?.scrollNext()
            }

            return { emblaRef, scrollPrev, scrollNext }
        },
    }
</script>
