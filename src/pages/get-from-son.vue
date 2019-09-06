<template>
  <div>
    <header-top></header-top>
    <p>this is get-from-son components（father）</p>
    <child @getValueFromChild="getValueFromChild"></child>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  import headerTop from '../components/top'
  import footerBottom from '../components/bottom'
  import child from '../components/child'
  export default {
    name: "get-from-son",
    components:{
      headerTop,
      footerBottom,
      child
    },
    mounted:{

    },
    methods:{
      getValueFromChild(valueToFather){
        alert(valueToFather)
      }
    }
  }
</script>

<style scoped>

</style>
