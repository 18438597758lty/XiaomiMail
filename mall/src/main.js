import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'  //把axios挂载的vue实例下，方便任何使用调用
import App from './App.vue'
import env from './env'
// 根据前端的跨域方式做调整  /a/b   /api/a/b===>  /a/b
axios.defaults.baseURL='/api';  
axios.defaults.timeout = 8000;   //超时时间一定要做设置
//根据环境变量获取不同的请求地址
axios.defaults.baseURL=env.baseURL;
// 拦截代码
// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';   //
  }else{
    alert(res.msg);
  }
})


Vue.use(VueAxios,axios);   //以后使用axios就可以用vue调用了
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
