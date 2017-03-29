<template>
<div class="quizz" v-if="question">
  <div class="question">
    <transition enter-active-class="animated pulse" leave-active-class="animated fadeOut">
      <noooo v-if="wrong" v-on:close="closeNoooo"></noooo>
    </transition>

    <div v-if="question.visual && !isVideo" class="center visual-container">
      <img :src="question.visual" class="visual" alt="">
    </div>
    <div v-if="isVideo" class="center visual-container">
      <video-question :video="question.visual"></video-question>
    </div>
    <p>{{question.question}}</p>
    <ul>
      <li v-for="(a, index) in question.answers" @click="answer($event, index)" class="answer btn waves-effect waves-light">{{a}}</li>
    </ul>
  </div>
</div>
</template>

<script>
import Noooo from '@/components/Noooo';
import VideoQuestion from '@/components/VideoQuestion';

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
    VideoQuestion,
  },
  props: ['question', 'disable'],
  computed: {
    isHidden(index) {
      return this.hidden[index] === true;
    },
    isVideo() {
      if (this.question.visual) {
        const tmp = this.question.visual.split(',');
        if (tmp.length >= 0) {
          return tmp[0] === 'youtube';
        }
      }
      return false;
    },

    hasLost() {
      if (this.$store.getters.quizzFinished === true && this.$store.getters.getLifes <= 0) {
        return true;
      }
      return false;
    },

  },

  methods: {
    closeNoooo() {
      this.wrong = false;
    },

    answer(e, index) {
      if (!this.disable) {
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
        this.win = this.$store.getters.isWinner;
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
  max-width: 100%;
  text-align: center;
  }

.question ul {
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
    min-height: 50px;
    height: auto;
    line-height: 50px;
    margin: 1%;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
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

.delay {
   animation-delay: 0.5s;
}
</style>
