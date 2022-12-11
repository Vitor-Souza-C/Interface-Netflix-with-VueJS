<template>
    <div>
        <div class="flex bg-stone-900/60 rounded-xl shadow-lg p-16">
            <div class="text-white flex flex-col w-full">
                <div class="flex justify-center mb-5">
                    <img
                        src="../../../assets/logo.png"
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
</template>

<script>
    import FormLogin from '../../../components/login/FormLogin.vue'
    export default {
        name: 'login',
        components: { FormLogin },
    }
</script>
