<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="header">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
      name: "top",
      mounted() {
        this.hhh()
      },
      methods:{
        hhh(){
          console.log(this.$route)
        }
      }
    }



</script>

<style scoped lang="less">
  .header{
    font-size: 20px;
    line-height: 40px;
    background-color: #42b983;
  }
</style>
