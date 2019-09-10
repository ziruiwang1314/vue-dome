
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:1
  },
  getters:{
    getStateCount(state) {
      return state.count+1
    }
  },
  mutations: {
    // increment: state => state.count++,
    increment: (state,n) => state.count = state.count+n,

    decrement: state => state.count--
  },
  actions:{
    increment(context,n){
      context.commit("increment",n)
    },
    decrement(context){
      context.commit("decrement")
    }
  }
})

export default store
