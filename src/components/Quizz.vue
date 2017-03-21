<template>
<div class="quizz left">
  <transition  enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
    <noooo v-if="wrong" v-on:close="closeNoooo"></noooo>
  </transition>
 <div class="question" v-if="question">
   <div v-if="question.visual" class="center visual-container">
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
import Noooo from '@/components/Noooo';

export default {
  name: 'quizz',
  data() {
    return {
      hidden: [],
      wrong: false,
    };
  },
  components: {
    Noooo,
  },
  props: ['question'],
  computed: {
    isHidden(index) {
      return this.hidden[index] === true;
    },
  },
  methods: {
    closeNoooo() {
      console.log('fjhdfhjsjhfd');
      this.wrong = false;
    },

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
        this.wrong = true;
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
  width: 100%;
  flex: 1 0 auto;
  padding-left: 10%;
}



.question {
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  width: 100%;
  height: auto;
  text-align: center;
}
.question p {
  padding: 0px 0;
  margin: 10px;
  font-size: 1.5em;
  //border-bottom: 2px solid rgba(gray, 0.1);
}

.question .container {
  padding: 0;
  margin: 0 auto;
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
  max-height: 250px;
  object-fit: cover;
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

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
