
<template>
  <div id="vuexTest">
    <h1>the number of testVue is {{ mapCount }}</h1>
    <p>
      <button @click="incrementN">+</button>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  import store from '../store/index'
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name: "vuexTest",
    computed: {
      ...mapState({
        mapCount(state){
          return state.numberCount.count
        }
      })
    },
    methods: {
      increment () {
        const n = 10;
        store.dispatch('numberCount/increment');
      },
      decrement () {
        store.dispatch('numberCount/decrement')
      },
      incrementN(){
        const n = 10;
        store.dispatch("numberCount/incrementN",n)
      }
    }
  }
</script>

<style scoped>

</style>
