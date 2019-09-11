










import Vue from 'vue'
import Vuex from 'vuex'
import numberCount from './modules/numberCount.js'
import trueOrFalse from './modules/trueOrFalse.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    numberCount,
    trueOrFalse
  },
})

export default store
