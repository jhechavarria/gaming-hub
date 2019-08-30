import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import games from '@/plugins/games/index'
import vuetify from '@/plugins/vuetify'
import('es6-promise/auto')

Vue.use(games)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
