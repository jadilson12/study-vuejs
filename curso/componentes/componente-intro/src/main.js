import Vue from 'vue'
import App from './App.vue'
// import Contador from './components/contador.vue'
import Contadores from './components/Contadores.vue'
Vue.config.productionTip = false
Vue.component('contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
