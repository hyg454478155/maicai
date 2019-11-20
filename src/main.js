import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios";
const less =require('less')
Vue.use(Vant);
//配置axios
Vue.config.productionTip = false
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://127.0.0.1:4000/";


Vue.prototype.axios=axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
