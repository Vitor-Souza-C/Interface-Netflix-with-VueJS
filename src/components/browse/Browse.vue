<template>
    <b-container class="bv-example-row">
        <b-row v-for="profile in profiles">
            <b-col>{{ profile.name }}</b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'Browse',
        props: {
            profiles: { type: Array },
        },
    }
</script>
