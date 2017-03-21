<template>
<div class="container-quizz results">

  <h2>{{message}}</h2>
  <div class="points center-align">
    <p v-if="!isHacker">{{questionsAnswered - 1}} {{points}} in {{seconds}} seconds</p>
    <i v-if="!isHacker">{{raillerie}}</i>
  </div>

  <div class="octopus center">
    <img :src="octopus" alt="" style="height: 250px">
  </div>

  <div v-if="!isHacker" class="row center-align">
    <a @click="playAgain()" class="waves-effect waves-light btn">Play again</a>
    <a @click="sendResults" class="waves-effect waves-light btn">Share your score</a>
  </div>
  <div v-else class="row center-align">
    <a @click="playAgain()" class="waves-effect waves-light btn">Play game</a>
  </div>


  <top-players></top-players>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopPlayers from '@/components/TopPlayers';
import nice from '../assets/nice.gif';
import angry from '../assets/angry.gif';

export default {
  name: 'results',
  data() {
    return {};
  },
  components: {
    TopPlayers,
  },
  computed: {

    raillerie() {
      return 'Your father will be so proud of you ...';
    },

    ...mapGetters(['seconds']),

    points() {
      return this.$store.getters.questionsAnswered - 1 > 1 ? 'points' : 'point';
    },

    questions() {
      return this.$store.getters.getQuestions;
    },

    octopus() {
      if (this.$store.getters.isHacker) {
        return angry;
      }
      return nice;
    },

    message() {
      if (this.$store.getters.getLifes === 0) {
        return 'So much intelligence ...';
      }

      if (this.$store.getters.isHacker) {
        return 'Are you Martinez, the hacker?';
      }
      return 'Can you do better?';
    },

    ...mapGetters(['isHacker', 'questionsAnswered', 'getquestion']),
  },
  methods: {
    getExpectedAnswer(index) {
      return this.$store.getters.getAnswer(index);
    },

    getUserAnswer(index) {
      return this.$store.getters.getUserAnswer(index);
    },

    playAgain() {
      this.$router.push('/create');
    },
    sendResults() {
      this.$http.post('http://localhost:3141/api/top', {
        username: this.$store.getters.username,
        points: this.$store.getters.questionsAnswered,
      });
    },
  },
};
</script>

<style lang="scss">
.results {
  padding-left: 20%;
  padding-right: 20%;
}
.points p {
  line-height: 50px;
  font-size: 50px;
  font-weight: 100;
  margin: 0;
  padding: 0;
}
i {
  font-weight: 100;
  margin: 0px;
  //font-style: normal;
  font-size: 1.2em;
}
</style>
