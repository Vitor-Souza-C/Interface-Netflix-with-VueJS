<template>
    <div>
        <div class="flex bg-stone-900/60 rounded-xl shadow-lg p-16">
            <div class="text-white flex flex-col">
                <div class="flex justify-center mb-5">
                    <img
                        src="../../../assets/logo.png"
                        class="d-inline-block align-top w-40"
                        alt="VueFlix"
                        title="Vueflix"
                    />
                </div>
                <div class="text-3xl divide-y font-bold">
                    <H6>Registrar nova conta</H6>
                </div>
                <FormRegisterAccount />
            </div>
        </div>
    </div>
</template>

<script>
    import FormRegisterAccount from '@/components/login/FormRegisterAccount.vue'

    export default {
        name: 'register',
        components: { FormRegisterAccount },
    }
</script>
