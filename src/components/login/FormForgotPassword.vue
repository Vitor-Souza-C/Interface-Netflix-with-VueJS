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
            <button
                type="submit"
                class="w-full rounded-md bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
            >
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FormForgotPassword',
        data() {
            return {
                form: { email: '' },
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
