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
  increment(context){
    context.commit("increment")
  },
  decrement(context){
    context.commit("decrement")
  },
  incrementN(context, n) {
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
