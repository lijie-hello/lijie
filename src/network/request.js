import axios from 'axios'
// export function request(config,success,failure) {
//   //axios实力
//   const instancel =axios.create({
//     baseURL:"http://123.207.32.32:8000",
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instancel(config)
//     .then(res => {
//    success(res)
//     })
//     .catch(err => {
//     failure(err)
//     })
// }
// export function request(config) {
//   //axios实力方法二
//   return new Promise((resolve,reject)=>{
//     const instancel =axios.create({
//       baseURL:"http://123.207.32.32:8000",
//       timeout:5000
//     })
//     //发送真正的网络请求
//     instancel(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
//
// }
export function request(config) {
  //axios实力方法二

    const instancel =axios.create({
      baseURL:"http://123.207.32.32:8000",
      timeout:5000
    })
  //axios的拦截器
  //请求拦截的作用
  instancel.interceptors.request.use(config =>{
    console.log(config);
    //1.比如config中的一些信息不符合服务器要求
    //2.比如每次发送网络请求，都希望在界面中显示一个请求图标
    //3.某些网络请求比如登录，必须携带一些特殊信息
    return config
  },err=>{
    console.log(err);
  })
    //发送真正的网络请求
 return instancel(config)


}
