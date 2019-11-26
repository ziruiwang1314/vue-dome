<template>
  <div>
    <head-top></head-top>
    <div class="index">
      <p>index</p>
      <el-button
      type="primary"
      @click="openFullScreen"
      v-loading.fullscreen.lock="fullScreenLoading">
        指令方式
      </el-button>


      <el-button
      type="primary"
      @click="openFullScreen1">
        服务方式
      </el-button>

    </div>
    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
    import headTop from '../components/top'
    import footerBottom from '../components/bottom'

    export default {
        name: "index",
        data() {
            return {
                fullScreenLoading: false
            }
        },
        components: {
            headTop,
            footerBottom
        },
        mounted() {
          this.openFullScreen()
        },
        methods:{
            openFullScreen(){
                let that = this
                that.fullScreenLoading = true
                setTimeout(()=>{
                    that.fullScreenLoading = false
                },4000)
            },
            openFullScreen1(){
                const loading = this.$loading({
                    lock:true,
                    text:'玩命加载中...',
                    spinner:'el-icon-loading',
                    background:'rgba(0,0,0,0.8)'
                })
                setTimeout(()=>{
                    loading.close()
                },4000)
            }
        }
    }
</script>

<style scoped>
p{
  height: 100px;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
</style>
