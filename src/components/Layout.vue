<template>
    <div>
        <NavBar v-slot="{ hidden, languages, searching, turnback }">
            <nav class="fixed top-0 left-0 right-0 z-50 bk-navbar">
                <div class="flex items-center justify-between px-6 py-3">
                    <router-link to="/" class="shrink-0">
                        <img
                            src="../assets/logo.png"
                            class="h-8 w-auto"
                            alt="VueFlix"
                            title="Vueflix"
                        />
                    </router-link>

                    <button
                        @click="mobileOpen = !mobileOpen"
                        class="lg:hidden text-white/80 p-2 hover:text-white"
                        aria-label="Menu"
                    >
                        <Menu class="w-5 h-5" />
                    </button>

                    <div
                        :class="[
                            'absolute top-full left-0 right-0 lg:static lg:flex items-center gap-6 px-6 lg:px-0 pb-4 lg:pb-0 bk-navbar lg:bg-transparent',
                            mobileOpen ? 'flex flex-col' : 'hidden lg:flex',
                        ]"
                    >
                        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4">
                            <router-link
                                to="/"
                                class="text-white/80 hover:text-white text-sm transition-colors"
                                title="Ir para o inicio"
                                >Início</router-link
                            >
                            <router-link
                                to="/series"
                                class="text-white/80 hover:text-white text-sm transition-colors"
                                title="Ir para o catálogo de séries"
                                >Séries</router-link
                            >
                            <router-link
                                to="/movies"
                                class="text-white/80 hover:text-white text-sm transition-colors"
                                title="Ir para o catálogo de filmes"
                                >Filmes</router-link
                            >
                        </div>

                        <div class="flex items-center gap-3 lg:ml-auto">
                            <div class="flex items-center gap-2">
                                <template v-if="hidden">
                                    <input
                                        type="search"
                                        class="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
                                        placeholder="Busque por filmes e séries"
                                    />
                                    <button
                                        @click="turnback()"
                                        class="text-white/70 hover:text-red-400 p-1 transition-colors"
                                    >
                                        <X class="w-4 h-4" />
                                    </button>
                                </template>
                                <button
                                    v-else
                                    @click="searching()"
                                    class="text-white/70 hover:text-white p-1 transition-colors"
                                    title="Pesquisar"
                                >
                                    <Search class="w-4 h-4" />
                                </button>
                            </div>

                            <div class="relative group">
                                <button
                                    class="text-white/70 hover:text-white p-1 transition-colors"
                                    title="Mudar o idioma"
                                >
                                    <Languages class="w-4 h-4" />
                                </button>
                                <div
                                    class="absolute right-0 mt-1 w-32 rounded-md border border-white/10 bg-zinc-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                                >
                                    <a
                                        v-for="lang in languages"
                                        :key="lang.id"
                                        href="#"
                                        class="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                                        >{{ lang.type }}</a
                                    >
                                </div>
                            </div>

                            <div class="relative group">
                                <button
                                    class="text-white/70 hover:text-white p-1 transition-colors"
                                    title="Configurações da conta"
                                >
                                    <UserSquare class="w-4 h-4" />
                                </button>
                                <div
                                    class="absolute right-0 mt-1 w-44 rounded-md border border-white/10 bg-zinc-900 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                                >
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                                        >Gerenciar perfis</a
                                    >
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                                        >Conta</a
                                    >
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                                        >Ajuda</a
                                    >
                                    <router-link
                                        to="/auth/login"
                                        class="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5"
                                        >Sair</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <router-view class="spacement" />
            <Footer />
        </NavBar>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import NavBar from '../models/navbar/NavBar.vue'
    import { Search, X, Languages, UserSquare, Menu } from 'lucide-vue-next'

    export default {
        components: { Footer, NavBar, Search, X, Languages, UserSquare, Menu },
        data() {
            return { mobileOpen: false }
        },
    }
</script>

<style>
    .spacement {
        padding-top: 10rem;
        padding-bottom: 10rem;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(43, 36, 36, 1) 100%
        );
        min-height: 100vh;
    }
    .bk-navbar {
        background: linear-gradient(
            90deg,
            rgba(37, 29, 26, 1) 0%,
            rgba(92, 30, 10, 1) 35%,
            rgba(60, 27, 27, 1) 100%
        );
    }
</style>
