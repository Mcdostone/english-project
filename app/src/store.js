import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  username: 'guest',
  questions: [],
  answers: [],
  current: 0,
  lifes: 3,
  chronometer: undefined,
  token: undefined,
};

const mutations = {
  SET_USERNAME(s, u) {
    /* eslint-disable no-param-reassign  */
    s.username = u;
    const names = ['Elisabeth II', 'Mr Bean', 'Jake Bugg', 'The D answer'];

    const question = {
      question: 'Who are you ?',
      answers: [],
      correct: 3,
      visual: 'youtube,PdLIerfXuZ4,20,26',
    };

    const question2 = {
      question: 'test ?',
      answers: ['a', 'b', 'c', 'd'],
      correct: 3,
      visual: 'youtube,ovgCHfCnX3E,30,28',
    };
    names.forEach((e) => {
      if (u !== e) {
        question.answers.push(e);
      } else {
        question.answers.push((Math.random() * 9e6).toString(36));
      }
    });

    question.answers[question.correct] = u;

    s.questions.push(question);
    s.questions.push(question2);
  },

  SET_CHRONO(s, seconds) {
    /* eslint-disable no-param-reassign  */
    s.chronometer = seconds;
  },

  ADD_QUESTION(s, q) {
    /* eslint-disable no-param-reassign  */
    s.questions.push(...q);
  },

  REDUCE_LIFE(s) {
    /* eslint-disable no-param-reassign  */
    s.lifes -= 1;
  },

  NEXT_QUESTION(s) {
    /* eslint-disable no-param-reassign  */
    s.current += 1;
  },

  SET_TOKEN(s, token) {
    /* eslint-disable no-param-reassign  */
    s.token = token;
  },

  ANSWER(s, answer) {
    /* eslint-disable no-param-reassign  */
    if (s.questions[s.current].correct !== answer) {
      s.lifes -= 1;
    }
    s.answers[s.current] = answer;
    s.current += 1;
  },

  RESET(s) {
    s.questions = [];
    s.answers = [];
    s.current = 0;
    s.lifes = 3;
  },
};

const getters = {
  username(s) {
    return s.username;
  },

  quizzFinished(s) {
    if (s.lifes <= 0) {
      return true;
    }
    return (s.questions.length === 0) ? false : s.current >= s.questions.length;
  },

  countQuestions(s) {
    return s.questions.length;
  },

  questionsAnswered(s) {
    return s.current + 1;
  },

  isHacker(s) {
    return s.questions.length === 0;
  },

  seconds(s) {
    return s.chronometer;
  },


  getQuestion(s) {
    return s.questions[0];
  },

  currentQuestion(s) {
    return s.questions[s.current];
  },

  getLifes(s) {
    return s.lifes;
  },

  getQuestions(s) {
    return s.questions;
  },

  getToken(s) {
    return s.token;
  },

  /* eslint-disable no-unused-vars*/
  isCorrectAnswer: (s, g) => index => s.questions[s.current].correct === index,

  /* eslint-disable no-unused-vars*/
  /* eslint-disable no-unused-vars arrow-body-style */
  getAnswer: (s, g) => (index) => {
    if (s.questions[index]) {
      return s.questions[index].answers[s.questions[index].correct];
    }
    return undefined;
  },

  getquestion: (s, g) => index => s.questions[index].question,

  getUserAnswer: (s, g) => index => s.questions[index].answers[s.answers[index]],
};

const actions = {
  setUsername(s, username) {
    s.commit('SET_USERNAME', username);
  },
  addQuestion(s, question) {
    s.commit('ADD_QUESTION', question);
  },

  nextQuestion(s) {
    s.commit('NEXT_QUESTION');
  },

  reduceLife(s) {
    s.commit('REDUCE_LIFE');
  },

  answer(s, answer) {
    s.commit('ANSWER', answer);
  },

  reset(s) {
    s.commit('RESET');
  },

  setToken(s, token) {
    s.commit('SET_TOKEN', token);
  },

  setChrono(s, seconds) {
    s.commit('SET_CHRONO', seconds);
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
});

global.store = store;
export default store;
