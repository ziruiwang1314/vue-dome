<template>
  <div>
    <header-top></header-top>
    <h1>Brother Component Value Transfer: used by eventBus(事件总线)</h1>
    <childA></childA>
    <childB></childB>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  import headerTop from '../components/top'
  import footerBottom from '../components/bottom'
  import childA from '../components/childA'
  import childB from '../components/childB'
  export default {
    name: "brothers",
    data(){

    },
    components:{
      headerTop,
      footerBottom,
      childB,
      childA
    }
  }
</script>

<style scoped>

</style>
