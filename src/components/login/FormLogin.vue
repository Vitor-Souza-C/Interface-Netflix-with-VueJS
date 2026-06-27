<template>
    <div>
        <form @submit="onSubmit" v-if="show" class="pt-4 flex flex-col gap-4">
            <div class="flex flex-col gap-1">
                <input
                    id="input-email"
                    v-model="form.email"
                    type="email"
                    class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Digite seu e-mail"
                    required
                />
                <span class="text-xs text-red-400">Digite pelo menos 3 caractéres</span>
            </div>

            <div class="flex flex-col gap-1">
                <input
                    id="input-password"
                    v-model="form.password"
                    type="password"
                    class="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="Digite sua senha"
                    required
                />
                <router-link class="self-end text-sm text-red-400 hover:text-red-300" to="/auth/forgot-password"
                    >Esqueceu a senha?</router-link
                >
                <span class="text-xs text-red-400">A senha precisa ter mais de 8 digitos</span>
                <div class="pt-10 text-gray-500">
                    <span
                        >É novo por aqui?
                        <router-link class="text-lg text-red-400 hover:text-red-300" to="/auth/register"
                            >Se cadastrar</router-link
                        >
                    </span>
                </div>
            </div>

            <button
                type="submit"
                class="w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
            >
                Entrar
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FormLogin',
        data() {
            return {
                form: { email: '', password: '' },
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
