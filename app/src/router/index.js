import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import GameBoard from '@/components/GameBoard';
import Quizz from '@/components/Quizz';
import TopPlayersContainer from '@/components/TopPlayersContainer';
import Results from '@/components/Results';
import QuestionForm from '@/components/QuestionForm';
import Thanks from '@/components/Thanks';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/play',
      name: 'play',
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
    {
      path: '/help-us',
      name: 'form',
      component: QuestionForm,
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks,
    },

    {
      path: '/highscore',
      name: 'highscore',
      component: TopPlayersContainer,
    },
  ],
});
