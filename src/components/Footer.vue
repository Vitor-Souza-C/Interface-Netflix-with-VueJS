<template>
    <div>
        <div class="info-content">
            <FooterModel v-slot="{hidden, message, languages, infoPopulate}"> <!--info/contact-->
                <b-container class="bv-example-row">
                    <b-row>
                        <b-col class=" pt-3">
                            <span class="mr-3">
                                <b-button variant="primary" id  ="socialInstagram" class="mb-2 " title="vitorcarvalho/twitter.com">
                                    <b-icon-instagram /> 
                                </b-button>
                            </span>
                            <span class="mr-3">
                                <b-button variant="primary" id="socialTwitter" class="mb-2" title="vitorcarvalho/instagram.com.br">
                                    <b-icon-twitter />
                                </b-button>
                            </span>
                            <span>
                                <b-button variant="primary" id="socialFacebook"  class="mb-2" title="vitorcarvalho/facebook.com.br"> 
                                    <b-icon-facebook />
                                </b-button>
                            </span>
                        </b-col>
                        <b-col>
                            <b-card bg-variant="danger" text-variant="white" class="text-center font-family">
                                <b-card-text>
                                    <span>{{message + infoPopulate.creator}}</span> 
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-container>
            </FooterModel>
        </div>
    </div>
</template>

<script>

// {id: 'facebook', info: ''}, {id: 'twitter', info: ''}, {id: 'instagram', info: ''}

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
    color: white;
    background: rgb(37,29,26);
    background: linear-gradient(90deg, rgba(37,29,26,1) 0%, rgba(92,30,10,1) 35%, rgba(60,27,27,1) 100%);
    padding-bottom: 3vh;
}
.container{
    padding-top: 2rem;
}
#socialMidia{
    padding-left: 1.2rem;
}
#socialInstagram{
    border-color: #bc318f;
    background: radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);
}
#socialTwitter{
    border-color:#00aced;
    background: #00aced
}
#socialFacebook{
    border-color:#3b5998;
    background: #3b5998;
}
.font-family{
    font-family: monospace;
}
</style>
