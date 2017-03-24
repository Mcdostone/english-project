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
        <div class="input-field tmp">
          <div class="tmp2">
            <input :id="'answer' + (index + 1)" :placeholder="placeholders[index]" type="text" data-length="140" class="validate" v-model="answers[index]">
            <label class="active" :for="'answer' + (index + 1)">{{'Answer ' + (index + 1) }}</label>
          </div>
          <p>
            <input class="with-gap" name="correct" @click="correct = index" value type="radio" :id="'correct' + index"  />
              <label :for="'correct' + index"></label>
            </p>
        </div>
      </div>


      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3"><a href="#image-input">Image</a></li>
            <li class="tab col s3"><a  href="#youtube-input">Youtube Vidéo</a></li>
          </ul>
        </div>
        <div id="image-input" class="col s12">
          <div class="input-field">
            <input id="visual-input" v-model="visual" type="text" name="visual" placeholder="http://www.gifbin.com/bin/102015/1444064429_pope_francis_table_cloth_trick.gif" class="validate">
            <label class="active" for="visual-input">link of image</label>
          </div>
        </div>
        <div id="youtube-input" class="col s12">
          <div class="input-field">
            <input id="youtube-input" v-model="youtube" type="text" name="visual" class="validate">
            <label class="active" for="youtube-input">videoID (youtube,videoId,start,end)</label>
          </div>

        </div>
      </div>

      <!--<div class="col s10 l6 m6 offset-s1 offset-l3 offset-m3">
        <div class="input-field">
          <input id="visual-input" v-model="visual" type="text" name="visual" placeholder="http://www.gifbin.com/bin/102015/1444064429_pope_francis_table_cloth_trick.gif" class="validate">
          <label class="active" for="visual-input">visual</label>
        </div>
      </div>
      -->
    </div>

    <div class="form-question-item">
      <quizz :question="generateQuestion" :disable="true"></quizz>
    </div>
  </div>

  <div class="row center-align">
    <div :class="{'animated zoomInLeft': error !== ''}" style="margin: 20px; font-size: 1.3em; color: #E57373">{{error}}</div>
    <a :class="{'disabled': correct === undefined}"@click="sendQuestion" class="waves-effect waves-light btn">Submit</a>
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
      error: '',
      question: 'Should I stay or should I go?',
      placeholders: ['If I go, there will be trouble', 'God save the queen !', 'Be or not to be', 'The D answer'],
      answers: ['If I go, there will be trouble', 'God save the queen !', 'Be or not to be', 'The D answer'],
      visual: 'http://www.gifbin.com/bin/102015/1444064429_pope_francis_table_cloth_trick.gif',
      youtube: 'youtube,sBzrzS1Ag_g, 50, 70',
      sent: false,
      token: undefined,
      correct: undefined,
    };
  },
  components: {
    Quizz,
  },
  computed: {
    generateQuestion() {
      const q = {
        question: this.question,
        answers: [...this.answers],
        visual: this.visual,
        _csrf: this.token,
      };
      return q;
    },
  },
  methods: {
    url() {
      let url = '/api/question';
      if (process.env.NODE_ENV === 'development') {
        url = 'http://localhost:8080/api/question';
      }
      return url;
    },
    sendQuestion() {
      if (this.correct !== undefined) {
        this.sent = true;
        const data = {
          question: this.question,
          answers: this.answers,
          correct: this.correct,
          visual: this.visual,
          _csrf: this.token,
        };
        this.$router.push('/thanks');
        this.$http.post(this.url(), JSON.stringify(data), {
          headers: { 'CSRF-Token': this.token },
        });
      } else {
        this.error = 'You forget to select the good answer !';
      }
    },
  },

  created() {
    // Materialize.updateTextFields();
    let url = '/api/question';
    if (process.env.NODE_ENV === 'development') {
      url = 'http://localhost:8080/api/question';
    }
    $('question-form, visual-input, answer1, answer2, answer3, answer4').characterCounter();
    $(document).ready(() => {
      $('ul.tabs').tabs();
    });
    this.$http.get(url).then((response) => {
      if (response.body.token) {
        this.token = response.body.token;
      }
    });
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

.tmp2 {
  width: 100%;
}
.tmp {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  & .input-field {
    width: 50%;
  }

  & .input-field .tmp div {
    width: 100%;
  }
}
</style>
