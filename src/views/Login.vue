<template>
    <div>
        <div
            class="flex flex-col w-screen h-screen special-bg place-items-center justify-center"
        >
            <div
                class="flex bg-stone-900/60 w-3/12 h-4/6 rounded-xl shadow-lg p-16"
            >
                <div class="text-white flex flex-col w-full">
                    <div class="flex justify-center mb-5">
                        <img
                            src="../assets/logo.png"
                            class="d-inline-block align-top w-40"
                            alt="VueFlix"
                            title="Vueflix"
                        />
                    </div>
                    <div class="text-3xl"><H6>Entrar</H6></div>

                    <FormLogin />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormLogin from '../components/login/FormLogin.vue'
    export default {
        name: 'Login',
        components: { FormLogin },
    }
</script>

<style>
    .special-bg {
        background: rgb(37, 29, 26);
        background: linear-gradient(
            90deg,
            rgba(37, 29, 26, 1) 0%,
            rgba(92, 30, 10, 1) 35%,
            rgba(60, 27, 27, 1) 100%
        );
    }
</style>
