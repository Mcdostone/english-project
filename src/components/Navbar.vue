<template>

  <v-nav>
    <router-link :to="{name: 'root'}" class="brand-logo center">
      <img :src="logo" alt="" class="logo rotate-hover">
    </router-link>

    <ul class="left">
      <li v-for="n in 3">
        <a href="#!">Item</a>
      </li>
    </ul>
  </v-nav>
</template>

<script>
import logo from '../assets/logo.png';

export default {
  name: 'navbar',
  data() {
    return {
      logo,
    };
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
}

nav {
  z-index: 100;
  background: white;
  position: fixed;
  width: 100%;
  //left: 10%;
}

.rotate-hover {
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
 filter: grayscale(100%);
}

.rotate-hover:hover {
  transform: scale(1.02);
}
</style>
