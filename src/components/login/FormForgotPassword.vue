<template>
    <div>
        <b-form @submit="onSubmit" v-if="show" class="pt-4">
            <b-form-group
                id="input-group-1"
                label-for="input-1"
                class="w-full py-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    size="lg"
                    :state="emailVerification"
                    type="email"
                    placeholder="Digite seu e-mail"
                    required
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">
                    Digite pelo menos 3 caractéres
                </b-form-invalid-feedback>
            </b-form-group>

            <b-button
                type="submit"
                variant="danger "
                class="w-full bg-red-600 mt-4"
                >Enviar</b-button
            >
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'FormLogin',
        computed: {
            emailVerification() {
                return true
                // this.form.email.length > 2 ? true : false
            },
        },
        data() {
            return {
                form: {
                    email: '',
                },
                show: true,
            }
        },
        methods: {
            async onSubmit(event) {
                event.preventDefault()
                console.log(JSON.stringify(this.form))
                await this.$router.push('/auth/redefine-password')
            },
        },
    }
</script>
