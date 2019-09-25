// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from  'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// axios({
//   url:'http://123.207.32.32:8000/home/data?type=sell&page=1'
// }).then((ref)=>{
//   console.log(ref);
// })
// const instancel =axios.create({
//   baseURL:"http://123.207.32.32:8000",
//   timeout:5000
// })
// instancel({
//   url:'/api/v1/home/multidata'
// }).then(ref=>{
//   console.log(ref);
// })
import {request} from "./network/request";

// request({
//   url:'/api/v1/home/multidata'
// },res=> {
//   console.log(res);
// },err => {
//   console.log(err);
// })
request({
  url:'/api/v1/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})

