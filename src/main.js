import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
