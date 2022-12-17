import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 1.
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.config.productionTip = false
// 2.
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  router,
  // 3.
  pinia,
  render: h => h(App)
}).$mount('#app')
