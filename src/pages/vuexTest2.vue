<template>
  <div id="vuexTest">
    <p>
      <button @click="incrementN">+</button>
      <button @click="increment">+</button>

      <button @click="decrement">-</button>
    </p>

    <h1 style="border: 1px solid red">the number of mapState is {{mapCount}}</h1>
  </div>
</template>

<script>
  import store from '../store/index'
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    name: "vuexTest",
    computed:{
      ...mapState({
        mapCount:state=>state.numberCount.count
      })
    },
    methods: {
      incrementN () {
        const n = 10;
        store.dispatch('numberCount/incrementNs',n)
      },
      increment () {
        store.dispatch('numberCount/increments')
      },
      decrement () {
        store.dispatch('numberCount/decrements')
      }
    }
  }
</script>

<style scoped>

</style>
