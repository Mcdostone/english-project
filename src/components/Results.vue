<template>
<div class="container container-quizz">

  <h2>{{message}}</h2>
  <div class="octopus center">
    <img :src="octopus" alt="">
  </div>

  <table>
   <thead>
     <tr>
       <th data-field="question">Question</th>
       <th data-field="expected">Expected Answer</th>
       <th data-field="yours">Your answer</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="(question, index) in questions">
       <td>{{question.question}}</td>
       <td>{{getExpectedAnswer(index)}}</td>
       <td>{{getUserAnswer(index)}}</td>
     </tr>
   </tbody>
  </table>

</div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'results',
  data() {
    return {};
  },
  computed: {
    questions() {
      return this.$store.getters.getQuestions;
    },

    octopus() {
      if (this.$store.getters.isHacker) {
        return '../assets/angry.gif';
      }
      return '../assets/nice.gif';
    },

    message() {
      if (this.$store.getters.getLifes === 0) {
        return 'So much intelligence ...';
      }
      return 'Have you hacked ? Congratulations !';
    },
  },
  methods: {
    getExpectedAnswer(index) {
      return this.$store.getters.getAnswer(index);
    },

    getUserAnswer(index) {
      return this.$store.getters.getUserAnswer(index);
    },
  },
};

</script>

<style lang="scss">
</style>
