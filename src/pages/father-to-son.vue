<template>
  <div>
    <header-top></header-top>
      <child :parentToChild="parentValue"></child>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  import headerTop from '../components/top'
  import footerBottom from '../components/bottom'
  import child from '../components/child'
  export default {
    name: "father-to-son",
    data(){
      return{
        parentValue:["p1","p2","p3"]
      }
    },
    components:{
      headerTop,
      footerBottom,
      child
    }
  }
</script>

<style scoped>

</style>
