import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import { app, pages } from '@/config'

Vue.use(VueRouter)

const routes = [
  {
    path: pages.home,
    name: app.home,
    component: HomePage
  },
  {
    path: pages.about,
    name: app.about,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
