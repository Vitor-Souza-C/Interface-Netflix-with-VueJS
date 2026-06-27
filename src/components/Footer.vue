<template>
    <div class="info-content">
        <FooterModel v-slot="{ message, infoPopulate }">
            <div class="max-w-7xl mx-auto px-6 py-8">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div class="flex items-center gap-3">
                        <button
                            id="socialInstagram"
                            class="rounded-md p-2 text-white transition-opacity hover:opacity-80"
                            title="vitorcarvalho/instagram.com.br"
                        >
                            <Instagram class="w-5 h-5" />
                        </button>
                        <button
                            id="socialTwitter"
                            class="rounded-md bg-black p-2 text-white transition-opacity hover:opacity-80"
                            title="vitorcarvalho/twitter.com"
                        >
                            <Twitter class="w-5 h-5" />
                        </button>
                        <button
                            id="socialFacebook"
                            class="rounded-md p-2 text-white transition-opacity hover:opacity-80"
                            style="background: #3b5998"
                            title="vitorcarvalho/facebook.com.br"
                        >
                            <Facebook class="w-5 h-5" />
                        </button>
                    </div>
                    <div class="rounded-lg bg-destructive/80 px-6 py-3 text-center font-mono text-sm text-white">
                        {{ message + infoPopulate.creator }}
                    </div>
                </div>
            </div>
        </FooterModel>
    </div>
</template>

<script>
    import FooterModel from '../models/footer/FooterModel.vue'
    import { Instagram, Twitter, Facebook } from 'lucide-vue-next'

    export default {
        name: 'Footer',
        components: { FooterModel, Instagram, Twitter, Facebook },
    }
</script>

<style>
    .info-content {
        color: white;
        background: linear-gradient(
            90deg,
            rgba(37, 29, 26, 1) 0%,
            rgba(92, 30, 10, 1) 35%,
            rgba(60, 27, 27, 1) 100%
        );
    }
    #socialInstagram {
        background: radial-gradient(
                circle farthest-corner at 35% 90%,
                #fec564,
                transparent 50%
            ),
            radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
            radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
            radial-gradient(
                ellipse farthest-corner at 20% -50%,
                #5258cf,
                transparent 50%
            ),
            radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
            radial-gradient(
                ellipse farthest-corner at 60% -20%,
                #893dc2,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 100% 100%,
                #d9317a,
                transparent
            ),
            linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
    }
</style>
