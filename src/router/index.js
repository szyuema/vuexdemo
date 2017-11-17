import Vue from 'vue';
import Router from 'vue-router';
import demo1 from '../components/demo/demo1';

Vue.use(Router);

const routes = [
  {
    path: '/demo1',
    name: 'c',
    component: demo1,
    meta: {
      keepalive: true,
      title: '关于我们'
    }
  },
  { path: '/', redirect: '/Login' },
  { path: '/Login', component: resolve => require(['../components/login/Login'], resolve) },
  {
    path: '/main',
    // redirect: '/main/A',
    component: resolve => require(['../components/main/main.vue'], resolve),
    children: [
      { path: 'A', component: resolve => require(['../components/main/main/A.vue'], resolve) },
      { path: 'B', component: resolve => require(['../components/main/main/B.vue'], resolve) }
    ]
  }

];

var router = new Router({
  routes // （缩写）相当于 routes: routes
});
export default router;
