<template>
    <div>
        <SeriesCatalog v-slot="{ sections, movies }">
            <div v-for="section in sections">
                <CatalogTitle :section="section.title" />
                <movies-section :movies="movies" />
            </div>
        </SeriesCatalog>
    </div>
</template>

<script>
    import CatalogTitle from '@/components/catalog-title/CatalogTitle.vue'
    import MoviesSection from '../../components/MoviesSection.vue'
    import SeriesCatalog from '../../models/catalog/SeriesCatalog.vue'

    export default {
        name: 'series',
        components: {
            MoviesSection,
            SeriesCatalog,
            CatalogTitle,
        },
    }
</script>
