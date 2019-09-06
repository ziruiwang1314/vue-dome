import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
Vue.use(Vuex)
Vue.use(Router)



const HelloWorld = ()=>import("@/components/HelloWorld");
const home = ()=>import("@/pages/home");
const lazyLoad = ()=>import("@/pages/lazyLoad");
const index = ()=>import("@/pages/index");
const tableTest = ()=>import("@/pages/tableTest");
const fatherToSon = ()=>import("@/pages/father-to-son");
const getFromSon = ()=>import("@/pages/get-from-son");
const brothers =()=>import("@/pages/brothers");
const parentSlots =()=>import("@/pages/parentSlots");
const test =()=>import("@/pages/test");
const routes = [
  {
    path:"/",
    redirect:'/index'
  },
  {
    path: '/index',
    component: home,
    children: [
      {
        path: '/',
        component: index,
        meta:[]
      },
      {
        path: '/lazyLoad',
        component: lazyLoad,
        meta: ['导航二','lazyLoad']
      },
      {
        path: '/tableTest',
        component: tableTest,
        meta:['导航二','tableTest']
      },
      {
        path: '/fatherToSon',
        component: fatherToSon,
        meta:['导航二','fatherToSon']
      },
      {
        path: '/getFromSon',
        component: getFromSon,
        meta:['导航二','getFromSon']
      },
      {
        path: '/brothers',
        component: brothers,
        meta:['导航二','brothers']
      },
      {
        path: '/parentSlots',
        component: parentSlots,
        meta:['导航二','parentSlots']
      },
      {
        path: '/test',
        component: test,
        meta:['导航二','test']
      }
    ]
  }
]

export default new Router({
  routes
  //strict: process.env.NODE_ENV !== 'production',
})
