<template>
<div class="container-quizz">

  <h2>Send us a question !</h2>
  <div class="form-question">

    <div class="form-question-item">
      <div class="col s16 l6 m6 offset-s1 offset-l3 offset-m3">
        <div class="input-field">
          <input id="question-input" type="text" name="question" data-length="140" class="validate" placeholder="Should I stay or should I go?" v-model="question">
          <label class="active" for="qestion-input">Question</label>
        </div>
      </div>
      <div class="col s3 l3 m3" :class="{'offset-l3 offset-l3 offset-l3': index % 2 === 0}" v-for="(answer, index) in answers">
        <div class="input-field">
          <input :id="'answer' + (index + 1)" :placeholder="placeholders[index]" type="text" data-length="140" class="validate" v-model="answers[index]">
          <label class="active" :for="'answer' + (index + 1)">{{'Answer ' + (index + 1) }}</label>
        </div>
      </div>
      <div class="col s10 l6 m6 offset-s1 offset-l3 offset-m3">
        <div class="input-field">
          <input id="visual-input" v-model="visual" type="text" name="visual" placeholder="http://www.gifbin.com/bin/102015/1444064429_pope_francis_table_cloth_trick.gif" class="validate">
          <label class="active" for="visual-input">visual</label>
        </div>
      </div>
    </div>

    <div class="form-question-item">
      <quizz :question="generateQuestion" ></quizz>
    </div>
  </div>

  <div class="row center-align">
    <a @click="sendQuestion" class="waves-effect waves-light btn">Submit</a>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import Quizz from '@/components/Quizz';

require('materialize-css');

export default {
  name: 'form',
  data() {
    return {
      question: 'Should I stay or should I go?',
      placeholders: ['If I go, there will be trouble', 'God save the queen !', 'Be or not to be', 'The D answer'],
      answers: ['If I go, there will be trouble', 'God save the queen !', 'Be or not to be', 'The D answer'],
      visual: 'http://www.gifbin.com/bin/102015/1444064429_pope_francis_table_cloth_trick.gif',
    };
  },
  components: {
    Quizz,
  },
  computed: {
    generateQuestion() {
      const q = {
        question: this.question,
        answers: this.answers,
        visual: this.visual,
      };
      return q;
    },
  },
  methods: {
    sendQuestion() {
      console.log('SEND');
    },
  },
  created() {
    // Materialize.updateTextFields();
    $('question-form, visual-input, answer1, answer2, answer3, answer4').characterCounter();
  },
};
</script>

<style lang="scss">

.form-question  {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 60px;
}
.form-question-item {
  display: block;
  width: 50%;
  padding: 0 5%;
  box-sizing: border-box;
}

.form-question-item:first-child {
  border-right: 2px solid rgba(0, 0, 0, 0.1);
}
</style>
