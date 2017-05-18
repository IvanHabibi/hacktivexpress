import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Hello from '@/components/Hello'
import index from '@/components/index'
import navbar from '@/components/navbar'
import login from '@/components/login'
import articleDetail from '@/components/articleDetail'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
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
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: articleDetail
    },
  ]
})
