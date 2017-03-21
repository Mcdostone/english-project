<template>
<ul class="quizz-counter">
  <li>{{questionsAnswered}}/{{countQuestions}}</li>
  <li id="lifes">
    <span><p>{{getLifes}}</p><i class="large material-icons center">starts</i>
</span>
  </li>
  <li>
    <chronometer :stop="quizzFinished"></chronometer>
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Chronometer from '@/components/Chronometer';

export default {
  name: 'QuizzCounter',
  components: {
    Chronometer,
  },
  computed: {
    ...mapGetters(['questionsAnswered', 'countQuestions', 'getLifes', 'quizzFinished']),
  },
};
</script>

<style lang="scss">
.quizz-counter {
  background: #26a69a;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-right: 2px solid #059C8C;
}

.quizz-counter li {
  font-weight: 100;
  font-size: 3em;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    i {
      width: 50px;
      font-size: 1em;
    }

    p {
      float: left;
    }
  }
}

#lifes {
  //margin-top: 50px;
}

</style>
