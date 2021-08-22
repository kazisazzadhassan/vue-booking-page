import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import css from '@/assets/css/app.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  css,
  render: h => h(App)
}).$mount('#app')
