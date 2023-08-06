import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sale',
    name: 'Sale',
    component: () => import('../views/Sale.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/import',
    name: 'Import',
    component: () => import('../views/Import.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
