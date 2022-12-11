<template>
    <div>
        <MainCatalog v-slot="{ user, sections, movies }">
            <div v-for="section in sections">
                <div class="flex flex-row">
                    <CatalogTitle :section="section.title" />
                    <H4
                        class="pl-1 text-white text-base"
                        v-show="section.id === '0001'"
                        >{{ user.name }}</H4
                    >
                </div>
                <movies-section :movies="movies" />
            </div>
        </MainCatalog>
    </div>
</template>

<script>
    import CatalogTitle from '@/components/catalog-title/CatalogTitle.vue'
    import MoviesSection from '../components/MoviesSection.vue'
    import MainCatalog from '../models/catalog/MainCatalog.vue'

    export default {
        name: 'HomeView',
        components: {
            MoviesSection,
            MainCatalog,
            CatalogTitle,
        },
    }
</script>

<style>
    .section {
        color: white;
        padding-left: 6vh;
    }
</style>
