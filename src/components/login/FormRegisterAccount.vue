<template>
    <div>
        <b-form inline @submit="onSubmit" v-if="show" class="pt-4">
            <div class="grid grid-rows-4 grid-flow-row gap-12 py-8 pr-8">
                <b-input-group title="Nome de usuário">
                    <b-input-group-prepend is-text>
                        <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="text"
                        v-model="form.username"
                        placeholder="Nome de usuário"
                        required
                    ></b-form-input>
                </b-input-group>

                <b-input-group title="Email">
                    <b-input-group-prepend is-text>
                        <b-icon icon="envelope"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="email"
                        v-model="form.email"
                        placeholder="email"
                        required
                    ></b-form-input>
                </b-input-group>

                <b-input-group title="Senha">
                    <b-input-group-prepend is-text>
                        <b-icon icon="unlock"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="password"
                        v-model="form.password"
                        placeholder="Senha"
                        required
                    ></b-form-input>
                </b-input-group>
            </div>
            <div class="grid grid-rows-3 grid-flow-row gap-12 py-8">
                <b-input-group title="Data de nascimento">
                    <b-input-group-prepend is-text>
                        <b-icon icon="calendar3-event"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="date"
                        v-model="form.birthDate"
                        placeholder="Senha"
                        required
                    ></b-form-input>
                </b-input-group>
                <b-input-group title="Número de telefone">
                    <b-input-group-prepend is-text>
                        <b-icon icon="telephone-plus-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="text"
                        v-model="form.phone"
                        placeholder="Número de telefone"
                        required
                    ></b-form-input>
                </b-input-group>

                <b-input-group title="Confirmar senha">
                    <b-input-group-prepend is-text>
                        <b-icon icon="unlock"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                        type="password"
                        v-model="form.confirmPassword"
                        placeholder="Confirmar senha"
                        required
                    ></b-form-input>
                </b-input-group>
                <b-button type="submit" class="bg-blue-600" variant="primary"
                    >Salvar
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'FormRegisterAccount',
        // computed: {
        //     emailVerification() {
        //         return true
        //         // this.form.email.length > 2 ? true : false
        //     },
        //     passwordVerifiquetion() {
        //         return true
        //         //  this.form.password.length > 7 ? true : false
        //     },
        // },
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                    phone: '',
                    confirmPassword: '',
                    birthDate: '',
                    username: '',
                },
                show: true,
            }
        },
        methods: {
            async onSubmit(event) {
                event.preventDefault()
                console.log(JSON.stringify(this.form))
                await this.$router.push('/auth/login')
            },
        },
    }
</script>
