import axios from "axios"
import qs from 'qs'
import Vue from 'vue'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
export default {
  get(url,data){
    return axios({
      method:"get",
      url,
      //params:qs.stringify(data)
      params:data
    })
  },
  post(url,data){
    return axios({
      method:"post",
      url,
      data:qs.stringify(data),
      headers:{
        "Content-Type":"application/x-www-form-urlencoded"
      }
    })
  },
  upLoad(url,data){
    return axios({
      method:"post",
      url,
      data,
      headers:undefined
    })
  }
}
