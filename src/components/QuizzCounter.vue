<template>
<ul class="quizz-counter">
  <li>{{questionsAnswered}}</li>
  <li>/</li>
  <li>{{countQuestions}}</li>
  <li id="lifes">
    <span><p>{{getLifes}}</p><i class="large material-icons center">starts</i>
</span>
  </li>
</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'QuizzCounter',
  computed: {
    ...mapGetters(['questionsAnswered', 'countQuestions', 'getLifes']),
  },
};
</script>

<style lang="scss">
.quizz-counter {
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
  margin-top: 50px;
}
</style>
