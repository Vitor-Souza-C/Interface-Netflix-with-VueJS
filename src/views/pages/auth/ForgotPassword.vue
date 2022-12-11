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
                <div class="text-3xl"><H6>Esqueci minha senha</H6></div>
                <p class="pt-4 text-justify">
                    Para que possamos te ajudar a recuperar sua senha,
                    precisamos que você <br />
                    nos informe seu e-mail cadastrado. Logo em seguida iremos te
                    enviar um <br />
                    link por email para redefinição de sua senha.
                </p>
                <FormForgotPassword />
            </div>
        </div>
    </div>
</template>

<script>
    import FormForgotPassword from '@/components/login/FormForgotPassword.vue'
    export default {
        name: 'forgot-password',
        components: { FormForgotPassword },
    }
</script>
