import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import App from './App'
import Login from 'components/Login'
import Home from 'components/Home'
import Hello from 'components/Hello'

Vue.use(Element)
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/hello', component: Hello }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
