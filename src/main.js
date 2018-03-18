import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/datas'
import store from './store'
import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload, {
    loading:require('./common/img/default-epet.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) //结果所有路由组件多了两个属性
})
