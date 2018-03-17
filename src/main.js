import Vue from 'vue'
import App from './App'
import router from './router'
import Greeter from '@/components/greeter.vue'


Vue.component('app-greeter', Greeter)


new Vue({
  el: '#app',
  render: app => app(App)
})
