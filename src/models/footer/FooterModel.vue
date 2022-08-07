<template>
    <div>
        <slot :hidden="hidden" :message="message" :languages="languages" :infoPopulate="infoPopulate"/> 
    </div>
</template>

<script>
export default {
  name: 'FooterModel',
  data:() => {
    return {
        hidden: false,
        message: 'This project was developed by ',
        languages: [{id: "en-us", type: "Inglês"},{id: "pt-br", type: "Português"}],
        infoPopulate: {date: new Date(), creator: 'Vitor Souza Carvalho', region: 'Brasília-DF, Brasil', socialMidia: [{id: 'facebook', info: 'vitorcarvalho/facebook.com.br'}, {id: 'twitter', info: 'vitorcarvalho/twitter.com'}, {id: 'instagram', info: 'vitorcarvalho/instagram.com.br'}]}
    }
  }
}
</script>
