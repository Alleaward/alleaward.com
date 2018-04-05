import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Resume2 from './components/Resume2.vue'
import Portfolio from './components/Portfolio.vue'

Vue.use(VueRouter);

const routes = [
  { path:'/', component: Home },
  { path: '/Resume', component: Resume },
  { path: '/Resume2', component: Resume2 },
  { path: '/Portfolio', component: Portfolio }
];

const router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

