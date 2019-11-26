<template>
    <div id="listDetails">
      <header-top></header-top>
      <p>详情页面到id是：</p>
      <p>{{id}}</p>
      <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import headerTop from '../components/top'
    import footerBottom from '../components/bottom'

    export default {
        name: "listDetail",
        components:{
          headerTop,
          footerBottom
        },
        data(){
            return{
              id:''
            }
        },
        beforeRouteUpdate(to,from,next){
            //由于应用同一个组件，复用效率更高，
            //但是，由于复用，生命周期不会再被调用，
            //响应路由到变化，需要用到vue2.2的beforeRouteUpdate
            if (to.fullPath!=from.fullPath){
                next()  //不要忘记调用next（）
                this.init()
            }
        },
        mounted() {
            this.init()
        },
        methods:{
            init(){
              this.id = this.$route.params.id
                console.log(1)
            }
        },

    }
</script>

<style scoped>

</style>
