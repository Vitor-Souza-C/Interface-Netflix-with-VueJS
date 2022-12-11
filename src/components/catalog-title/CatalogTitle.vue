<template>
    <div>
        <h4 class="section">
            {{ section }}
        </h4>
    </div>
</template>

<script>
    export default {
        name: 'CatalogTitle',
        props: {
            section: { type: String },
        },
    }
</script>

<style>
    .section {
        color: white;
        padding-left: 6vh;
        font-size: larger;
    }
</style>
