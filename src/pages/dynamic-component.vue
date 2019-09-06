<template>
  <div id="dynamic-component">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="changeTab(tab)"
    >{{ tab }}</button>
    <keep-alive>
      <component
        v-bind:is="currentTab"
        class="tab">
      </component>
    </keep-alive>
  </div>
</template>

<script>
  import login from '../components/login'
  import register from '../components/register'
  export default {
    name: "dynamic-component",
    components:{
      login,
      register
    },
    data(){
      return{
        currentTab: 'login',
        tabs: ['login', 'register']
      }
    },
    methods:{
      changeTab(tab){
        this.currentTab =tab
      }
    }
  }
</script>

<style scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
