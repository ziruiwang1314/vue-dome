<template>
<div>
  <ul>
    <li v-dir1>自定义指令</li>

  </ul>
</div>
</template>

<script>
  export default {
    name: "directiveComponent",
    data(){
      return{

      }
    },
    directives:{
      dir1:{
        inserted(el){
          console.log(el);
          el.style.backgroundColor="#ff0000"
        }
      }
    }
  }
</script>

<style scoped>

</style>
