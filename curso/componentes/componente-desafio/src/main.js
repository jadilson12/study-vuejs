import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Content from './components/Content.vue'
import footer from './components/footer.vue'
import Navigation from './components/Navigation.vue'
import Toolbar from './components/Toolbar.vue'

Vue.config.productionTip = false
// Vue.components('content', Content)
// Vue.component('footer', footer)
// Vue.components('navigation', Navigation)
// Vue.components('toolbar', Toolbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
