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

            <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.password"
                    type="password"
                    size="lg"
                    :state="passwordVerifiquetion"
                    placeholder="Digite sua senha"
                    required
                ></b-form-input>
                <b-link class="text-red-400 float-right" href="#foo"
                    >Esqueceu a senha?</b-link
                >

                <b-form-invalid-feedback id="input-live-feedback">
                    A senha precisa ter mais de 8 digitos
                </b-form-invalid-feedback>
                <div class="pt-10 text-gray-500">
                    <span
                        >É novo por aqui?
                        <b-link class="text-lg text-red-400" href="#foo"
                            >Se cadastrar</b-link
                        >
                    </span>
                </div>
            </b-form-group>

            <b-button
                type="submit"
                variant="danger "
                class="w-full bg-red-600 mt-4"
                >Entrar</b-button
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
            passwordVerifiquetion() {
                return true
                //  this.form.password.length > 7 ? true : false
            },
        },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true,
            }
        },
        methods: {
            async onSubmit(event) {
                event.preventDefault()
                console.log(JSON.stringify(this.form))
                await this.$router.push('/')
            },
        },
    }
</script>
