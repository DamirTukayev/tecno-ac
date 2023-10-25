import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productCategory from '../components/Catalog/ProductCategoryVue.vue'

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
  },
  {
    path: '/dealers',
    name: 'Dealers',
    component: () => import('../views/Dealers.vue')
  },
  {
    path: '/tenders',
    name: 'Tenders',
    component: () => import('../views/Tenders.vue')
  },
  {
    path: '/WhyAreWe',
    name: 'WhyAreWe',
    component: () => import('../views/WhyAreWe.vue')
  },
  {
    path: '/cooperations',
    name: 'Cooperations',
    component: () => import('../views/Cooperations.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../components/Catalog/CatalogVue.vue'),
  },
  {
    path: '/catalog/:id',
    component: productCategory,
    name: 'product-category'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
