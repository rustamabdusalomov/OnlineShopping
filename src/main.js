import Vue from 'vue'
import App from './App.vue'
import routes from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
