import axios from 'axios'
import $http from '@/request/https'


axios.defaults.timeout = 5000;       //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = '';   //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});





//API
//API
//API

export default {
  table(obj){
    return $http.get("../../static/mock/table.json",obj)
  },
  eCharts(obj){
    return $http.get("../../static/mock/eCharts.json",obj)
  },
  head(obj){
    return $http.get("../../static/mock/head.json",obj)
  },
  lazyLoad(obj){
    return $http.get("../../static/mock/lazyLoad.json",obj)
  },
  slot(obj){
    return $http.get("../../static/mock/slot.json",obj)
  },
  list(obj){
    return $http.get("../../static/mock/list.json",obj)
  },

  testApi(obj){
    return $http.get("/api/topsymbolapr",obj)
  },

  //top 5
  topsymbolapr(obj){
    return $http.get("/api/topsymbolapr",obj)
  },
  //未还贷
  activeloanoutstanding(obj){
    return $http.get("/api/activeloanoutstanding",obj)
  },
  //7 天 信息
  sevendaysdata(obj){
    return $http.get("/api/sevendaysdata",obj)
  },
  //总体资产
  totalstatistics(obj){
    return $http.get("/api/totalstatistics",obj)
  },
  getLine(obj){
    return $http.get("/static/mock/zhexian.json",obj)
  }
};
