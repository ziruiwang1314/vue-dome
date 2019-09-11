<template>
  <div>
    <input type="button" value="显示\隐藏" id="showTemplate" @click="showOrHideTemplate">
    <div id="showOrHideTemplate"  v-show="showOrHide">
      this is show or hide template
    </div>
  </div>

</template>

<script>
  import store from '../store/index'
  import {mapState,mapGetters,mapActions} from 'vuex'

  export default {
    name: "vuexTest3",
    computed:{
      ...mapState({
        showOrHide:state=> state.trueOrFalse.isShow
      })
    },
    methods:{
      showOrHideTemplate(){
        store.dispatch("trueOrFalse/showOrHideTemplate");
      }
    }
  }
</script>

<style scoped>

</style>
