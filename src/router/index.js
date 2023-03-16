import Vue from 'vue'
import VueRouter from 'vue-router'
import { app, pages } from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: pages.home,
    name: app.routerName.home,
    component: () => import('../pages/HomePage.vue'),
    meta: { title: `${app.title.base} - ${app.title.home}` }
  },
  {
    path: pages.manageBooks,
    name: app.routerName.manageBooks,
    component: () => import('../pages/ManageBooksPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.manageBooks}` }
  },
  {
    path: pages.buyBooks,
    name: app.routerName.buyBooks,
    component: () => import('../pages/BuyBooksPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.buyBooks}` }
  },
  {
    path: pages.about,
    name: app.routerName.about,
    component: () => import('../pages/AboutPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.about}` }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
