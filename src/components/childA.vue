<template>
  <div>
    <button @click="btnA">button-A</button>
  </div>
</template>

<script>
    import eventBus from '../assets/eventBus'
    export default {
      name: "childA",
      data(){
        return{
          'msg':'this is componentA，send to componentB later'
        }
      },
      methods:{
        btnA(){
          eventBus.$emit("myFun",this.msg)   //$emit这个方法会触发一个事件
        }
      }

    }
</script>

<style scoped>

</style>
