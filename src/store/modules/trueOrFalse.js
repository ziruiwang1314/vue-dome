const state={
  isShow:true
};
const getters={

};
const mutations={
  showOrHideTemplate(state){
    console.log(1)
    state.isShow = !state.isShow;
    console.log(3)
  }
};
const actions={
  showOrHideTemplate(context){
    context.commit("showOrHideTemplate")
  }
};
export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
