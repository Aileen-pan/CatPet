/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Class from '../pages/Class/Class'
import Shopping from '../pages/Shopping/Shopping'
import Me from '../pages/Me/Me'
import Classify from '../pages/Class/Classify/Classify'
import Brand from '../pages/Class/Brand/Brand'
import Login from '../pages/Me/Login/Login'
import Phone from '../pages/Me/Phone/Phone'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite,
    },
    {
      path: '/class',
      component: Class,
      children:[
        {
          path: 'brand',
          component: Brand,
        },
        {
          path: 'classify',
          component: Classify,
        },
        {
          path: '/',
          redirect: 'classify'
        },
      ]

    },
    {
      path: '/shopping',
      component: Shopping,
    },
    {
      path: '/me',
      component: Me,
      children:[
        {
          path: 'phone',
          component: Phone,
        },
        {
          path: 'login',
          component: Login,
        },
        {
          path: '/',
          redirect: 'login'
        },
      ]
    },

    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
