<template>
    <div>
        <!--Navbar using the bootstrap-vue component-->
        <b-navbar toggleable="lg" type="dark">
             <b-navbar-brand to="/" class="padding">
                <img src="../assets/logo.png" class="d-inline-block align-top" alt="VueFlix" height="30">
            </b-navbar-brand>
            <!--Mobile toggle to navbar-->
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/" title="Ir para o inicio">Início</b-nav-item>
                    <b-nav-item to="/series" title="Ir para o catálogo de séries">Séries</b-nav-item>
                    <b-nav-item to="/movies" title="Ir para o catálogo de filmes">Filmes</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                     <b-nav-form class="margin-variant">
                        <span v-if="hidden">
                            <b-form-input type="search" placeholder="Busque por filmes e séries" size="md" class="ml-10"></b-form-input>
                            <b-button @click="turnback()" variant="danger"><b-icon-x-circle font-scale="1"></b-icon-x-circle></b-button>
                        </span>
                        <b-button @click="searching()" v-else title="Pesquisar"><b-icon-search font-scale="1"></b-icon-search></b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right title="Mudar o idioma" class="margin-variant">
                        <template #button-content>  
                            <b-icon-translate font-scale="2"></b-icon-translate>
                        </template>
                        <b-dropdown-item href="#" v-for="lang in languages">{{lang.type}}</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right title="Configurações da conta" class="margin-variant fix-margin">
                        <template #button-content>
                            <em><b-avatar square></b-avatar></em>
                        </template>
                        <b-dropdown-item href="#">Gerenciar perfis</b-dropdown-item>
                        <b-dropdown-item href="#">Conta</b-dropdown-item>
                        <b-dropdown-item href="#">Ajuda</b-dropdown-item>
                        <b-dropdown-item href="#">Sair</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view class="spacement"/>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default{
    components: {
        Footer
    },
    data() {
        return {
            hidden: false,
            languages: [{id: "en-us", type: "Inglês"},{id: "pt-br", type: "Português"}],
        }
    },
    methods: {
        searching() {
            console.log("Searching...")
            this.hidden = true;
        },
        turnback(){
            console.log("Torning back...")
            this.hidden = false;
        }
    }
}
</script>

<style>
.fixed{
    position: fixed;
}
.spacement{
    padding: 10rem 2.5rem 10rem 2.5rem;
}
.margin-variant{
    margin-right: 1rem
}
.fix-margin{
    margin-right: 1.5rem;
}
.padding{
    padding-left: 1.5rem;
}

</style>