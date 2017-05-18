import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Hello from '@/components/Hello'
import index from '@/components/index'
import navbar from '@/components/navbar'
import login from '@/components/login'

Vue.use(Vuetify)
Vue.component('navbar',navbar)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
