<template>
  <div>
    <div class="splashscreen">
      <div class="splashscreen-item">
        <video class="splashscreen-img" autoplay loop :poster="poster">
          <source :src="video" type="video/mp4" />
        </video>
        <div class="splashscreen-text">
          <p>Challenge Octopus !</p>
          <router-link :to="{name: 'create'}" class="play-button waves-effect waves-light btn">
            <i class="material-icons left">cloud</i>
            Play
          </router-link>
        </div>
        <span @click="playVideo" class="splashscreen-overlay"></span>
    </div>
  </div>

    <div class="container rules">
      <h2>The Octopus Quizz !</h2>
      <h3>Once uppon a time...</h3>
      <p></p>

      <h3>Rules</h3>
      Try to challenge the the octopus quizz!
      At the beginning of the quizz, you have 3 lives. You can't gain some lives so keep it carefully !
      The aim of this game is simple: Respond correctly to a set of <b>200</b> questions about general culture, lifestyles.

      <h3>Be careful...</h3>
        Octopus has a big sense of humour and likes traps. As his friend Paul Taylor, he's not afraid of tackling stereotypes of American et english people.
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
      console.log(document.getElementsByClassName('splashscreen-img')[0].play());
    },
  },
};
</script>

<style lang="scss" src="./Home.scss">
</style>
