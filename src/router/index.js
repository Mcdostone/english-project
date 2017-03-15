import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GameBoard from '@/components/GameBoard';
import Quizz from '@/components/Quizz';

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
      component: GameBoard,
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: Quizz,
    },

  ],
});
