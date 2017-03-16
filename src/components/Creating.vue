<template>
<div class="">
  <h2>Creating a game</h2>
  <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="username" v-model="inputUsername" @keyup="update()" type="text" class="validate">
            <label for="username">Username</label>
          </div>
        </div>
      </div>

      <div class="row center-align">
        <a @click="createGame()" class="waves-effect waves-light btn">Create</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppStore from '@/AppStore';

export default {
  name: 'creating',
  data() {
    return {
      store: AppStore,
      inputUsername: '',
    };
  },
  computed: {
    username() {
      if (this.store && this.store.state.username) return this.store.state.username;
      return 'guest';
    },
  },
  methods: {
    createGame() {
      this.$router.push('/quizz');
    },
    update() {
      this.store.state.username = this.inputUsername;
    },
  },
};
</script>

<style lang="scss">
</style>
