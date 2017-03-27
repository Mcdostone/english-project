<template>
  <div>
    <div class="splashscreen">
      <div class="splashscreen-item">
        <video class="splashscreen-img" autoplay loop :poster="poster">
          <source :src="video" type="video/mp4" />
        </video>
        <div class="splashscreen-text">
          <p>THe Octopus challenge</p>
          <router-link :to="{name: 'play'}" class="play-button waves-effect waves-light btn">
            <i class="material-icons left">cloud</i>
            Play
          </router-link>
        </div>
        <span @click="playVideo" class="splashscreen-overlay"></span>
    </div>
  </div>

    <div class="container rules" id="rules">
      <!--<h2>The Octopus Quizz !</h2>-->
      The Octopus Challenge is a quiz developped in the english courses context. It has been
developped by students for students who wants to test a new way to learn english. Try our application right now !
      <h3>Rules</h3>
      <p>
        Rules are simple: you have to answer a set of questions about general culture, grammar, listening comprehension, vocabulary...
        <br>1 question, 4 answers but only 1 correct ! Choose the good answer to continue the game.<br>If you answer wrong 3 times, you lose and have to play
        again since the beginning of the quiz.
        <br>
        <br>

        Good luck !
      </p>
    </div>
  </div>
</template>

<script>
import video from '../assets/splashscreen.mp4';
import poster from '../assets/poster.png';

export default {
  name: 'Home',
  data() {
    return {
      video,
      poster,
    };
  },
  methods: {
    playVideo() {
      document.getElementsByClassName('splashscreen-img')[0].play();
    },
  },
};
</script>

<style lang="scss" src="./Home.scss">
</style>
