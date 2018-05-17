import Vue from 'vue'
import Router from 'vue-router'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import Main from '@/components/main/index'

import Login from '@/components/login/index'
import Join from '@/components/join/index'

import Vuex from '@/components/test/vuex'

import Todo from '@/components/todo'

import Socket from '@/components/socket'

Vue.use(Router)

const COMMON_LAYOUT = (component) => {
  return {header: Header, footer: Footer, body: component}
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      components: COMMON_LAYOUT(Main)
    },
    {
      path: '/login',
      name: 'Login',
      components: COMMON_LAYOUT(Login)
    },
    {
      path: '/join',
      name: 'Join',
      components: COMMON_LAYOUT(Join)
    },
    {
      path: '/test/vuex',
      name: 'Vuex',
      components: COMMON_LAYOUT(Vuex)
    },
    {
      path: '/todo/',
      name: 'Todo',
      components: COMMON_LAYOUT(Todo)
    },
    {
      path: '/socket/',
      name: 'Socket',
      components: COMMON_LAYOUT(Socket)
    }
  ]
})
