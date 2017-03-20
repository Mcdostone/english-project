import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GameBoard from '@/components/GameBoard';
import Quizz from '@/components/Quizz';
import Results from '@/components/Results';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/create',
      name: 'create',
      component: GameBoard,
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: Quizz,
    },

    {
      path: '/end',
      name: 'end',
      component: Results,
    },

  ],
});
