import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import '../assets/css/global.css'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login }
  ]
})
