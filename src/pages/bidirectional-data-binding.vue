<template>
  <div>
    <input v-model="message" type="text" placeholder="please write some text">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: "bidirectional-data-binding",
    data(){
      return{
        message:"hahaha"
      }
    }
  }
</script>

<style scoped>

</style>
