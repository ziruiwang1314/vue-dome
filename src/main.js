// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import router from './router'
import Router from 'vue-router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import api from './api/getData'
Vue.prototype.$api = api
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(VueLazyLoad)
Vue.use(ElementUI)
// Vue.use(Vuex)

//解决点击同一个路由 报错：avigationDuplicated {_name: “NavigationDuplicated”, name: “NavigationDuplicated”}这个错误
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
