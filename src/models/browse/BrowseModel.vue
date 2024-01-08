<template>
    <div>
        <slot :profiles="profiles" />
    </div>
</template>

<script>
    export default {
        name: 'BrowseModel',
        data: () => {
            return {
                profiles: [
                    {
                        name: 'Daniel',
                        avatar: { url: 'https://placekitten.com/200/400' },
                    },
                    {
                        name: 'Carlos',
                        avatar: { url: 'https://placekitten.com/200/300' },
                    },
                    {
                        name: 'John',
                        avatar: { url: 'https://placekitten.com/200/200' },
                    },
                    {
                        name: 'Leticia',
                        avatar: { url: 'https://placekitten.com/200/100' },
                    },
                    {
                        name: 'Vitor',
                        avatar: { url: 'https://placekitten.com/100/400' },
                    },
                ],
            }
        },
    }
</script>
