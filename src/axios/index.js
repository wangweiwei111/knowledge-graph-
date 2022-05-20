import Vue from 'vue'
import axios  from 'axios'
axios.defaults.baseURL="http://localhost:3000"
Vue.prototype.$ajax = axios//重命名为ajax，使用$ajax.get即可调用