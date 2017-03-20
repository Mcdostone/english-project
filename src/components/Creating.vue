<template>
<div class="">
  <h2>Creating a game</h2>
  <div class="container">
      <div class="row">
        <div class="col s6 offset-s3">
          <div class="input-field">
            <i class="material-icons prefix">account_circle</i>
            <input id="username" v-model="inputUsername" @keyup="setUsername(inputUsername)" type="text" class="validate">
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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'creating',
  data() {
    return {
      defaultUsername: 'Guest',
    };
  },
  computed: {
    ...mapGetters(['username']),
  },
  methods: {
    playAgain() {
      this.$router.push('/quizz');
    },
    ...mapActions(['setUsername']),
  },
};
</script>

<style lang="scss">
</style>
