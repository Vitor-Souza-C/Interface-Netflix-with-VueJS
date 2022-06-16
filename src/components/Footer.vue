<template>
    <div>
        <div class="info-content">
            <footer> <!--info/contact-->
                <div>
                    <h4 id="socialMidia">Redes Sociais</h4>
                    <ul v-for="social in infoPopulate.socialMidia">
                        <li><b>{{social.id}}:</b> {{social.info}}</li>
                    </ul>
                </div>
                <div class="footer-container"> <!--creator/region-->
                    <p>{{message + infoPopulate.creator}}</p>
                    <p>{{infoPopulate.date}} - {{infoPopulate.region}}</p>
                </div> 
                <div></div> <!--Images-->
            </footer>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
        hidden: false,
        message: 'This project was developed by ',
        languages: [{id: "en-us", type: "Inglês"},{id: "pt-br", type: "Português"}],
        infoPopulate: {date: new Date(), creator: 'Vitor Souza Carvalho', region: 'Brasília-DF, Brasil', socialMidia: [{id: 'facebook', info: 'vitorcarvalho/facebook.com.br'}, {id: 'twitter', info: 'vitorcarvalho/twitter.com'}, {id: 'instagram', info: 'vitorcarvalho/instagram.com.br'}]}
    }
  },
}
</script>

<style>
.footer-container{
    text-align: center;
}
.info-content{
    padding-top: 100px;
    padding-bottom: 80px;
    color: white;
    background-color: black;
}
.container{
    padding-top: 5rem;
}
#socialMidia{
    padding-left: 1.2rem;
}
</style>
