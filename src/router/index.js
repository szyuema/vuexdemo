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
  }
];

var router = new Router({
  routes // （缩写）相当于 routes: routes
});

router.push('/demo1');
export default router;
