import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/login'
import '../assets/css/global.css'
import Home from '@/components/home'

Vue.use(Router)

// 在守卫中对token进行检查
const router = new Router({
  routes: [{
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {

  const token = window.sessionStorage.getItem('token')
  if (token === null && to.path !== '/login') {
    console.log(1111)
    return next('/login')
  }
  next()
})

export default router
