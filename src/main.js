import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
//import '@/assets/css/main.css'
import { ToastPlugin } from 'bootstrap-vue'
import Notifications from 'vue-notification'


Vue.use(Notifications)
Vue.use(ToastPlugin)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
