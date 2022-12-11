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
                <div class="text-3xl"><H6>Redefinir minha senha</H6></div>
                <FormRedefinePassword />
            </div>
        </div>
    </div>
</template>

<script>
    import FormRedefinePassword from '@/components/login/FormRedefinePassword.vue'
    export default {
        name: 'redefine-password',
        components: { FormRedefinePassword },
    }
</script>
