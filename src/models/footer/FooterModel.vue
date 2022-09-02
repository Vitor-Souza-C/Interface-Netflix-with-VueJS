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
        message: 'Este projeto foi desenvolvido por ',
        languages: [{id: "en-us", type: "Inglês"},{id: "pt-br", type: "Português"}],
        infoPopulate: {creator: 'Vitor Souza Carvalho'}
    }
  }
}
</script>
