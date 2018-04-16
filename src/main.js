import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'

// Vue.component('testing-home', Home);

Vue.use(VueRouter);

const routes = [
  { path:'/', name: Home, component: Home },
  { path: '/Resume', name: Resume, component: Resume },
  { path: '/Portfolio', name: Portfolio, component: Portfolio }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

