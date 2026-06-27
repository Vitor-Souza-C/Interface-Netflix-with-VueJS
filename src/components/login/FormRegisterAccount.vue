<template>
    <div>
        <form @submit="onSubmit" v-if="show" class="pt-4">
            <div class="grid grid-cols-2 gap-x-8 gap-y-6 py-8">
                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Nome de usuário">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <User class="w-4 h-4" />
                    </span>
                    <input
                        id="username"
                        type="text"
                        v-model="form.username"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        placeholder="Nome de usuário"
                        required
                    />
                </div>

                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Email">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <Mail class="w-4 h-4" />
                    </span>
                    <input
                        type="email"
                        v-model="form.email"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        placeholder="email"
                        required
                    />
                </div>

                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Senha">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <Unlock class="w-4 h-4" />
                    </span>
                    <input
                        type="password"
                        v-model="form.password"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        placeholder="Senha"
                        required
                    />
                </div>

                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Data de nascimento">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <Calendar class="w-4 h-4" />
                    </span>
                    <input
                        type="date"
                        v-model="form.birthDate"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white focus:outline-none"
                        required
                    />
                </div>

                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Número de telefone">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <Phone class="w-4 h-4" />
                    </span>
                    <input
                        type="text"
                        v-model="form.phone"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        placeholder="Número de telefone"
                        required
                    />
                </div>

                <div class="flex rounded-md border border-white/20 overflow-hidden" title="Confirmar senha">
                    <span class="flex items-center bg-white/10 px-3 text-white/60">
                        <Unlock class="w-4 h-4" />
                    </span>
                    <input
                        type="password"
                        v-model="form.confirmPassword"
                        class="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 focus:outline-none"
                        placeholder="Confirmar senha"
                        required
                    />
                </div>
            </div>

            <button
                type="submit"
                class="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Salvar
            </button>
        </form>
    </div>
</template>

<script>
    import { User, Mail, Unlock, Calendar, Phone } from 'lucide-vue-next'

    export default {
        name: 'FormRegisterAccount',
        components: { User, Mail, Unlock, Calendar, Phone },
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
