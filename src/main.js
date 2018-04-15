import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'

Vue.use(VueRouter);

const routes = [
  { path:'/', name: Home, component: Home },
  { path: '/Resume', name: Resume, component: Resume },
  { path: '/Portfolio', name: Portfolio, component: Portfolio }
];

export default router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

