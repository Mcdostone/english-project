<template>
<div class="container-quizz">

  <div v-if="!created">
    <h2>Create a game</h2>
    <div class="container">
      <div class="row">
        <div class="col s10 l6 m6 offset-s1 offset-l3 offset-m3">
          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="username" v-model="usernameInput" type="text" class="validate">
            <label class="active" for="username">Username</label>
          </div>
        </div>
      </div>
      <overlay v-if="begin" v-on:begin="createGame"></overlay>

      <div class="row center-align">
        <a @click="run()" class="waves-effect waves-light btn">I am ready!</a>
      </div>

      <div class="row center-align">
        <img :src="load" alt="" class="octopus">
      </div>
    </div>
  </div>

  <quizz :question="currentQuestion" v-if="created && !isFinished"></quizz>
  <!--<loader v-show="loading"></loader>-->
  <quizz-counter v-if="created && !isFinished"></quizz-counter>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from '@/components/Loader';
import Overlay from '@/components/Overlay';
import Creating from '@/components/Creating';
import QuizzCounter from '@/components/QuizzCounter';
import Quizz from '@/components/Quizz';
import load from '../assets/load.gif';

export default {
  name: 'Game',
  data() {
    return {
      loading: false,
      load,
      usernameInput: this.$store.getters.username,
      begin: false,
      created: false,
    };
  },
  components: {
    Loader,
    Creating,
    Overlay,
    QuizzCounter,
    Quizz,
  },
  computed: {
    ...mapGetters(['username', 'countQuestions']),

    isFinished() {
      if (this.$store.getters.quizzFinished === true) {
        this.$router.push('/end');
        return true;
      }
      return false;
    },

    currentQuestion() {
      if (this.$store.getters.countQuestions > 0) {
        return this.$store.getters.currentQuestion;
      }
      return undefined;
    },
  },
  created() {
    this.$store.dispatch('reset');
//    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = 'initial';
  },
  methods: {
    ...mapGetters(['countQuestions']),

    ...mapActions(['setUsername']),

    run() {
      this.setUsername(this.usernameInput);
      this.begin = true;
    },

    createGame() {
      this.created = true;
      this.loading = true;
      this.fetchQuestions();
    },
    fetchQuestions() {
      let url = '/api/questions';
      if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:8080/api/questions';
      }
      this.$http.get(url).then((response) => {
        if (response.body && response.body.questions) {
          this.$store.dispatch('setToken', response.body.token);
          this.$store.dispatch('addQuestion', response.body.questions);
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.container-quizz {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: auto;
  flex: 1 0 auto;
  padding: 0;
  flex-direction: column;
  padding-top: 120px;
  width: 100%;
  box-sizing: border-box;
  //margin-left: 10%;

  //background: red;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
}
</style>
