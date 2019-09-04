<template>
  <div>
    {{textB}}
  </div>
</template>

<script>
  import eventBus from '../assets/eventBus'
  export default {
    name: "childB",
    data(){
      return{
        textB:'this is componentB'
      }
    },
    created() {
      this.btnB()
    },
    methods:{
      btnB(){
        eventBus.$on("myFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题
          this.textB = message
        })
      }
    }
  }
</script>

<style scoped>

</style>
