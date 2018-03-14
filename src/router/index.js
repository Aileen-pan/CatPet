/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Class from '../pages/Class/Class'
import Shopping from '../pages/Shopping/Shopping'
import Me from '../pages/Me/Me'

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
    },
    {
      path: '/shopping',
      component: Shopping,
    },
    {
      path: '/me',
      component: Me,
    },
    {
      path: '/',
      redirect: '/msite'
    },
  ]
})
