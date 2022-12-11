<template>
    <div>
        <MoviesCatalog v-slot="{ sections, movies }">
            <div v-for="section in sections">
                <CatalogTitle :section="section.title" />
                <movies-section :movies="movies" />
            </div>
        </MoviesCatalog>
    </div>
</template>

<script>
    import MoviesSection from '../../components/MoviesSection.vue'
    import MoviesCatalog from '../../models/catalog/MoviesCatalog.vue'
    import CatalogTitle from '../../components/catalog-title/CatalogTitle.vue'

    export default {
        name: 'movies',
        components: {
            MoviesSection,
            MoviesCatalog,
            CatalogTitle,
        },
    }
</script>
