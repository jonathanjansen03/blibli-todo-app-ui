import Vue from 'vue'
import VueRouter from 'vue-router'
import { app, pages } from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: pages.home,
    name: app.home,
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: pages.manageBooks,
    name: app.manageBooks,
    component: () => import('../pages/ManageBooksPage.vue')
  },
  {
    path: pages.buyBooks,
    name: app.buyBooks,
    component: () => import('../pages/BuyBooksPage.vue')
  },
  {
    path: pages.about,
    name: app.about,
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
