<template>
  <v-nav>
    <router-link :to="{name: 'root'}" class="brand-logo center">
      Logo
    </router-link>
    <ul class="left">
      <li v-for="n in 3">
        <a href="#!">Item</a>
      </li>
    </ul>
  </v-nav>
</template>

<script>
  export default {
    name: 'navbar',
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

nav {
  z-index: 100;
  background: white;
  position: fixed;
  width: 80%;
  left: 10%;
}
</style>
