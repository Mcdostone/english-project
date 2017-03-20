<template>
<div class="container container-quizz">

  <h2>{{message}}</h2>
  <div class="points center-align">
    <p>{{questionsAnswered - 1}} {{points}}</p>
  </div>

  <div class="octopus center">
    <img :src="octopus" alt="">
  </div>

  <div class="row center-align">
    <a @click="playAgain()" class="waves-effect waves-light btn">Play again</a>
    <a @click="playAgain()" class="waves-effect waves-light btn">Share facebook</a>
  </div>

  <top-players></top-players>

  <table v-if="!isHacker && questionsAnswered !== 1">
   <thead>
     <tr>
       <th data-field="question">Question</th>
       <th data-field="expected">Expected Answer</th>
       <th data-field="yours">Your answer</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="(v,index) in questionsAnswered - 1">
       <td>{{getquestion(index)}}</td>
       <td>{{getExpectedAnswer(index)}}</td>
       <td>{{getUserAnswer(index)}}</td>
     </tr>
   </tbody>
  </table>

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
  },
};

</script>

<style lang="scss">

.points p {
  line-height: 50px;
  font-size: 50px;
  font-weight: 100;
  margin: 0;
  padding: 0;
}
</style>
