// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
<<<<<<< HEAD

Vue.use(ElementUI)
Vue.config.productionTip = false
=======
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'

Vue.use(ElementUI)
// Vue.config.productionTip = false

// 给axios做配置
axios.defaults.baseURL = 'http://127.0.0.1:11333/api/private/v1/'
Vue.prototype.$http = axios
>>>>>>> login

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
