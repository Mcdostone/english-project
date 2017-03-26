<template>
<div class="">
  <ul id="slide-out" class="side-nav">
     <li>
       <div class="userView">
         <div class="background">
           <img :src="logo">
         </div>
         <router-link :to="{name: 'root'}">
           The game
         </router-link>
         <router-link :to="{name: 'play'}">
           Play now !
         </router-link>
         <router-link :to="{name: 'highscore'}">
           High scores
         </router-link>
         <router-link :to="{name: 'form'}">
           Suggest a question
         </router-link>
      </div>
    </li>
  </ul>

  <nav>
    <div class="nav-wrapper">

      <router-link :to="{name: 'root'}"  data-activates="slide-out" class="brand-logo center">
        <img :src="logo" class="logo">
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
            High scores
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
</div>
</template>

<script>
import $ from 'jquery';
import logo from '../assets/logo0.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';

require('materialize-css');

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
  mounted() {
    $(document).ready(() => {
      $('.brand-logo').sideNav({
        menuWidth: 300,
        closeOnClick: true,
        draggable: true,
      });
    });
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

.side-nav .background img {
  width: 100%;
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
