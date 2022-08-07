<template>
    <div>
        <div class="info-content">
            <FooterModel v-slot="{hidden, message, languages, infoPopulate}"> <!--info/contact-->
                <div>
                    <h4 id="socialMidia">Redes Sociais</h4>
                    <ul v-for="social in infoPopulate.socialMidia">
                        <li><b>{{social.id}}:</b> {{social.info}}</li>
                    </ul>
                </div>
                <div class="footer-container"> 
                    <p>{{message + infoPopulate.creator}}</p>
                    <p>{{infoPopulate.date}} - {{infoPopulate.region}}</p>
                </div> 
                <div> <!-- images --></div> 
            </FooterModel>
        </div>
    </div>
</template>

<script>

import FooterModel from '../models/footer/FooterModel.vue'

export default {
  name: 'Footer', 
  components: {
    FooterModel
  }
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
