import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//buefy
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
