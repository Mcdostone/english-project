<template>
<div class="container-quizz results">

  <h2>{{message}}</h2>
  <div class="points center-align">
    <p v-if="!isHacker">{{questionsAnswered - 1}} {{points}} in {{seconds}} seconds</p>
  </div>

  <div class="center">
    <img :src="octopus" alt="" class="octopus" style="height: 250px">
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
    return {
      railleries: [
        'Your father will be so proud of you ...',
        'Can you do better?',
        'So much intelligence...',
        'You were born intelligent. Education ruined you!',
        'You\'re never too old to learn something good!',
        '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe." - Albert Einstein',
      ],
    };
  },
  components: {
    TopPlayers,
  },
  computed: {
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
      if (this.$store.getters.isHacker) {
        return 'Are you Martinez, the hacker?';
      }
      return this.railleries[Math.floor(Math.random() * this.railleries.length)];
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
      let url = '/api/top';
      if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:3141/api/top';
      }
      this.$http.post(url, {
        username: this.$store.getters.username,
        points: this.$store.getters.questionsAnswered,
      });
    },
  },
};
</script>

<style lang="scss">
.results {
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: flex-start;
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
