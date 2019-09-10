<template>
  <div id="vuexTest">
    <h1>the number of testVue is {{ this.$store.state.count }}</h1>
    <h1>the number of getters is {{this.$store.getters.getStateCount}} </h1>
    <p>
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
        mapCount:state=>state.count
      })
    },
    methods: {
      increment () {
        const n = 10;
        store.dispatch('increment',n)
      },
      decrement () {
        store.dispatch('decrement')
      }
    }
  }
</script>

<style scoped>

</style>
