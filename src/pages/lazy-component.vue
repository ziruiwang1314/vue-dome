<template>
  <div>
    <head-top></head-top>
    this is lazy-component page
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
  const headTop = ()=> import("../components/top")
  const footerBottom = ()=> import("../components/bottom")
  export default {
    name: "lazy-component",
    components:{
      headTop,
      footerBottom
    }
  }
</script>

<style scoped>

</style>
