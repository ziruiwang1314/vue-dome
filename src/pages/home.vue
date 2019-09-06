<template>
  <div class="fillContent">
    <el-row style="height: 100%">
      <el-col :span="4" style="min-height: 100%;background-color: rgb(84, 92, 100);">
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="test">test</el-menu-item>
              <el-menu-item index="lazyLoad">lazyLoad</el-menu-item>
              <el-menu-item index="tableTest">table</el-menu-item>
              <el-menu-item index="fatherToSon">fatherToSon</el-menu-item>
              <el-menu-item index="getFromSon">getFromSon</el-menu-item>
              <el-menu-item index="brothers">brothers</el-menu-item>
              <el-menu-item index="parentSlots">parentSlots</el-menu-item>
              <el-menu-item index="bidirectionalDataBinding">bidirectionalDataBinding</el-menu-item>
              <el-menu-item index="dynamicComponent">dynamicComponent</el-menu-item>
              <el-menu-item index="lazyComponent">lazyComponent</el-menu-item>


            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>


      <el-col :span="20" style="height: 100%;overflow: auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import top from '../components/top'
  import bottom from '../components/bottom'

    export default {
      name: "home",
      components:{
        top,
        bottom
      }
    }
</script>

<style scoped lang="less">
  @import "../style/common";
</style>
