<template>
    <div>
        <b-navbar type="dark" class="fixed">
            <b-navbar-brand to="/">
                <img src="../assets/logo.png" class="d-inline-block align-top" alt="VueFlix" height="30">
            </b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item to="/">Início</b-nav-item>
                <b-nav-item to="/series">Séries</b-nav-item>
                <b-nav-item to="/movies">Filmes</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
        
        <router-view class="container spacement"/>
    </div>
</template>

<style>
.fixed{
    position: fixed;
}
.spacement{
    padding-top: 10rem;
    padding-bottom: 10rem;
}
</style>