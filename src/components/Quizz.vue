<template>
<div class="quizz left">
 <div class="question" v-if="question">
   <div class="center visual-container">
     <img :src="question.visual" class="visual" alt="">
   </div>
   <p>{{question.question}}</p>
   <ul class="container">
     <li v-for="(a, index) in question.answers" @click="answer($event, index)" class="answer btn waves-effect waves-light">{{a}}</li>
   </ul>
 </div>
</div>
</template>

<script>

export default {
  name: 'quizz',
  data() {
    return {
      hidden: [],
    };
  },
  props: ['question'],
  computed: {
    isHidden(index) {
      return this.hidden[index] === true;
    },
  },
  methods: {
    answer(e, index) {
      if (this.$store.getters.isCorrectAnswer(index)) {
        this.$store.dispatch('answer', index);
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-return-assign */
        this.hidden.forEach(el => el.style.visibility = 'visible');
        this.hidden = [];
      } else {
        this.hidden.push(e.target);
        /* eslint-disable no-param-reassign */
        /* eslint-disable no-return-assign */
        this.hidden.forEach(el => el.style.visibility = 'hidden');
        this.$store.dispatch('reduceLife');
      }
    },
  },
};
</script>

<style lang="scss">
.quizz {
  display: inline-block;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 20px;
}

.question {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.question p {
  padding: 10px 0;
  font-size: 1.5em;
  //border-bottom: 2px solid rgba(gray, 0.1);
}

.question .container {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  background: none;
  .answer {
    width: 40%;
    height: 50px;
    line-height: 50px;
    margin: 1%;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
}
.visual {
  max-height: 300px;
  display: block;
  margin: 0 auto;
}

.visual-container {
  display: inline-block;
  position: relative;
  width: 100%;
  text-align: center;
/*  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 50px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    height: 50px;
    background: #E57373;
  }*/
}

.hidden {
  visibility: hidden;
}

</style>
