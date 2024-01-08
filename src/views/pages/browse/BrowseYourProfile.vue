<template>
    <div>
        <BrowseModel v-slot="{ profiles }">
            <div class="flex p-16">
                <div class="text-white flex flex-col w-full">
                    <div class="text-7xl font-medium">
                        <H6>Quem está assistindo?</H6>
                    </div>
                    <Browse :profiles="profiles" />
                </div>
            </div>
        </BrowseModel>
    </div>
</template>

<script>
    import Browse from '@/components/browse/Browse.vue'
    import BrowseModel from '@/models/browse/BrowseModel.vue'

    export default {
        name: 'browse-your-profile',
        components: { Browse, BrowseModel },
    }
</script>
