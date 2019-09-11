const state = {
  count:1
};
const getters = {
  // getStateCount(state) {
  //   return state.count+1
  // }
};
const mutations = {
  incrementN (state,n) {
    state.count = state.count+n
  },
  increment(state){
    state.count++
  },
  decrement(state) {
    state.count--
  }
};
const actions = {
  increments(context){
    context.commit("increment")
  },
  decrements(context){
    context.commit("decrement")
  },
  incrementNs(context, n) {
    context.commit("incrementN",n)
  }
};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
