const state={
  isShow:true
};
const getters={
  isShow(state){
    return state.isShow
  }
};
const mutations={
  showOrHideTemplate(state){
    state.isShow = !state.isShow;
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


