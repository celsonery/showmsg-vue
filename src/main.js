import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
