// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductDetail from './components/ProductDetail.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail,
    props: (route) => ({
      id: route.params.id,
      menuItems: require('./data/menu-items.json')
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
