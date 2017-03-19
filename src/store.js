import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  username: 'guest',
  questions: [],
  current: 0,
};

const mutations = {
  SET_USERNAME(s, u) {
    /* eslint-disable no-param-reassign  */
    s.username = u;
  },
  ADD_QUESTION(s, q) {
    /* eslint-disable no-param-reassign  */
    s.questions.push(...q);
  },
};

const getters = {
  username(s) {
    return s.username;
  },

  countQuestions(s) {
    return s.questions.length;
  },

  getQuestion(s) {
    return s.questions[0];
  },

  currentQuestion(s) {
    return s.questions[s.current];
  },
};

const actions = {
  setUsername(s, username) {
    s.commit('SET_USERNAME', username);
  },
  addQuestion(s, question) {
    s.commit('ADD_QUESTION', question);
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
