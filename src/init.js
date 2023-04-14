import Vue from 'vue'

import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'

import '@blibli/dls/src/assets/scss/blue.scss'

import '@api-mock'

export default {
  start () {
    if (import.meta.env.MODE !== 'production') {
      Vue.config.devtools = true
    }
    new Vue({
      i18n,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}
