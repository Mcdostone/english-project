<template>
<div class="container container-quizz">

  <div v-if="!created">
    <h2>Creating a game</h2>
    <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="username" v-model="username" type="text" class="validate">
            <label class="active" for="username">Username</label>
          </div>
        </div>
      </div>

      <div class="row center-align">
        <a @click="createGame()" class="waves-effect waves-light btn">Create</a>
      </div>
    </div>
  </div>

  <quizz :question="currentQuestion" v-if="created"></quizz>
  <loader v-show="loading"></loader>
</div>
</template>

<script>
import NavbarGame from '@/components/NavbarGame';
import Loader from '@/components/Loader';
import Creating from '@/components/Creating';
import Quizz from '@/components/Quizz';
import AppStore from '@/AppStore';

export default {
  name: 'Game',
  data() {
    return {
      loading: false,
      created: false,
      username: 'guest',
      store: AppStore,
    };
  },
  components: {
    NavbarGame,
    Loader,
    Creating,
    Quizz,
  },
  computed: {
    currentQuestion() {
      if (this.store.hasQuestions()) {
        return this.store.currentQuestion();
      }
      return undefined;
    },
  },
  methods: {
    createGame() {
      this.created = true;
      this.loading = true;
      this.fetchQuestions();
    },
    fetchQuestions() {
      this.$http.get('http://localhost:3141/api/questions').then((response) => {
        if (response.body) {
          this.store.addQuestion(response.body);
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.container-quizz {
  display: inline-block;
  height: auto;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 0;
  width: 80%;
  margin-left: 10%;
  //background: red;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  h2 {
    text-align: center;
  }
}
</style>
