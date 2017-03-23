<template>
<nav>
  <div class="nav-wrapper">
    <router-link :to="{name: 'root'}" class="brand-logo center">
      <img :src="logo" alt="" class="logo">
    </router-link>

    <ul class="left">
      <li>
        <router-link :to="{name: 'root'}">
          The game
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'play'}">
          Play now !
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'highscore'}">
          Best scores
        </router-link>
      </li>
    </ul>
    <ul class="right">
      <li>
        <router-link :to="{name: 'form'}">
          Suggest a question
        </router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import logo from '../assets/logo0.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';

export default {
  name: 'navbar',
  data() {
    return {
      logos: [logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8],
    };
  },
  computed: {
    logo() {
      const rand = Math.floor((Math.random() * this.logos.length));
      return this.logos[rand];
    },
  },
};
</script>

<style lang="scss">
$red: #CF142B;

nav ul a {
  color: black;
  font-weight: 300;
}
nav .brand-logo {
  color: black;
}

.logo {
  display: inline-block;
  width: 110px;
  border-radius: 50%;
  height: 110px;
  filter: grayscale(100%);
  transition-duration: 0.2s;
  transition-timing-function: ease;

}

nav {
  z-index: 100;
  background: white;
  position: fixed;
  width: 100%;
  //left: 10%;
}

.logo:hover {
  transition-property: transform, filter;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transform: scale(1.02);
  filter: grayscale(0);
}
</style>
