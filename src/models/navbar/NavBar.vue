<template>
    <div>
        <slot :hidden="hidden" :languages="languages" :searching="searching" :turnback="turnback"/> 
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data:() => {
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
