import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Creating from '@/components/Creating';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/creating-game',
      name: 'create',
      component: Creating,
    },
  ],
});
