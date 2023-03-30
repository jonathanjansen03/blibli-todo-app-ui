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
    path: pages.cart,
    name: app.routerName.cart,
    component: () => import('../pages/CartPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.cart}` }
  },
  {
    path: pages.about,
    name: app.routerName.about,
    component: () => import('../pages/AboutPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.about}` }
  },
  {
    path: pages.insertBook,
    name: app.routerName.insertBook,
    component: () => import('../pages/InsertBookPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.insertBook}` }
  },
  {
    path: pages.updateBook,
    name: app.routerName.updateBook,
    component: () => import('../pages/UpdateBookPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.updateBook}` }
  },
  {
    path: pages.bookDetail,
    name: app.routerName.bookDetail,
    component: () => import('../pages/BookDetailPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.bookDetail}` }
  },
  {
    path: pages.createReport,
    name: app.routerName.createReport,
    component: () => import('../pages/CreateReportPage.vue'),
    meta: { title: `${app.title.base} - ${app.title.createReport}` }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
